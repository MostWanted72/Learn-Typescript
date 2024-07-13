const colors: string[] = ['red', 'blue', 'green'];

// help with inference array
const col1 = colors[0];

// help with autocomplete
colors.forEach((col: string): string => col.toUpperCase());

// flexible inferance
const dates: (Date | string)[] = [new Date(), '2024-12-3'];
