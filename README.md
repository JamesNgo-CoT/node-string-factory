# node-string-factory

Version 2.0.0

## Installation

```
npm install git+https://github.com/JamesNgo-CoT/node-string-factory.git#2.0.0
```

## Usage

``` JavaScript
const { exp, expIf, expLoop, func, quote, table, tag } = require('node-string-factory');
```

### tag

``` JavaScript
const content = tag('div', { class: 'class-name' }, [
  tag('div', {}, [
    'TEXT',
    tag('br', {}),
    'TEXT'
  ])
]);

console.log(content); // <div class="class-name"><div>TEXT<br>TEXT</div></div>
```

### table

``` JavaScript
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

console.log(content); // <table border="1" cellpadding="0" cellspacing="0"><caption>CAPTION</caption><thead><tr><th scope="col">HEADER 1</th><th scope="col">HEADER 2</th><th scope="col">HEADER 3</th></tr></thead><tbody><tr><th scope="row">HEADER 1</th><td>DATA 2</td><td>DATA 3</td></tr><tr><th scope="row">HEADER 1</th><td>DATA 2</td><td>DATA 3</td></tr></tbody><tfoot><tr><td></td><td>FOOTER 2</td><td>FOOTER 3</td></tr></tfoot></table>
```

### quote

``` JavaScript
const content = quote([
  tag('div', { class: 'class-name' }, [
    tag('div', {}, 'TEXT')
  ])
]);

console.log(content); // `<div class="class-name"><div>TEXT</div></div>`
```

### func

``` JavaScript
const content = func(['data'], quote([
  tag('div', { class: 'class-name' }, [
    tag('div', {}, [
      exp('data')
    ])
  ])
]));

console.log(content); // () => `<div class="class-name"><div>TEXT</div></div>`
```

### exp

``` JavaScript
const content = func(['data'], quote([
  tag('div', { class: 'class-name' }, [
    tag('div', {}, [
      exp('data')
    ])
  ])
]));

console.log(content); // (data) => `<div class="class-name"><div>${data}</div></div>`
```

### expIf

``` JavaScript
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

console.log(content); // (data) => `<div class="class-name"><div>${data ? data : `Default Value`}</div></div>`
```

### expLoop

``` JavaScript
const content = func(['data'], quote([
  tag('div', { class: 'class-name' }, [
    tag('div', {}, [
      expLoop('let index = 0, length = data.length; index < length; index++', [
        'data[index]'
      ], ', ')
    ])
  ])
]));

console.log(content); // (data) => `<div class="class-name"><div>${(() => { const expLoopValue0 = []; for(let index = 0, length = data.length; index < length; index++) { expLoopValue0.push(data[index]); } return expLoopValue0.join(`, `); })()}</div></div>`
```
