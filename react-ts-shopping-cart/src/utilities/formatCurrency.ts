const CURRECY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD", style: "currency"
})

export function formatCurrency(number: number) {
    return CURRECY_FORMATTER.format(number)
}