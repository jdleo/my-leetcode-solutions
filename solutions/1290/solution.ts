interface ListNode {
    val: number;
    next: ListNode | null;
}

function getDecimalValue(head: ListNode | null): number {
    // result binary string
    let res: string = '';

    // keep going until head is null
    while (head) {
        // add bit to string
        res += `${head.val}`;
        // go next
        head = head.next;
    }

    // convert bin string to dec
    return parseInt(res, 2);
}
