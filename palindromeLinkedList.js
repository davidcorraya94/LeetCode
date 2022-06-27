var isPalindrome = function (head) {
    let current = head;
    let i = 0;
    let arr = [];

    while (current) {
        arr[i] = current.val;
        current = current.next;
        i++;
    }

    let k = Math.floor((i / 2) - 1);

    for (let j = Math.ceil(i / 2); j < arr.length; j++) {
        if (arr[j] != arr[k]) return false;
        else k--;
    }

    return true;
};



