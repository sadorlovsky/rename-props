import test from 'ava'
import { renameProps } from '../source'

test('do nothing if no keys to rename', t => {
  const renamed = renameProps({ x: 1, y: 2 })
  t.deepEqual(renamed, { x: 1, y: 2 })
})

test('rename properly', t => {
  const renamed = renameProps({ x: 1, y: 2 }, { x: 'z', y: 'w' })
  t.deepEqual(renamed, { z: 1, w: 2 })
})

test('partially rename', t => {
  const renamed = renameProps({ x: 1, y: 2 }, { x: 'z' })
  t.deepEqual(renamed, { z: 1, y: 2 })
})

test('skip if there are no such keys', t => {
  const renamed = renameProps({ x: 1 }, { y: 'z' })
  t.deepEqual(renamed, { x: 1 })
})
