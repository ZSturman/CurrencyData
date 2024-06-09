type CurrencyExample = {
    amount: number;
    formatted: string;
    unit: string;
    spoken: string;
};

type CurrencyData = {
    symbol: string;
    name: string;
    symbol_native: string;
    decimal_digits: number;
    rounding: number;
    code: string;
    name_plural: string;
    singleUnit: string;
    pluralUnit: string;
    subunit: string;
    subunit_plural: string;
    examples: CurrencyExample[];
};

type Currencies = {
    [code: string]: CurrencyData;
};
