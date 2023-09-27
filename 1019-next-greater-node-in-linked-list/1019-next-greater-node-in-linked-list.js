/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
    let st=[];
    let arr=[];
    let temp=head;
    while(temp){
        arr.push(temp.val);
        temp=temp.next;
    }
    let res=[0];
    st.push(arr[arr.length-1]);
    for(let i=arr.length-2;i>=0;i--){
        while(st.length!==0 && arr[i]>=st[st.length-1]){
            st.pop();
        }
        if(st.length===0){
            res.unshift(0);
        }
        else{
            res.unshift(st[st.length-1]);
        }
        st.push(arr[i]);
    }
    return res;
};