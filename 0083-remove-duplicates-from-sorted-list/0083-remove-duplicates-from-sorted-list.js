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
var deleteDuplicates = function(head) {
    if(head===null) return null;
    let newList=new ListNode();
    let temp=newList;
    let h=head;
    let t=head;
    while(h){
        
        let newNode=new ListNode(h.val);
        temp.next=newNode;
        temp=newNode;

        
        while(t && t.val===h.val){
           t=t.next;
        }
    
       h=t;
    }
    return newList.next;
};