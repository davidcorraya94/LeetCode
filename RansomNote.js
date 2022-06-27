var canConstruct = function (ransomNote, magazine) {

    for (let i = 0; i <= magazine.length; i++) {
        if (ransomNote.length == 0) return true;
        else if (ransomNote[0] == magazine[i]) {
            magazine = magazine.replace(magazine[i], '');
            ransomNote = ransomNote.replace(ransomNote[0], '');
            i = -1;
        }
    }

    return false;
};


// var canConstruct = function (ransomNote, magazine) {

//     for (let i = 0; i < magazine.length; i++) {
//         if (ransomNote.length == 0) return true;
//         else if (ransomNote[0] == magazine[i]) {
//             magazine = magazine.replace(magazine[i], '');
//             ransomNote = ransomNote.replace(ransomNote[0], '');
//             i = -1;
//         }
//         else {
//             return false;
//         }
//     }
// };

console.log(canConstruct('', ''));



