import dayjs from 'dayjs'

// Formats: https://day.js.org/docs/en/display/format

export const formatDate = (date: string, format: string) => dayjs(date).format(format)
