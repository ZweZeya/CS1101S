const flatten_list = l => 
    is_null(l)
    ? l
    : is_list(head(l))
    ? append(flatten_list(head(l)), flatten_list(tail(l)))
    : pair(head(l), flatten_list(tail(l)));

// const tree_sum = t => 
//     is_null(t)
//     ? 0
//     : is_list(head(t))
//     ? tree_sum(head(t)) + tree_sum(tail(t))
//     : head(t) + tree_sum(tail(t));
    
function accumulate_tree(f, op, initial, tree) {
    return accumulate(
        (x, y) => 
            is_list(x)
            ? op(
                accumulate_tree(f, op, initial, x),
                y
                )
            : op(f(x), y), 
        initial, tree);
}

function flatten(tree) {
    return accumulate_tree(x => list(x), append, null , tree);
}

function tree_sum(tree) {
    return accumulate_tree(x => x, (x, y) => x + y, 0 , tree);
}

function count_data_items(tree) {
    return accumulate_tree(x => 1, (x, y) => x + y, 0 , tree);
}
    
const LoL = list(list(1, 2), list(3, 4, 5, 6), null, list(7, 8, 9));
display(flatten_list(LoL)); // Returns list(1, 2, 3, 4, 5, 6, 7, 8, 9)

const my_tree = list(1, list(2, list(3, 4), 5), list(6, 7));
const t1 = list(1, 2, 3, 4);
display(tree_sum(my_tree)); // Returns 28

display(count_data_items(LoL));
0;

