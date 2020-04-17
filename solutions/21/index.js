function mergeTwoLists(l1, l2) {
    // dummy list nodes for output
    const dummy_head = new ListNode(0);
    let dummy = dummy_head;
    // keep going while there are still nodes to be merged
    while (l1 || l2) {
        // get values of l1 and l2 (Infinity if null)
        const v1 = l1 ? l1.val : Infinity;
        const v2 = l2 ? l2.val : Infinity;
        // compare
        if (v1 < v2) {
            // add l1 to next
            dummy.next = new ListNode(v1);
            l1 = l1.next;
        } else {
            // add l2 to next
            dummy.next = new ListNode(v2);
            l2 = l2.next;
        }
        // move dummy forward
        dummy = dummy.next;
    }
    // return next in dummy node
    return dummy_head.next;
}
