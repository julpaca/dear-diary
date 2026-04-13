export const switchItemInList =  <T>(oldArray: T[], value: T): T[] => {
  console.log('oldArray, value: ', oldArray, value)
  
  if (value === undefined || value === null || value.toString().length === 0)
    return oldArray

  if (oldArray.length === 0) {
    const aga = [...oldArray, value]
    return aga
  }

  if (oldArray.includes(value)) {
    return oldArray = oldArray.filter(item => item !== value)
  } else {
    return oldArray = [...oldArray, value]
  }
}