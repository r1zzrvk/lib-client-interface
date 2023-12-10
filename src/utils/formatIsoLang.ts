export const formatIsoLang = (code: string): string => {
  const language = new Intl.DisplayNames(['en'], { type: 'language' })

  return String(language.of(code))
}
