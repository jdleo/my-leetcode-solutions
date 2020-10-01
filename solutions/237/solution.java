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
        // move forward to next ref
        node.val = node.next.val;
        node.next = node.next.next;
    }
}