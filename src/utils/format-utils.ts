export const formatCurrency = (locale: string, style: string, currency: string, value: number): string => {
  return new Intl.NumberFormat(
    locale,
    {
      style,
      currency
    }
  ).format(value)
}