function exp(value) {
	return `{{ ${value} }}`;
}

function expIf(condition, trueValue, falseValue) {
	return exp(`${condition} ? ${quote(trueValue)} : ${quote(falseValue)}`);
}

function expLoop(loopExp, body) {
	return exp(`() => { const value = []; for(${loopExp}) { value.push(${quote(body)}); } return value.join(''); }`);
}

function func(body, args = []) {
	return `(${args.join(', ')}) => ${quote(body)}`;
}

function quote(value, quote = '`') {
	if (Array.isArray(value)) {
		value = value.join('');
	}

	const exps = [];
	value = value
		.replace(new RegExp('{{ (.+?) }}', 'g'), (match, p1) => {
			exps.push(p1);
			return '{{ }}';
		})
		.replace(new RegExp(`\\\\${quote}`, 'g'), `\\\\${quote}`)
		.replace(new RegExp(`${quote}`, 'g'), `\\${quote}`)
		.replace(new RegExp('{{ }}', 'g'), () => {
			if (quote === '`') {
				return `\${${exps.shift()}}`;
			} else {
				return `${quote} + (${exps.shift()}) + ${quote}`;
			}
		});

	return `${quote}${value}${quote}`;
}

function tag(tag, attrs, children) {
	const openTagContents = [tag];
	if (attrs) {
		for (const key in attrs) {
			if (attrs[key] === null) {
				openTagContents.push(key);
			} else {
				openTagContents.push(`${key}=${quote(attrs[key], '"')}`);
			}
		}
	}

	const openTag = `<${openTagContents.join(' ')}>`;

	if (children === undefined || children === null) {
		return openTag;
	}

	if (Array.isArray(children)) {
		children = children.filter((child) => child !== null).join('');
	}

	return `${openTag}${children}</${tag}>`;
}

function table(attrs, caption, thead, tbody, tfoot) {
	return tag('table', attrs, [
		tag('caption', {}, caption),
		thead ? tag('thead', {}, thead) : null,
		tag('tbody', {}, tbody),
		tfoot ? tag('tfoot', {}, tfoot) : null
	]);
}

module.exports = { exp, expIf, expLoop, func, quote, table, tag };
