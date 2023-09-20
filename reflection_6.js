function insert_cmp(x, xs, cmp) {
    return is_null(xs) 
           ? list(x)
           : cmp(x, head(xs)) 
           ? pair(x, xs)
           : pair(head(xs), insert_cmp(x, tail(xs), cmp));
}

function insertion_sort_cmp(xs, cmp) {
    return is_null(xs) 
           ? xs
           : insert_cmp(head(xs), 
                        insertion_sort_cmp(tail(xs), cmp),
                        cmp);
}

// Test
const xs = list(6, 3, 8, 5, 1, 9, 6, 4, 2, 7);

// (a)
display_list(insertion_sort_cmp(xs, (a, b) => a < b));
// Result: list(1, 2, 3, 4, 5, 6, 6, 7, 8, 9)

// (b)
display_list(insertion_sort_cmp(xs, (a, b) => a > b));
// Result: list(9, 8, 7, 6, 6, 5, 4, 3, 2, 1)

// (c)
display_list(insertion_sort_cmp(xs, 
    (a, b) => false
));
// Result: list(7, 2, 4, 6, 9, 1, 5, 8, 3, 6)

// (d)
display_list(insertion_sort_cmp(xs, 
    (a, b) => a % 2 === 0 
        ? (b % 2 === 0 ? a < b : true)
        : (b % 2 === 0 ? false : a > b)
));
// Result: list(2, 4, 6, 6, 8, 9, 7, 5, 3, 1)

/*
    (a) Θ(xs + ys)
    (b) Θ(nlog(n))
*/

0;