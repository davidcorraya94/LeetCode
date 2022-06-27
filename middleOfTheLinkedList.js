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
