// Q1
function insertion_sort_2(A) {
    const len = array_length(A);
    for (let i = 1; i < len; i = i + 1) {
        const curr = A[i];
        let j = i - 1;
        while (j >= 0 && A[j] > curr) {
            A[j + 1] = A[j];
            j = j - 1;
        }
        A[j + 1] = curr;
    }
}

function b_search(A, v) {
    let low = 0;
    let high = array_length(A) - 1;
    while (low <= high) {
        const mid = math_floor((low + high) / 2);
        if (A[mid] === v) {
            return true;
        } else if (v < A[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return false;
}

function make_optimized_search(A) {
    const B = [];
    const len = array_length(A);
    for (let i = 0; i < len; i = i + 1) {
        B[i] = A[i];
    }
    insertion_sort_2(B);
    display(B);
    return x => b_search(B, x);
}

const a1 = [10,9,8,7,6,5,4,3,2,1];
const my_optimized_search = make_optimized_search(a1);
display(my_optimized_search(1)); // true
display(my_optimized_search(9)); // true
display(my_optimized_search(10)); // true
display(my_optimized_search(0)); // false
display(my_optimized_search(11)); // false

// Q2
function fib(n) {
    const dp = [];
    for (let i = 0; i <= n; i = i + 1) {
        if (i < 2) {
            dp[i] = i;
        } else {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
    }
    return dp[n];
}

function fib2(n) {
    let curr = 0;
    let prev = 0;
    for (let i = 0; i <= n; i = i + 1) {
        if (i < 2) {
            curr = curr + i;
        } else {
            curr = curr + prev;
            prev = curr - prev;
        }
    }
    return curr;
}

display(fib(0));
display(fib(1));
display(fib(8));
display(fib(11));

display(fib2(0));
display(fib2(1));
display(fib2(8));
display(fib2(11));

/*
    Q3
    order of growth in time: O(nk)
    order of growth in space: O(nk)
*/

0;