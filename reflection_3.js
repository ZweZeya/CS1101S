function sum(term, a, next, b) { 
    return a > b
            ? 0
            : term(a) + sum(term, next(a), next, b);
}

const my_sum = (n) => n === 1 ? 2 : (n + 1) * n + my_sum(n - 1);

const my_sum2 = (n) => sum(x => x * (x + 1), 1, x => x + 1, n);

const sum_iter = (term, a, next, b) => iter(0, term, a, next, b);

const iter = (res, term, a, next, b) => a > b 
        ? res 
        : iter(res + term(a), term, next(a), next, b);
        
const my_sum3 = (n) => sum_iter(x => x * (x + 1), 1, x => x + 1, n);

/*
    1.  -> f(y => y + z);
        -> f(y => y + 1);
        -> g(3);
        -> 3 + 1;
        -> 4
    3.  Recursive process. Linear space and time complexity
    6.  a) x, f, g, y, h
        b) x (constant, parameter), 
            f (function, parameter), 
            g (parameter, function),
            y (parameter),
            h (function)
        c) 12
        d) 7
*/


display(my_sum(7));
display(my_sum2(7));
display(my_sum3(7));

0;