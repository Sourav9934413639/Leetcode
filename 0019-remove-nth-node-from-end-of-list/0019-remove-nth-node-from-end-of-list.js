/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let count=0;
    let temp=head;
    while(temp){
        count++;
        temp=temp.next;
    }
    let reqNode=count-n+1;
    if(reqNode===1) return head.next;
    let t=head;
    let i=0;

    while(i<reqNode-2 && t.next){
        t=t.next;
        i++;
    }
    if(t.next){
        if(t.next.next){
          t.next=t.next.next;
        }
        else{
          t.next=null;
        }
    }
    return head;
};