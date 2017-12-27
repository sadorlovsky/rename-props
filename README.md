# rename-props

> rename Object properties

## Install

```bash
$ yarn add rename-props
```

## Usage

```js
const renameProps = require('rename-props')

const obj = { a: 1, b: 2 }
const renamed = renameProps(obj, { a: 'x', b: 'y' })

console.log(renamed) // { x: 1, y: 2 }
```
FP style:

```js
const { map } = require('lodash/fp')
const renameProps = require('rename-props')

const list = [{ a: 1, b: 2 }, { a: 3, b: 4 }]
const renamed = map(renameProps.fp({ a: 'x', b: 'y' }))(list)

console.log(renamed) // [{ x: 1, y: 2 }, { x: 3, y: 4 }]
```

## License

MIT © [Zach Orlovsky](https://orlovsky.rocks)
