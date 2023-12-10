export const removeHTMLFromString = (string: string, replace: string): string => string.replace(/<[^>]*>?/gm, replace)
