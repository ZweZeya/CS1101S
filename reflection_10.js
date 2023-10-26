/*
    Q1
    1 2 3
    1 2 3 4 5

    memoized
    0 1 2 3
    4 5
*/

// Q2
function zip_list_of_streams(L) {
    function helper(xs) {
        if (is_null(xs)) {
            return helper(L);
        } 
        const res = pair(head(head(xs)), () => helper(tail(xs)));
        set_head(xs, stream_tail(head(xs)));
        return res;
    }
    return helper(L);
}

const s1 = integers_from(1);
const s2 = integers_from(1);
const s3 = integers_from(1);

display(eval_stream(zip_list_of_streams(list(s1, s2, s3)), 12));

// Q3
function add_streams(s1, s2) {
    return is_null(s1)
        ? s2
        : is_null(s2)
        ? s1
        : pair(head(s1) + head(s2),
                () => add_streams(stream_tail(s1),
                stream_tail(s2))
            );
}

function partial_sums(s) {
    if (is_null(s)) { return null; }
    const newS = pair(
        head(s), 
        () => add_streams(newS, stream_tail(s))
    );
    return newS;
}

const s4 = partial_sums(pair(1,  () => pair(2, () => null)));
display(eval_stream(s1, 10));
display(head(s4));
display(head(stream_tail(s4)));

/*
    Yes, works on finite and empty streams
*/
0;
