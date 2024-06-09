import currencyData from '../data/currencyData.json';

type CurrencyDataIndex = {
    [key: string]: CurrencyData;
}

const indexedCurrencyData: CurrencyDataIndex = currencyData;

// Function to get currency information by code
export function getCurrencyInfo(code: string): CurrencyData | null {
    return indexedCurrencyData[code] || null;
}

// Function to format an amount according to the currency's format
export function formatAmount(code: string, amount: number): string | null {
    const currency = getCurrencyInfo(code);
    if (!currency) {
        return null;
    }

    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: code,
        minimumFractionDigits: currency.decimal_digits,
        maximumFractionDigits: currency.decimal_digits,
    }).format(amount);
}

// Function to get an example of a spoken representation of an amount
export function getSpokenExample(code: string, amount: number): string | null {
    const currency = getCurrencyInfo(code);
    if (!currency) {
        return null;
    }

    const example = currency.examples.find((ex) => ex.amount === amount);
    return example ? example.spoken : null;
}

console.log("Currency data loaded")

