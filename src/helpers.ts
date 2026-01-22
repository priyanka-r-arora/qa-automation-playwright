export function convertAmountToNumber(amount: string): number {
  return parseFloat(amount.trim().split(" ")[0].replace(",", ""));
}
