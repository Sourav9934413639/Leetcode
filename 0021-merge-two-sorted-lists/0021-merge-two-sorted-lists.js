/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummy=new ListNode();
    let result=dummy;
    while(list1 || list2){
        let newNode;
        if(list1===null){
            result.next=list2;
            break;
        }
        else if(list2===null){
            result.next=list1;
            break;
        }
        if(list1.val===list2.val){
            newNode=new ListNode(list1.val)
            result.next=newNode;
            result=newNode;
            newNode=new ListNode(list2.val);
            result.next=newNode;
            result=newNode;
            list1=list1.next;
            list2=list2.next;
        }
        else if(list1.val<list2.val){
             newNode=new ListNode(list1.val)
            result.next=newNode;
            result=newNode;
            list1=list1.next;

        }else{
             newNode=new ListNode(list2.val)
            result.next=newNode;
            result=newNode;
            list2=list2.next;
        }
    }
    return dummy.next;
};