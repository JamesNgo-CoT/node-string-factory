const { exp, expIf, expLoop, func, quote, style, table, tag } = require('./index');

////////////////////////////////////////////////////////////////////////////////
// TAG
////////////////////////////////////////////////////////////////////////////////

(() => {
	console.log('\x1b[36mTAG\x1b[0m');

	const content = tag('div', { class: 'class-name' }, [
		tag('div', {}, [
			'TEXT',
			tag('br', {}),
			'TEXT'
		])
	]);

	console.log(content);
})();

////////////////////////////////////////////////////////////////////////////////
// TABLE
////////////////////////////////////////////////////////////////////////////////

(() => {
	console.log('\x1b[36mTABLE\x1b[0m');

	const content = table({ border: 1, cellpadding: 0, cellspacing: 0 }, 'CAPTION', [
		tag('tr', {}, [
			tag('th', { scope: 'col' }, 'HEADER 1'),
			tag('th', { scope: 'col' }, 'HEADER 2'),
			tag('th', { scope: 'col' }, 'HEADER 3')
		])
	], [
		tag('tr', {}, [
			tag('th', { scope: 'row' }, 'HEADER 1'),
			tag('td', {}, 'DATA 2'),
			tag('td', {}, 'DATA 3')
		]),
		tag('tr', {}, [
			tag('th', { scope: 'row' }, 'HEADER 1'),
			tag('td', {}, 'DATA 2'),
			tag('td', {}, 'DATA 3')
		])
	], [
		tag('tr', {}, [
			tag('td', {}, ''),
			tag('td', {}, 'FOOTER 2'),
			tag('td', {}, 'FOOTER 3')
		])
	]);

	console.log(content);
})();

////////////////////////////////////////////////////////////////////////////////
// STYLE
////////////////////////////////////////////////////////////////////////////////

(() => {
	console.log('\x1b[36mSTYLE\x1b[0m');

	const content = tag('style', { title: 'Alt Style' }, 	style({
		'@media all': {
			'body': {
				'color': 'inherit',
				'font-size': '1rem'
			},
			'p': {
				'line-height': 1
			}
		}
	}));

	console.log(content);
})();

////////////////////////////////////////////////////////////////////////////////
// QUOTE
////////////////////////////////////////////////////////////////////////////////

(() => {
	console.log('\x1b[36mQUOTE\x1b[0m');

	const content = quote([
		tag('div', { class: 'class-name' }, [
			tag('div', {}, 'TEXT')
		])
	]);

	console.log(content);
})();

////////////////////////////////////////////////////////////////////////////////
// FUNC
////////////////////////////////////////////////////////////////////////////////

(() => {
	console.log('\x1b[36mFUNC\x1b[0m');

	const content = func(['data'], quote([
		tag('div', { class: 'class-name' }, [
			tag('div', {}, [
				exp('data')
			])
		])
	]));

	console.log(content);
})();

////////////////////////////////////////////////////////////////////////////////
// EXP
////////////////////////////////////////////////////////////////////////////////

(() => {
	console.log('\x1b[36mEXP\x1b[0m');

	const content = func(['data'], quote([
		tag('div', { class: 'class-name' }, [
			tag('div', {}, [
				exp('data')
			])
		])
	]));

	console.log(content);
})();

////////////////////////////////////////////////////////////////////////////////
// EXPIF
////////////////////////////////////////////////////////////////////////////////

(() => {
	console.log('\x1b[36mEXPIF\x1b[0m');

	const content = func(['data'], quote([
		tag('div', { class: 'class-name' }, [
			tag('div', {}, [
				expIf('data', [
					'data'
				], [
					quote('Default Value')
				])
			])
		])
	]));

	console.log(content);
})();

////////////////////////////////////////////////////////////////////////////////
// EXPLOOP
////////////////////////////////////////////////////////////////////////////////

(() => {
	console.log('\x1b[36mEXPLOOP\x1b[0m');

	const content = func(['data'], quote([
		tag('div', { class: 'class-name' }, [
			tag('div', [`data-count=${exp('data.length')}`], [
				expLoop('let index = 0, length = data.length; index < length; index++', [
					'data[index]'
				], ', ')
			])
		])
	]));

	console.log(content);
})();
