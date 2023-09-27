/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let i=0;
    let t=head;
    while(t){
        if(i===2) break;
        t=t.next;
        i++;
    }
    if(t===head) return head;
    let s=head;
    let f=head;
//    if(f.next){
//        if(f.next.next){
//            if(f.next.next===s) return head;
//        }
//    }
//    else{
//        return null;
//    }
    
    let start1=head;
    let start2=null;
    while(f && f.next){
        
        s=s.next;
        f=f.next.next;
        
        if(s===f){
            start2=s;
            break;
        }
    }
    if(!start2) return null;
    while(start1 && start2){
        start1=start1.next;
        start2=start2.next;
        if(start1===start2){
            return start1;
        }
    }
    return null;
};