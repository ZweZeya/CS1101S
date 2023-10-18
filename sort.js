function swap(A, first, second) {
    const tmp = A[first];
    A[first] = A[second];
    A[second] = tmp;
}

function get_min_pos(A, start) {
    const len = array_length(A);
    let idx = start;
    for (let i = start; i < len; i = i + 1) {
        if (A[idx] > A[i]) {
            idx = i;
        }
    }
    return idx;
}

function selection_sort(A) {
    const len = array_length(A);
    for (let i = 0; i < len - 1; i = i + 1) {
        const min_idx = get_min_pos(A, i);
        swap(A, i, min_idx);
    }
}

function insertion_sort_1(A) {
    const len = array_length(A);
    for (let i = 1; i < len; i = i + 1) {
        let j = i - 1;
        while (j >= 0 && A[j] > A[j + 1]) {
            swap(A, j, j + 1);
            j = j - 1;
        }
    }
}

function insertion_sort_2(A) {
    const len = array_length(A);
    for (let i = 1; i < len; i = i + 1) {
        const curr = A[i];
        let j = i - 1;
        while (j >= 0 && A[j] > curr) {
            A[j + 1] = A[j];
            j = j - 1;
        }
        A[j + 1] = curr;
    }
}

function merge(A, start, mid, end) {
    const B = [];
    let Bidx = 0;
    let idx_1 = start;
    let idx_2 = mid + 1;
    
    while (idx_1 <= mid && idx_2 <= end) {
        if (A[idx_1] < A[idx_2]) {
            B[Bidx] = A[idx_1];
            idx_1 = idx_1 + 1;
        } else {
            B[Bidx] = A[idx_2];
            idx_2 = idx_2 + 1;
        }
        Bidx = Bidx + 1;
        
    }
    
    while (idx_1 <= mid) {
        B[Bidx] = A[idx_1];
        Bidx = Bidx + 1;
        idx_1 = idx_1 + 1;
    }
    
    while (idx_2 <= end) {
        B[Bidx] = A[idx_2];
        Bidx = Bidx + 1;
        idx_2 = idx_2 + 1;
    }
    
    for (let i = start; i <= end; i = i + 1) {
        A[i] = B[i - start];
    }
}

function merge_sort(A) {
    function merge_helper(A, start, end) {
        if (start < end) {
            const mid = math_floor((start + end) / 2);
            merge_helper(A, start, mid);
            merge_helper(A, mid + 1, end);
            merge(A, start, mid, end);
        } 
    }
    
    merge_helper(A, 0, array_length(A) - 1);
}


const a1 = [10,9,8,7,6,5,4,3,2,1];
const a2 = [10,9,8,7,6,5,4,3,2,1];
const a3 = [10,9,8,7,6,5,4,3,2,1];
const a4 = [10,9,8,7,6,5,4,3,2,1];

selection_sort(a1);
insertion_sort_1(a2);
insertion_sort_2(a3);
merge_sort(a4);

display(a1);
display(a2);
display(a3);
display(a4);

0;



