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
    let list=new ListNode();
    let temp=list;
    let p1=head;
    let p2=head;
    while(p1){
        let count=0;
        while(p2 && p2.val===p1.val){
            p2=p2.next;
            count++;
        }
        if(count===1){
            let newNode=new ListNode(p1.val);
            temp.next=newNode;
            temp=newNode;
        }
        p1=p2;
    }
    return list.next;
};