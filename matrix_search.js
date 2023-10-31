function dfs(M, r, c) {
    const m = array_length(M);
    const n = array_length(M[0]);
    
    const vis = [];
    for (let i = 0; i < m; i = i + 1) {
        vis[i] = [];
        for (let j = 0; j < n; j = j + 1) {
            vis[i][j] = false;
        }
    }
    
    // const dr = [0, 1, 0, -1];
    // const dc = [1, 0, -1, 0];
    // const D = 4;
    const dr = [0, 1, 0, -1, 1, -1, 1, -1];
    const dc = [1, 0, -1, 0, 1, -1, -1, 1];
    const D = 8;
    
    function helper(r, c, cnt) {
        M[r][c] = cnt;
        for (let i = 0; i < D; i = i + 1) {
            const nR = r + dr[i];
            const nC = c + dc[i];
            if (
                nR >= 0 &&
                nR < m &&
                nC >= 0 &&
                nC < n &&
                !vis[nR][nC]
            ) {
                vis[nR][nC] = true;
                helper(nR, nC, cnt + 1);
            }
        }
    }
    
    vis[r][c] = true;
    helper(r, c, 0);
}

function bfs(M, r, c) {
    const m = array_length(M);
    const n = array_length(M[0]);
    
    const q = [];
    let start = 0;
    let end = 0;
    
    const vis = [];
    for (let i = 0; i < m; i = i + 1) {
        vis[i] = [];
        for (let j = 0; j < n; j = j + 1) {
            vis[i][j] = false;
        }
    }

    M[r][c] = 0;
    vis[r][c] = true;
    q[end] = [r,c,0];
    end = end + 1;
    
    // const dr = [0, 1, 0, -1];
    // const dc = [1, 0, -1, 0];
    // const D = 4;
    const dr = [0, 1, 0, -1, 1, -1, 1, -1];
    const dc = [1, 0, -1, 0, 1, -1, -1, 1];
    const D = 8;
    
    while (start < end) {
        const curr = q[start];
        start = start + 1;
        for (let i = 0; i < D; i = i + 1) {
            const nR = curr[0] + dr[i];
            const nC = curr[1] + dc[i];
            if (
                nR >= 0 &&
                nR < m &&
                nC >= 0 &&
                nC < n &&
                !vis[nR][nC]
            ) {
                q[end] = [nR,nC,curr[2]+1];
                end = end + 1;
                vis[nR][nC] = true;
                M[nR][nC] = curr[2]+1;
            }
        }
    }
}

function create_zero_matrix(r, c) {
    const M = [];
    for (let i = 0; i < r; i = i + 1) {
        M[i] = [];
        for (let j = 0; j < c; j = j + 1) {
            M[i][j] = 0;
        }
    }
    return M;
}

const M = create_zero_matrix(5, 5);
// bfs(M, 5, 5);
dfs(M, 2, 2);
M;

