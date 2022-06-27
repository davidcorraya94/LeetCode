var romanToInt = function (s) {

    const list = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    var i = s.length - 1;
    var sum = 0;

    while (i >= 0) {
        if (i - 1 == -1) {
            sum = sum + list[s[i]];
        }
        else if (list[s[i]] <= list[s[i - 1]]) {
            sum = sum + list[s[i]];
        }

        else {
            sum = sum + list[s[i]] - list[s[i - 1]];
            i--;
        }

        i--;

    }

    return sum;
};



console.log(romanToInt('MCMXCIV'));
