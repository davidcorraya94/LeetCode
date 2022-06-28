var getRow = function (rowIndex) {

    var nCr = function (n, r) {
        return factorial(n) / (factorial(r) * factorial(n - r));
    }

    var factorial = function (n) {
        if (n == 0) return 1;
        return n * factorial(n - 1);
    };


    let arr = [];

    for (let i = 0; i < rowIndex + 1; i++) {
        arr[i] = nCr(rowIndex, i);
    }

    return arr;
};




