export const traverse = (array = []) => array.map(row => row.reduce((prev, current) => prev + current, 0));
