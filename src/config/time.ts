/**
 * @flow
 */

type TimeFormat = any

const formats = {}

const toFormatDateParams = (date: string | Date | null) => {
  if (!date) {
    return {}
  }

  const dateObject = new Date(date)

  return {
    year: dateObject.getFullYear(),
    month: dateObject.getMonth() + 1,
    date: dateObject.getDate(),
    dayOfWeek: dateObject.getDay(),
  }
}

const translateTime = (date: string | Date | null, dateFormat: TimeFormat, translate: any) =>
  date && translate(`time.format.${dateFormat}`, toFormatDateParams(date))

export default {
  format: formats,
  toFormatDateParams,
  t: translateTime,
}
