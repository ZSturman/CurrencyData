# Currency Data Project

This project provides a comprehensive list of currency data and functions to work with them.

## Why?

I was working on an app to track debts and credits with friends, and thought it would be neat to convert amounts to different currencies with accurate symbols and terminology.

After generating the data with ChatGPT, I realized it was a bit extra for my needs but maybe someone can find some use for it.

## Types

``` ts
type CurrencyData = {
    symbol: string; // Currency symbol
    name: string; // Currency name
    symbol_native: string; // Native currency symbol
    decimal_digits: number; // Number of decimal digits
    rounding: number; // Rounding factor
    code: string; // Currency code
    name_plural: string; // Plural currency name
    singleUnit: string; // Single unit name
    pluralUnit: string; // Plural unit name
    subunit: string; // Single subunit name
    subunit_plural: string; // Plural subunit name
    examples: CurrencyExample[]; // Examples
};
```

## Data

The data is stored in `data/currencyData.json` and is generated from ChatGPT.

```json
{
    "USD": {
        "symbol": "$",
        "name": "United States Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "USD",
        "name_plural": "United States dollars",
        "singleUnit": "Dollar",
        "pluralUnit": "Dollars",
        "subunit": "cent",
        "subunit_plural": "cents",
        "examples": [
            {
                "amount": 1.00,
                "formatted": "1.00 $",
                "unit": "Dollar",
                "spoken": "one Dollar"
            },
            {
                "amount": 0.50,
                "formatted": "0.50 $",
                "unit": "cent",
                "spoken": "fifty cents"
            },
            {
                "amount": 25.75,
                "formatted": "25.75 $",
                "unit": "Dollars",
                "spoken": "twenty-five Dollars and seventy-five cents"
            }
        ]
    }
}
```

## Installation

```bash
npm install
```

## Usage

```javascript
import { getCurrencyInfo, formatAmount, getSpokenExample } from './src/index';

// Get currency information
const currencyInfo = getCurrencyInfo('USD');
console.log(currencyInfo);

// Format an amount
const formattedAmount = formatAmount('USD', 1234.56);
console.log(formattedAmount);

// Get spoken example
const spokenExample = getSpokenExample('USD', 1234.56);
console.log(spokenExample);
```

## License

This project is licensed under the MIT License.
