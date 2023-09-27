/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeTwo=(list1,list2)=>{
    let dummy=new ListNode();
    let temp=dummy;
    while(list1 && list2){
       
        let newNode;
        if(list1.val<=list2.val){
            newNode=new ListNode(list1.val);
            temp.next=newNode;
            temp=newNode;
            list1=list1.next;
        }
        else{
           newNode=new ListNode(list2.val);
            temp.next=newNode;
            temp=newNode; 
            list2=list2.next;
        }
    }
     if(list1===null){
            temp.next=list2;
        }
        else if(list2===null){
            temp.next=list1;
        }
    return dummy.next;
 }
var mergeKLists = function(lists) {
    if(lists.length===0){
        return null;
    }
    let ans=lists[0];
    for(let i=1;i<lists.length;i++){
        ans=mergeTwo(ans,lists[i]);
        temp=ans;
    }    
    return ans;
};