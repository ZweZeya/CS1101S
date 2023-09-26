function concat_num(x: number, y: number): number {
    if (x === 0) {
        return y;
    } else if (y === 0) {
        return x;
    } else {
        const len_y = math_floor(math_log10(y)) + 1;
        return math_pow(10, len_y) * x + y;  
    }
}

function remove_first_digit(x: number): number {
    const len = math_floor(math_log10(x)) + 1;
    if (len === 1) {
        return 0;
    } else {
        const d = math_pow(10, len - 1);
        const q = math_floor(x / d);
        return x - q * d;
    }
}

function greater(x: number, y: number): boolean {
    return x > y;
}

function smaller(x: number, y: number): boolean {
    return x < y;
}

function find(x: number, cmp, init): Pair<number, number> {
    const len = math_floor(math_log10(x)) + 1;

    function iter(pos, mx, tmp, mxPos): Pair<number, number> {
        if (pos === len) {
            const d = math_pow(10, mxPos + 1);
            const q = math_floor(x / d);
            if (mx === 0) {
                return pair(
                    mx, 
                    concat_num(q, x - q * d)
                );
            } else {
                return pair(
                    mx, 
                    concat_num(q, remove_first_digit(x - q * d))
                );
            }
        } else {
            const q = math_floor(tmp / 10);
            const r = tmp - q * 10;
            if (cmp(r, mx)) {
                return iter(
                    pos + 1, 
                    r, 
                    q, 
                    pos
                );
            } else {
                return iter(
                    pos + 1, 
                    mx, 
                    q, 
                    mxPos
                );
            }
            
        }
    }
    
    return iter(0, init, x, 0);
}

function largest(x: number): number {
    const len = math_floor(math_log10(math_abs(x))) + 1;
    
    function iter(n, tmp, built, cmp, init): number {
        if (n === len) {
            return built;
        } else {
            const p: Pair<number, number> = find(tmp, cmp, init);
            return iter(n + 1, tail(p), built * 10 + head(p), cmp, init);
        } 
    }
    
    if (x === 0) {
        return x;
    } else if (x > 0) {
        return iter(0, x, 0, greater, -1);   
    } else {
        return -iter(0, -x, 0, smaller, 10);
    }
}

display(largest(6572378));
display(largest(1792384239));
display(largest(-1010));



0;