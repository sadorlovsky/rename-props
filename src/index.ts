export function renameProps (obj: object, keyMap?: object): object {
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
