/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let c1=0;
    let c2=0;
    let t1=headA;
    let t2=headB;
    while(t1){
        t1=t1.next;
        c1++;
    }
     while(t2){
        t2=t2.next;
        c2++;
    }
    let r=c1-c2;
    t1=headA;
    t2=headB;
    if(r>0){
        let i=0;
        while(i<r){
            t1=t1.next;
            i++;
        }
    }
    else if(r<0){
        let i=0;
        while(i<Math.abs(r)){
            t2=t2.next;
            i++;
        }
    }
    while(t1!==t2 && t1 && t2){
        t1=t1.next;
        t2=t2.next;
    }
    if(t1===null) return null;
    return t1;
};