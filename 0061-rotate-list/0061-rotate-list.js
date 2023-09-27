/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(head===null) return head;
    let count=0;
    let temp=head;
    while(temp){
        count++;
        temp=temp.next;
    }
    k=k%count;
    if(k<0){
        k=k+count;
    }
    if(k===0) return head;
    let x=count-k;
    temp=head;
    let i=1;
    while(i<x && temp.next){
        temp=temp.next;
        i++;
    }
    
    let newHead;
    
        newHead=temp.next;
        temp.next=null;
    
    let t=newHead;
    while(t.next){
        t=t.next;
    }
    t.next=head;
    return newHead;
};