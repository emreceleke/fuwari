export function formatDateToDDMMYYYY(date: Date): string {
  return date.toISOString().substring(0, 10)
}
