// var lengthOfLastWord = function (s) {

//     let i = s.length - 1;
//     let count = 0;

//     while (s[i] == ' ') {
//         i--;
//     }

//     while (s[i] != ' ') {
//         count++;
//         i--;


//     };
//     return count;

// }

var lengthOfLastWord = function (s) {
    s = s.trimEnd();

    let i = s.length - 1;
    let count = 0;

    while (s[i] != ' ') {
        count++;
        console.log(i);
        i--;

    }
    return count;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "))

