/*
    Q1 
    x will still be 0.
*/

// Q2
function d_filter(pred, xs) {
    if (is_null(xs)) {
        return null;
    } else {
        if (pred(head(xs))) {
            set_tail(xs, d_filter(pred, tail(xs)));
            return xs;
        } else {
            return d_filter(pred, tail(xs));
        }
    }
}

const l1 = list(1, 2, 3, 4, 5, 6, 7, 8, 9, 11);
display_list(d_filter(x => x % 2 === 0, l1));
display_list(l1);


0;