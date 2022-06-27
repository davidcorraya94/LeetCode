var addTwoNumbers = function (l1, l2) {

    let curr1 = l1;
    let curr2 = l2;
    let str1 = l1;
    let str2 = l2;

    while (curr1) {
        str1 = str1.concat(`${curr1.val}`);
        curr1 = curr1.next;
    }


    while (curr2) {
        str2 = str2.concat(`${curr2.val}`);
        curr2 = curr2.next;
    }
    console.log(BigInt(str1.split('').reverse().join('')));
    console.log(BigInt(str2.split('').reverse().join('')));


    let sum = `${(BigInt(str1.split('').reverse().join(''))) + (BigInt(str2.split('').reverse().join('')))}`.split('').reverse();

    console.log(sum);

    var list = new ListNode(0);
    var head = list;


    var i = 0;


    while (i < sum.length) {
        head.next = new ListNode(sum[i]);
        head = head.next;
        i++;
    }

    return list.next;


};

