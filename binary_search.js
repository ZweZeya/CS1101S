/* Description 
Binary search is cancer.
The following the various loop invariants for binary search. 
(l is left bound, r is right bound and x is the target)

1. l <  x <  r
2. l <= x <  r
3. l <  x <= r
4. l <= x <= r

Reference: https://zhu45.org/posts/2018/Jan/12/how-to-write-binary-search-correctly/
*/

// Sample list
const l1 = list(1, 3, 5, 7, 9, 11);

// return position of x in xs if x in xs else -1 (version 1)
function b_search_v1(xs, x) {
    function iter(l, r) {
        if (l + 1 >= r) {
            return -1;
        } else {
            const m = math_floor((l+r)/2);
            const v = list_ref(xs, m);
            return x === v  
                ? m
                : x > v
                ? iter(m, r) 
                : iter(l, m);
        }
    }
    return iter(-1, length(xs));
}

// return position of x in xs if x in xs else -1 (version 2)
function b_search_v2(xs, x) {
    function iter(l, r) {
        if (l >= r) {
            return -1;
        } else {
            const m = math_floor((l+r)/2);
            const v = list_ref(xs, m);
            return x === v  
                ? m
                : x > v
                ? iter(m+1, r) 
                : iter(l, m);
        }
    }
    return iter(0, length(xs));
}

// return position of x in xs if x in xs else -1 (version 3)
function b_search_v3(xs, x) {
    function iter(l, r) {
        if (l >= r) {
            return -1;
        } else {
            // Use ceil instead of floor
            const m = math_ceil((l+r)/2); 
            const v = list_ref(xs, m);
            return x === v
                ? m
                : x > v
                ? iter(m, r)
                : iter(l, m-1);
        }
    }
    return iter(-1, length(xs)-1);
}

// return position of x in xs if x in xs else -1 (version 4)
function b_search_v4(xs, x) {
    function iter(l, r) {
        if (l - r >= 1) {
            return -1;
        } else {
            const m = math_floor((l+r)/2);
            const v = list_ref(xs, m);
            return x === v  
                ? m
                : x > v
                ? iter(m+1, r)
                : iter(l, m-1);
        }
    }
    return iter(0, length(xs)-1);
}


// TEST
display("b_search_v1");
display(b_search_v1(l1, 11)); // return 5
display(b_search_v1(l1, 1)); // return 0
display(b_search_v1(l1, 7)); // return 3
display(b_search_v1(l1, 12)); // return -1
display(b_search_v1(l1, 0)); // return -1
display(b_search_v1(l1, 4)); // return -1

display("b_search_v2");
display(b_search_v2(l1, 11)); // return 5
display(b_search_v2(l1, 1)); // return 0
display(b_search_v2(l1, 7)); // return 3
display(b_search_v2(l1, 12)); // return -1
display(b_search_v2(l1, 0)); // return -1
display(b_search_v2(l1, 4)); // return -1

display("b_search_v3");
display(b_search_v3(l1, 11)); // return 5
display(b_search_v3(l1, 1)); // return 0
display(b_search_v3(l1, 7)); // return 3
display(b_search_v3(l1, 12)); // return -1
display(b_search_v3(l1, 0)); // return -1
display(b_search_v3(l1, 4)); // return -1

display("b_search_v4");
display(b_search_v4(l1, 11)); // return 5
display(b_search_v4(l1, 1)); // return 0
display(b_search_v4(l1, 7)); // return 3
display(b_search_v4(l1, 12)); // return -1
display(b_search_v4(l1, 0)); // return -1
display(b_search_v4(l1, 4)); // return -1

0;