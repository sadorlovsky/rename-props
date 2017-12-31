# rename-props

[![Build Status](https://travis-ci.org/sadorlovsky/rename-props.svg?branch=master)](https://travis-ci.org/sadorlovsky/rename-props)

> rename object properties

## Install

```bash
$ yarn add @sadorlovsky/rename-props
```

## Usage

```js
const renameProps = require('@sadorlovsky/rename-props')

const obj = { a: 1, b: 2 }
const renamed = renameProps(obj, { a: 'x', b: 'y' })

console.log(renamed) // { x: 1, y: 2 }
```
FP style:

```js
const { map, curryRight } = require('lodash/fp')
const renameProps = require('@sadorlovsky/rename-props')

const list = [{ a: 1, b: 2 }, { a: 3, b: 4 }]
const renamed = map(curryRight(renameProps)({ a: 'x', b: 'y' }))(list)

console.log(renamed) // [{ x: 1, y: 2 }, { x: 3, y: 4 }]
```

## License

MIT © [Zach Orlovsky](https://orlovsky.rocks)
