const { exp, expIf, func, tag, table } = require('./index');

const content = [
	tag('!DOCTYPE', { html: null }),
	tag('html', { lang: 'en' }, [
		tag('head', {}, [
			tag('meta', { charset: 'UTF-8' }),
			tag('meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }),
			tag('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }),
			tag('title', {}, exp('title'))
		]),
		tag('body', {}, [
			expIf('title', exp('title'), ''),
			table({}, 'CAPTION', [
				tag('tr', {}, [
					tag('th', { scope: 'col' }, 'HEADER 1'),
					tag('th', { scope: 'col' }, 'HEADER 2'),
					tag('th', { scope: 'col' }, 'HEADER 3'),
					tag('th', { scope: 'col' }, 'HEADER 4')
				])
			], [
				tag('tr', {}, [
					tag('th', { scope: 'row' }, 'DATA 1'),
					tag('td', {}, 'DATA 2'),
					tag('td', {}, 'DATA 3'),
					tag('td', {}, 'DATA 4')
				]),
				tag('tr', {}, [
					tag('th', { scope: 'row' }, 'DATA 1'),
					tag('td', {}, 'DATA 2'),
					tag('td', {}, 'DATA 3'),
					tag('td', {}, 'DATA 4')
				])
			], [
				tag('tr', {}, [
					tag('td', {}, ''),
					tag('td', {}, 'FOOTER 2'),
					tag('td', {}, 'FOOTER 3'),
					tag('td', {}, 'FOOTER 4')
				])
			])
		])
	])
];

console.log(func(content, ['title']));
