import test from 'ava'
import renameProps from '../src'

test('do nothing if no keys to rename', t => {
  const renamed = renameProps({ x: 1, y: 2 })
  t.deepEqual(renamed, { x: 1, y: 2 })
})

test('rename properly', t => {
  const renamed = renameProps({ x: 1, y: 2 }, { x: 'z', y: 'w' })
  t.deepEqual(renamed, { z: 1, w: 2 })
})

test('curry', t => {
  const renamed = renameProps.fp({ x: 'z', y: 'w' })({ x: 1, y: 2})
  t.deepEqual(renamed, { z: 1, w: 2 })
})
