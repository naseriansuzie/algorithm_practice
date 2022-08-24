/**
 * Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
 * A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
 */

class TreeNode {
  val?: number;
  left?: TreeNode | null;
  right?: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val || 0;
    this.left = left || null;
    this.right = right || null;
  }
}

function sortedArrayToBST(numbers: number[]) {
  if (numbers.length < 1) {
    return null;
  }

  const mid = Math.floor(numbers.length / 2);
  const treeNode = new TreeNode(numbers[mid]);

  treeNode.left = sortedArrayToBST(numbers.slice(0, mid));
  treeNode.right = sortedArrayToBST(numbers.slice(mid + 1));
  return treeNode;
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9])); // [0,-3,9,-10,null,5]
console.log(sortedArrayToBST([1, 3])); // [3,1]
