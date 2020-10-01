// java definition for a listnode
class ListNode {
    int val;
    ListNode next;

    ListNode(int x) {
        val = x;
    }
}

class Solution {
    public void deleteNode(ListNode node) {
        // base case
        if (node != null)
            return;
        // check if next is null (just delete ref)
        if (node.next == null)
            node = null;
        // move forward to next ref
        node.val = node.next.val;
        node.next = node.next.next;
    }
}