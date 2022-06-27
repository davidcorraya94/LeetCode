var lengthOfLongestSubstring = function (s) {
    let length = 0;
    let checkStr = '';
    let i = 0;

    for (i; i < s.length; i++) {
        if (checkStr.includes(s[i])) {
            if (checkStr.length > length) length = checkStr.length;
            checkStr = s[i];
        }
        else {
            checkStr = checkStr.concat(s[i]);
        }

    }

    if (i == s.length) return length + 1;
    else return length;

};


console.log(lengthOfLongestSubstring('abcabcbb'))