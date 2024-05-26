export const generateId = (): string => {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let id = ''

  for (let i = 0; i < 10; i++) {
    id += characters[Math.floor(Math.random() * characters.length)]
  }

  return id
}
