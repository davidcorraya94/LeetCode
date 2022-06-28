var generate = function (numRows) {
    let arr = new Array(numRows);

    for (let i = 0; i < numRows; i++) {
        arr[i] = new Array(i + 1);

        for (let j = 0; j < i + 1; j++) {
            arr[i][j] = (j == 0) ? 1 : (j == i) ? 1 : arr[i - 1][j - 1] + arr[i - 1][j];
        }
    }
    return arr;
};




