import dayjs from 'dayjs'

// Formats: https://day.js.org/docs/en/display/format

export const formatDate = (date: string | Date, format: string) => dayjs(date).format(format)
