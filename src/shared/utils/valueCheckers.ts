export const checkIfEmpty = (value: string | number | undefined | null) => {
  if (typeof value === 'string')
    return value === undefined || value === null || value.trim().length === 0
  else
    return value === undefined || value === null
}