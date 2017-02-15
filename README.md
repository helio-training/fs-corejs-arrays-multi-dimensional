# Assignment - Multi Dimensional Arrays

> Arrays within Arrays

## Introduction

Multi-dimensional arrays  are arrays that contain one or many arrays as items within the array.  In math, these are often referred to as matrices. 

```js
const matrix = [
/**
 * 
 * Columns  
 * | | |
 * v v v
*/ 
  [1,2,3], // <-- Row
  [4,5,6], // <-- Row
  [7,8,9]  // <-- Row
];
```


### Accessing using indexes

Accessing a multi-dimensional array is accessed via the same mechanism that a normal array utilizes. Indexes.  The difference resides in the addtional accessor that is placed after the first one. 
 
```js
const matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

const five = matrix[1][1]; // The first index relates to the "row", and the second relates to the "column"

```

The double index is the same as doing this: 

```js
const matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,8]
];

const row = matrix[1];
const five = row[1]; 
```

### Building smart loops

Looping over a multi-dimensional array is achieved using the same constructs of looping already discussed.  The difference being a loop withing a loop.

```js
const matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,8]
];

matrix.forEach(row => {
  return row.forEach(column => {
    // Do something with the column...
   
  });
})
```
 
### Jagged Arrays

The matrix variable above is an example above is has the same amount of items in each row. However, you can have an multi-dimensional array that contains a variable number of items.

```js
const jagged = [
  [1],
  [2, 3, 4, 5, 6],
  [7, 8],
  [9]
];
```

Writing a loop withing a loop allows us to utilize the same code for a jagged or square array.  Meaning, we don't need to worry about how many items each row contains.  The looping will determine how many times it will loop over a various row.
 
```js
const jagged = [
  [1],
  [2, 3, 4, 5, 6],
  [7, 8],
  [9]
];

jagged.forEach(row => {
  return row.forEach(column => {
    // Do something with the column...
  });
});
```

## Assignment

1. Create a function named `traverse` that can loop over a multi-dimensional array regardless of the shape of the array (jagged or square). 
    1. Traverse should return a single dimensional array.  The values in the array are the sum of the columns for each row.  
        ```js
        const array = [
           [1,1,1], 
           [2,2,2], 
           [3]
        ];

        traverse(array) // returns [3, 6, 3]
        ```
