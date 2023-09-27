/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var rev=(list)=>{
     let curr=list;
     let prev=null;
     while(curr){
         let post=curr.next;
         curr.next=prev;
         prev=curr;
         curr=post;
     }
     return prev;
 }
var isPalindrome = function(head) {
    if(head===null) return true;
    let s=head;
    let f=head;
    let temp1=head;
    while(f && f.next){
        s=s.next;
        f=f.next.next;
    }
    let temp2=rev(s);
    while(temp1 && temp2){
        if(temp1.val!==temp2.val) return false;
        temp1=temp1.next;
        temp2=temp2.next;
    }
    return true;
};