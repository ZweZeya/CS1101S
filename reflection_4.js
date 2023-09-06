// [1, [2, [3, null]]]
display(list(1, 2, 3));

// [1, [2, 3]]
display(pair(1, pair(2, 3)));

/* 
    [
        [1, [2, null]], 
        [
            [3, [4, null]], [[5, [6, null]], null]
        ]
    ]
*/
display(pair(
    list(1, 2), 
    pair(
        list(3, 4), 
        list(list(5, 6))
        )
    ));


/* 
    Fetch 4 from the following lists
*/
const lst1 = list(7, 6, 5, 4, 3, 2, 1);
display(head(tail(tail(tail(lst1)))));


const lst2 = list(list(7), list(6, 5, 4), list(3, 2), 1);
display(head(tail(tail(head(tail(lst2))))));


const lst3 = list(7, list(list(list(6, 5, list(list(4)), 3), 2)), 1);
display(head(head(head(tail(tail(head(head(head(tail(lst3))))))))));

0;