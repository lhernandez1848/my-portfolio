

export const filterClassnames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}