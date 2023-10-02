function factorial_direct(x) {
    return x <= 0 ? 1 : x*factorial_direct(x-1);
}

function factorial_cps(x, c) {
    return x <= 0 ? c(1) : factorial_cps(x-1, y=>c(x*y));
}

display(factorial_direct(6)); 
display(factorial_cps(6, x => x));

function map_direct(f, xs) {
    return is_null(xs)
        ? null
        : pair(f(head(xs)), map_direct(f, tail(xs)));
}

function map_cps(f, xs, c) {
    return is_null(xs)
        ? c(null)
        : map_cps(f, tail(xs), x => c(pair(f(head(xs)), x)));
}

const l1 = list(1,2,3,4,5,6);
display_list(map_direct(x => x*x, l1));
display_list(map_cps(x => x*x, l1, x => x));

function fib_direct(n) {
    return n <= 1 ? 1 : fib_direct(n-1) + fib_direct(n-2);
} 

function fib_cps_v1(n, c) {
    return n <= 1 
        ? c(1) 
        : fib_cps_v1(n-1, x => c(x+fib_cps_v1(n-2, x=>x)));
}

function fib_cps_v2(n, c) {
    return n <= 1 
        ? c(1) 
        : fib_cps_v2(n-1, x => fib_cps_v2(n-2, y => c(x+y)));
}

display(fib_direct(6));
display(fib_cps_v1(6, x=>x));
display(fib_cps_v2(6, x=>x));

0;