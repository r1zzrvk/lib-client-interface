const regex = /\s$|.$/gm

export const textLimiter = (text: string, limit: number): string => {
  if (text.length > limit) {
    return text.slice(0, limit).replace(regex, '...')
  }

  return text
}
