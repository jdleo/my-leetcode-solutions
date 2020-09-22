function middleNode(head: ListNode | null): ListNode | null {
    // slow and fast node
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    // go until fast node hits the end
    while (fast && fast.next) {
        // move slow up 1
        slow = slow!.next;
        // move fast up by 2
        fast = fast!.next!.next;
    }

    // result is what's at slow node, since it moved 1/2 as fast
    return slow;
}
