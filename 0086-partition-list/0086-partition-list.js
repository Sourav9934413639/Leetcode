/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if(head===null) return null;
    let p1=new ListNode();
    let p2=new ListNode();
    let l=p1;
    let r=p2;
    let temp=head;
    while(temp){
        let newNode;
        if(temp.val<x){
            newNode=new ListNode(temp.val);
            l.next=newNode;
            l=newNode;
        }
         if(temp.val>=x){
            newNode=new ListNode(temp.val);
            r.next=newNode;
            r=newNode;
        }
        temp=temp.next;
    }
    
    if(p1.next && p2.next) {
        l.next=p2.next;
        return p1.next;
    }
    else if(p1.next){
        return p1.next;
    }
    else if(p2.next){
        return p2.next;
    }
    else{
        return null;
    }
};