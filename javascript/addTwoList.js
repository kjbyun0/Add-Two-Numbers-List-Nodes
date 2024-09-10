class Node {
    constructor(val = null, next = null) {
      this.val = val;
      this.next = next;
    }
}

function addTwoList(l1, l2) {
// type your code here
  let carry = 0;
  let curNode1 = l1, curNode2 = l2;
  let resHead = null, curResNode = null;
  while(curNode1 || curNode2 || carry) {
    let val1 = 0, val2 = 0;
    if (curNode1) {
      val1 = curNode1.val;
      curNode1 = curNode1.next;
    }
    if (curNode2) {
      val2 = curNode2.val;
      curNode2 = curNode2.next;
    }
    let sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    sum = sum % 10;
    if (!curResNode) {
      curResNode = new Node(sum);
      resHead = curResNode;
    } else {
      curResNode.next = new Node(sum);
      curResNode = curResNode.next;
    }
  }

  return resHead;
}

function addTwoListRecur(l1, l2, carry=0) {
  let resNode = null;
  let val1 = l1 ? l1.val : 0;
  let val2 = l2 ? l2.val : 0;
  let nextL1 = l1 ? l1.next : null;
  let nextL2 = l2 ? l2.next : null;

  if (l1 || l2 || carry) {
    let sum = val1 + val2 + carry;
    resNode = new Node(sum % 10);
    resNode.next = addTwoListRecur(nextL1, nextL2, Math.floor(sum / 10));
  }
  return resNode;
}


function printSLL(head) {
  let curNode = head;
  let resStr = "";
  while (curNode) {
    resStr += curNode.val + '-';
    curNode = curNode.next;
  }
  console.log(resStr.slice(0, -1));
}

if (require.main === module) {
// add your own tests in here
console.log("Expecting: { val: 0, next: null }");
console.log("=>", addTwoList({ val: 0, next: null }, { val: 0, next: null }));

console.log("Expecting: ")
let l1 = new Node(6);
let l2 = new Node(7);
console.log("Expecting: 3-1")
console.log("=>", printSLL(addTwoList(l1, l2)));

console.log("Expecting: ")
l1 = new Node(6);
l2 = new Node(7, new Node(9, new Node(9)));
console.log("Expecting: 3-0-0-1")
console.log("=>", printSLL(addTwoList(l1, l2)));
}

module.exports = {
    Node,
    addTwoList
};

// Please add your pseudocode to this file
// And a written explanation of your solution