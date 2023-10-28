/*
    Q1
    A is a sequence of powers of 2.
    B is a factorial sequence
*/

// Q2
const non_neg_integers = integers_from(0);

function add_streams(s1, s2) {
    return is_null(s1)
        ? s2
        : is_null(s2)
        ? s1
        : pair(head(s1) + head(s2),
            () => add_streams(stream_tail(s1),
            stream_tail(s2)));
}

function mul_stream(s1, s2) {
    return is_null(s1)
        ? s2
        : is_null(s2)
        ? s1
        : pair(head(s1) * head(s2),
            () => mul_stream(stream_tail(s1),
            stream_tail(s2))); 
}

function partial_sum(s) {
    return is_null(s)
        ? null
        : pair(head(s), () => add_streams(partial_sum(s), stream_tail(s)));
}

function fun_to_series(fun) {
    return stream_map(fun, non_neg_integers);
}

const ones = pair(1, () => ones);
const alt_ones = pair(1, () => pair(-head(alt_ones), () => alt_ones));
// display(head(alt_ones));
// display(head(stream_tail(alt_ones)));
// display(head(stream_tail(stream_tail(alt_ones))));

const zeros = add_streams(alt_ones, stream_tail(alt_ones));
// display(head(zeros));
// display(head(stream_tail(zeros)));
// display(head(stream_tail(stream_tail(zeros))));

function create_generic_power_series(s) {
    return i => fun_to_series(x => math_pow(i, x));
}

function create_power_series(co_stream) {
    return i => mul_stream(
        co_stream,
        fun_to_series(x => math_pow(i, x))
        );
}

const S1 = create_power_series(ones)(4);
// display(head(S1));
// display(head(stream_tail(S1)));
// display(head(stream_tail(stream_tail(S1))));

const S2 = create_power_series(integers_from(1))(1);
// display(head(S2));
// display(head(stream_tail(S2)));
// display(head(stream_tail(stream_tail(S2))));

const P1 = partial_sum(S1);
// display(head(P1));
// display(head(stream_tail(P1)));
// display(head(stream_tail(stream_tail(P1))));

const P2 = partial_sum(S2);
// display(head(P2));
// display(head(stream_tail(P2)));
// display(head(stream_tail(stream_tail(P2))));

0;