type Obj = {
  [key: string]: any
}

export function renameProps(obj: Obj, keyMap?: Obj): Obj {
  const cloned = { ...obj }

  if (keyMap !== undefined) {
    Object.keys(keyMap).forEach(key => {
      if (Object.keys(cloned).includes(key)) {
        cloned[keyMap[key]] = cloned[key]
        delete cloned[key]
      }
    })
  }

  return cloned
}
