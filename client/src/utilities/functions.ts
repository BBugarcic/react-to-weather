export const getCityName = (city: string) => {
  return city === 'new_york_city' ? city.replace(/_/g, ' ') : city
}

export const getString = (prop: string | number): string => {
  return typeof prop === 'string' ? prop : ''
}

export const getNumber = (prop: string | number): number | null => {
  return typeof prop === 'number' ? prop : null
}
