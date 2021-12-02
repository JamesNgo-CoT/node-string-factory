const { exp, expIf, func, tag } = require('./index');

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
			expIf('title', exp('title'), '')
		])
	])
];

console.log(func(content, ['title']));
