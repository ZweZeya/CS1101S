const pascal = (row, position) => 
    row < 2 || position === 0 || position === row
    ? 1
    : pascal(row - 1, position - 1) + pascal(row - 1, position);

/* 
    Recursive process
*/

0;