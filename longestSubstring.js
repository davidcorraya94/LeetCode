var lengthOfLongestSubstring = function (s) {
    let str = '';
    let final = '';
    let length = 0;
    let i = 0;
    let j = 0;
    while (j < s.length) {
        if (str.includes(s[j])) {
            i++;
            j = i;
            str = '';
        }
        else {
            str = str.concat(s[j]);
            if (str.length >= final.length) {
                final = str;
                length = final.length;
            }
            j++;
        }
    }
    return length;
};





