# rename-props [![build](https://github.com/sadorlovsky/rename-props/workflows/build/badge.svg)](#rename-props) [![codecov](https://codecov.io/gh/sadorlovsky/rename-props/branch/master/graph/badge.svg)](https://codecov.io/gh/sadorlovsky/rename-props)

> rename object properties

## Install

```bash
$ yarn add @sadorlovsky/rename-props
```

## Usage

```ts
import { renameProps } from '@sadorlovsky/rename-props'

const obj = { a: 1, b: 2 }
const renamed = renameProps(obj, { a: 'x', b: 'y' })

console.log(renamed) // { x: 1, y: 2 }

```

FP style:

```ts
import { map, curryRight } from 'lodash/fp'
import { renameProps } from '@sadorlovsky/rename-props'

const list = [{ a: 1, b: 2 }, { a: 3, b: 4 }]
const curried = curryRight(renameProps)
const rename = map(curried({ a: 'x', b: 'y' }))
const renamed = rename(list)

console.log(renamed) // [{ x: 1, y: 2 }, { x: 3, y: 4 }]
```

## License

MIT © [Zach Orlovsky](https://orlovsky.dev)
