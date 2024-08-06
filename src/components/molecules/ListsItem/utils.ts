export const cutDescription = (text: string, amountOfWords: number): string => {
  if (!amountOfWords) {
    return text
  }

  return text
    .split(' ')
    .slice(0, amountOfWords - 1)
    .join(' ')
    .replace(/,$/gm, '')
}
