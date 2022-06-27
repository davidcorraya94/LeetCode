// var middleNode = function (head) {
//     let j = 0;
//     let arr = [];
//     for (let i = Math.ceil((head.length - 1) / 2); i < head.length; i++) {
//         arr[j] = head[i];
//         j++;
//     }
//     return arr;
// };


// console.log(middleNode([1, 2, 3, 4, 5]))


var middleNode = function (head) {
    let current = head;

    let length = 0;

    while (current) {
        current = current.next;
        length++;
    }

    let position = Math.ceil((length - 1) / 2);


    current = head
    let s = 0

    while (current) {
        if (s == position) return current
        current = current.next
        s++
    }
};

middleNode([1, 2, 3, 4, 5])