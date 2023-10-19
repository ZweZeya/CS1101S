// exponential
function fib_1(n) {
    return n < 2 ? n : fib_1(n - 1) + fib_1(n - 2);
}

// quadratic
function fib_2(n) {
    function cps(n, cb) {
        return n < 2 ? cb(n) : cps(n - 1, x => cb(x + fib_2(n - 2)));
    }
    return cps(n, x => x);
}

// linear
function fib_3(n) {
    let curr = 0;
    let prev = 0;
    for (let i = 0; i <= n; i = i + 1) {
        if (i < 2) {
            curr = i;
        } else {
            curr = curr + prev;
            prev = curr - prev;
        }
    }
    return curr;
}

// logarithm
function fib_4(n) {
    function multiply_matrices(A, B) {
        const C = [];
        const m = array_length(A);
        const n = array_length(B);
        const p = array_length(B[0]);
        for (let i = 0; i < m; i = i + 1) {
            C[i] = [];
            for (let j = 0; j < p; j = j + 1) {
                C[i][j] = 0;
                for (let k = 0; k < n; k = k + 1) {
                    C[i][j] = C[i][j] + A[i][k] * B[k][j];
                }
            }
        }
        return C;
    }
    
    function matrix_expo(A, p) {
        let B = [[1, 0], [0, 1]];
        while (p > 0) {
            if (p % 2 === 1) {
                B = multiply_matrices(B, A);
            }
            A = multiply_matrices(A, A);
            p = math_floor(p / 2);
        }
        return B;
    }
    
    return n < 2 ? n : matrix_expo([[1, 1], [1, 0]], 14)[0][0];
}

// Test Cases
display(fib_1(15));
display(fib_2(15));
display(fib_3(15));
display(fib_4(15));

0;