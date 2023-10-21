/*
    Q2a) theta(n^2)
*/

// Q2b
function bubblesort_list(L) {
    const len = length(L);
    for (let i = len - 1; i >= 1; i = i - 1) {
        let curr = L;
        for (let j = 0; j < i; j = j + 1) {
            if (head(curr) > head(tail(curr))) {
                const tmp = head(tail(curr));
                set_head(tail(curr), head(curr));
                set_head(curr, tmp);
            }
            curr = tail(curr);
        }
    }
}

const l1 = list(5,4,3,6,10,2,1,8,9,7);
bubblesort_list(l1);
display(l1);

// Q3b
function cc(amount, kinds_of_coins) {
    return amount === 0
        ? 1
        : amount < 0 || kinds_of_coins === 0
        ? 0
        : cc(amount, kinds_of_coins - 1)
        +
        cc(amount - first_denomination(kinds_of_coins),
        kinds_of_coins);
}

function first_denomination(kinds_of_coins) {
    return kinds_of_coins === 1 ? 5 :
    kinds_of_coins === 2 ? 10 :
    kinds_of_coins === 3 ? 20 :
    kinds_of_coins === 4 ? 50 :
    kinds_of_coins === 5 ? 100 : 0;
}

function cc_v1(amount, coins) {
    let memo = [];
    function helper(amt, idx) {
        if (amt === 0) {
            return 1;
        } else if (amt < 0 || idx < 0) {
            return 0;
        } 
        if (memo[amt] !== undefined && memo[amt][idx] !== undefined) {
            return memo[amt][idx];
        }
        if (memo[amt] === undefined) {
            memo[amt] = [];
        }
        memo[amt][idx] = helper(amt - coins[idx], idx) 
            + helper(amt, idx - 1);
        return memo[amt][idx];
    }
    return helper(amount, array_length(coins) - 1);
}

function cc_v2(amount, coins) {
    let memo = [1];
    let n = array_length(coins);
    for (let i = 1; i <= amount; i = i + 1) {
        memo[i] = 0;
    }
    for (let i = 0; i < n; i = i + 1) {
        for (let j = 1; j <= amount; j = j + 1) {
            if (j - coins[i] >= 0) {
                memo[j] = memo[j] + memo[j - coins[i]];  
            }
        } 
    }
    return memo[amount];
}

// display(cc(120,5));
// display(cc_v1(1200, [5,10,20,50,100]));
// display(cc_v1(120, [10,1,2,3,4,5]));
// display(cc_v2(120, [10,1,2,3,4,5]));
display(cc_v2(5, [5,4,3,2,1]));
/*
    3c) O(amount*coins)
*/


0;
