function my_map(f, xs) {
    return accumulate((x, y) => pair(f(x), y) ,null, xs);
}

function remove_duplicates(lst) {
    function count(x, cnt, lst) {
        return is_null(lst)
            ? cnt
            : count(
                x, 
                cnt + (head(lst) === x ? 1 : 0), 
                tail(lst)
                );
    }
    
    function iter(built, lst) {
        return is_null(lst) 
            ? built
            : count(head(lst), 0, built) === 0
            ? iter(pair(head(lst), built), tail(lst))
            : iter(built, tail(lst));
    }
    return iter(null, lst);
}

function makeup_amount(x, coins) {
    if (x === 0) {
        return list(null);
    } else if (x < 0 || is_null(coins)) {
        return null;
    } else {
        // Combinations that do not use the head coin.
        const combi_A = makeup_amount(x, tail(coins));
        // Combinations that do not use the head coin
        // for the remaining amount.
        // const combi_B = ...
        // Combinations that use the head coin.
        const combi_C = map(
            x => pair(head(coins), x),
            makeup_amount(x - head(coins), tail(coins))
            );
        return append(combi_A, combi_C);
    }
}

// my_map(x => x + 1, list(1, 2, 3));
// display_list(remove_duplicates(list("a", "x", "b", "c", "c", "b", "d")));
display_list(makeup_amount(22, list(1, 10, 5, 20, 1, 5, 1, 50)));
// display_list(makeup_amount(2, list(1, 1, 1)));

0;