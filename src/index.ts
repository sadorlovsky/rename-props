function renameProps (obj: Object, keyMap?: Object): Object {
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

namespace renameProps {
  export function fp (keyMap: Object, obj?: Object): any {
    if (obj === undefined) {
      return function (obj: Object) {
        return renameProps(obj, keyMap)
      }
    } else {
      return renameProps(obj, keyMap)
    }
  }
}

export default renameProps
