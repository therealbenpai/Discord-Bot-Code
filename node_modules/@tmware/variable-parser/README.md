# Variable Parser

<div>
  <p align="center">
    <a href="https://www.npmjs.com/package/@tmware/variable-parser">
      <img src="https://img.shields.io/npm/v/@tmware/variable-parser?style=flat" />
    </a>
    <a href="https://github.com/tmware/variable-parser/actions">
      <img src="https://github.com/tmware/variable-parser/workflows/Build/badge.svg" />
    </a>
    <a href="https://tmuniversal.eu/redirect/patreon">
      <img src="https://img.shields.io/badge/Patreon-support_me-fa6956.svg?style=flat&logo=patreon" />
    </a>
    <a href="https://www.npmjs.com/package/@tmware/variable-parser">
      <img src="https://img.shields.io/npm/dt/@tmware/variable-parser" />
    </a>
    <br />
    <a href="https://bundlephobia.com/result?p=@tmware/variable-parser">
      <img src="https://img.shields.io/bundlephobia/min/@tmware/variable-parser?label=packge%20size" />
    </a>
    <a href="https://github.com/tmware/variable-parser/issues">
      <img src="https://img.shields.io/github/issues/tmware/variable-parser.svg?style=flat">
    </a>
    <a href="https://github.com/tmware/variable-parser/graphs/contributors">
      <img src="https://img.shields.io/github/contributors/tmware/variable-parser.svg?style=flat">
    </a>
    <a href="https://github.com/tmware/variable-parser/blob/stable/LICENSE.md">
      <img src="https://img.shields.io/github/license/tmware/variable-parser.svg?style=flat">
    </a>
  </p>
</div>

[Variable Parser] helps you translate in-string variables (i.e. `{something} like this`, where `something` would be a variable) to values.

## Getting Started

### Installation

With npm: `npm install --save @tmware/variable-parser`

With yarn: `yarn add @tmware/variable-parser`

### Usage

```js
const VariableParser = require('@tmware/variable-parser')

const YourParser = new VariableParser() // initialize without data
```

```js
const YourParser = new VariableParser({
  testVariable: 'World',
  anotherOne: 'Hello',
  someNumber: 69
})
// initialize with data
```

```js
console.log(
  YourParser.parse(
    '{anotherOne} {testVariable}! some text to show you that this works. {someNumber}'
  )
)
// => 'Hello World! some text to show you that this works. 69'
```

### More advanced examples

Custom indicators (those things around the variables. default: `{}`)

```js
const YourParser = new VariableParser({ someVariable: 3 }, '[]')

const result = YourParser.parse('[someVariable]')

console.log(result)
// => '3'
// Note: This is still a string
```

## License

Please refer to the [LICENSE](LICENSE.md) file.

[variable parser]: https://github.com/TMWare/variable-parser
