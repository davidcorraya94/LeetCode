var lengthOfLastWord = function (s) {
    s = s.trimEnd();

    let i = s.length - 1;
    let count = 0;

    while (s[i] != ' ') {
        count++;
        i--;

    }
    return count;
};


