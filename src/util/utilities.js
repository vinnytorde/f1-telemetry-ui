export function getLast(arr) {
  return arr?.[arr.length - 1]
}

export function getArgumentFromFunction(argumentNumber) {
  return (...args) => args[argumentNumber]
}

export function getKey(field) {
  return obj => obj?.[field]
}

export function getKeys(...keys) {
  return obj => {
    const result = {}
    keys.forEach(key => {
      result[key] = obj[key]
    })
    return result
  }
}

export function getRange(end = 1, start = 0, multiple = 1) {
  const length = Math.trunc((end - start) / multiple) + 1
  return new Array(length).fill('').map((_, i) => i * multiple + start)
}
