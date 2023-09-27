/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let dummy=new ListNode(0,head);
    let prev=dummy;
    let curr=head;
    while(curr){
        if(curr.val===val){
            if(curr.next===null) prev.next=null;
            let x=false;
            while(curr.val===val && curr.next){
                curr=curr.next;
                x=true;
            }
            if(x && curr.next===null && curr.val===val) {
                prev.next=null
            }
            else if(x && curr.next===null && curr.val!==val){
                prev.next=curr;
            }
            else if(x && curr.next!==null){
                prev.next=curr;
            }

            
        }
        
        prev=curr;
        curr=curr.next;
        
    }
    return dummy.next;
};