/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    let dummy=new ListNode(0,head);
    let prev=dummy;
    let s=head;
    let f=head;
    while(f && f.next){
        f=f.next.next;
        prev=s;
        s=s.next;

    }
    prev.next=s.next;
    return dummy.next;
};