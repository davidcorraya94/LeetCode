var kWeakestRows = function (mat, k) {
    var list = [];
    var finalList = [];

    for (let i = 0; i < mat.length; i++) {
        let count = 0;
        for (let j of mat[i]) {
            if (j == 1) count++;
        }
        list[i] = [i, count];

        list.sort(function (a, b) {
            return (a[1] - b[1]);
        });
    };


    for (let x = 0; x < k; x++) {
        finalList[x] = list[x][0];
    }

    return finalList;
}

