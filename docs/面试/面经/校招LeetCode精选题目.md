不管是春招还是秋招，校招生是避免不了刷题操作的，今天我总结了一下自己秋招过程对leetcode题目进行分类并针对性练习的过程。  

一些基本的数据结构练习，建议结合大话数据结构这本书食用。里面有一部分语言特性，注意总结与分析，有助于加深数据结构基础的理解。  
**基本数据结构总结**  
推荐题目：

*   [LeetCode 1. Two Sum](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Ftwo-sum%2F "https://leetcode-cn.com/problems/two-sum/")
*   [LeetCode 187. Repeated DNA Sequences](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Frepeated-dna-sequences%2F "https://leetcode-cn.com/problems/repeated-dna-sequences/")
*   [LeetCode 706. Design HashMap](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fdesign-hashmap%2F "https://leetcode-cn.com/problems/design-hashmap/")
*   [LeetCode 652. Find Duplicate Subtrees](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Ffind-duplicate-subtrees%2F "https://leetcode-cn.com/problems/find-duplicate-subtrees/")
*   [LeetCode 560. Subarray Sum Equals K](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fsubarray-sum-equals-k%2F "https://leetcode-cn.com/problems/subarray-sum-equals-k/")
*   [LeetCode 547. Friend Circles](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Ffriend-circles%2F "https://leetcode-cn.com/problems/friend-circles/")
*   [LeetCode 684. Redundant Connection](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fredundant-connection%2F "https://leetcode-cn.com/problems/redundant-connection/")
*   [LeetCode 692. Top K Frequent Words](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Ftop-k-frequent-words%2F "https://leetcode-cn.com/problems/top-k-frequent-words/")
*   [LeetCode 295. Find Median from Data Stream](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Ffind-median-from-data-stream%2F "https://leetcode-cn.com/problems/find-median-from-data-stream/")
*   [LeetCode 352. Data Stream as Disjoint Intervals](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fdata-stream-as-disjoint-intervals%2F "https://leetcode-cn.com/problems/data-stream-as-disjoint-intervals/")


二分查找一般是在单调有序的数组上操作，而实际的变体却是很灵活的。例如lc287题就是一种经典的应用，关于二分内容，推荐下面几道题目，扣好边界是关键。  
**二分专题**

*   [Leetcode 69. sqrt x](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fsqrtx%2F "https://leetcode-cn.com/problems/sqrtx/")
*   [Leetcode 35. Search insert position](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fsearch-insert-position%2F "https://leetcode-cn.com/problems/search-insert-position/")
*   [LeetCode 34. Find First and Last Position of Element in Sorted Array](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Ffind-first-and-last-position-of-element-in-sorted-array%2F "https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/")
*   [LeetCode 74. Search a 2D Matrix](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fsearch-a-2d-matrix%2F "https://leetcode-cn.com/problems/search-a-2d-matrix/")
*   [LeetCode 153. Find Minimum in Rotated Sorted Array](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Ffind-minimum-in-rotated-sorted-array%2F "https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/")
*   [LeetCode 33. Search in Rotated Sorted Array](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fsearch-in-rotated-sorted-array%2F "https://leetcode-cn.com/problems/search-in-rotated-sorted-array/")
*   [LeetCode 278. First Bad Version](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Ffirst-bad-version%2F "https://leetcode-cn.com/problems/first-bad-version/")
*   [LeetCode 162. Find Peak Element](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Ffind-peak-element%2F "https://leetcode-cn.com/problems/find-peak-element/")
*   [LeetCode 287. Find the Duplicate Number](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Ffind-the-duplicate-number%2F "https://leetcode-cn.com/problems/find-the-duplicate-number/")
*   [LeetCode 275. H-Index II](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fh-index-ii%2F "https://leetcode-cn.com/problems/h-index-ii/")


关于链表，考点居多，但是常考的题目固定，校招过程中，遇到的更多的是逆置等问题，这里总结了几道题目，个人建议将链表排序这部分着重复习，例如链表快排，链表插排，链表归并排，都考过，尤其是字节的面试官，非常喜欢考链表的题目，这部分题目，扣好细节即可。  
**链表专题**  
推荐题目:

*   [LeetCode 19. Remove Nth Node From End of List](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fremove-nth-node-from-end-of-list%2F "https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/")
*   [LeetCode 237. Delete Node in a Linked List](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fdelete-node-in-a-linked-list%2F "https://leetcode-cn.com/problems/delete-node-in-a-linked-list/")
*   [LeetCode 83. Remove Duplicates from Sorted List](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fremove-duplicates-from-sorted-list%2F "https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/")
*   [LeetCode 61. Rotate List](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Frotate-list%2F "https://leetcode-cn.com/problems/rotate-list/")
*   [LeetCode 24. Swap Nodes in Pairs](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fswap-nodes-in-pairs%2F "https://leetcode-cn.com/problems/swap-nodes-in-pairs/")
*   [LeetCode 206. Reverse Linked List](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Freverse-linked-list%2F "https://leetcode-cn.com/problems/reverse-linked-list/")
*   [LeetCode 92. Reverse Linked List II](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Freverse-linked-list-ii%2F "https://leetcode-cn.com/problems/reverse-linked-list-ii/")
*   [LeetCode 160. Intersection of Two Linked Lists](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fintersection-of-two-linked-lists%2F "https://leetcode-cn.com/problems/intersection-of-two-linked-lists/")
*   [LeetCode 142. Linked List Cycle II](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Flinked-list-cycle-ii%2F "https://leetcode-cn.com/problems/linked-list-cycle-ii/")
*   [LeetCode 148. Sort List](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fsort-list%2F "https://leetcode-cn.com/problems/sort-list/")

树与二叉树同样是字节面试官喜欢考的内容，因为这一部分内容能够很好的验证面试者对递归操作得理解与掌握。内容以二叉树居多，二叉树的几种遍历方法需要烂熟于心（非递归版本）  
**树专题**  
推荐题目:

*   [LeetCode 98. Validate Binary Search Tree](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fvalidate-binary-search-tree%2F "https://leetcode-cn.com/problems/validate-binary-search-tree/")
*   [LeetCode 101. Symmetric Tree](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fsymmetric-tree%2F "https://leetcode-cn.com/problems/symmetric-tree/")
*   [LeetCode 94. Binary Tree Inorder Traversal](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fbinary-tree-inorder-traversal%2F "https://leetcode-cn.com/problems/binary-tree-inorder-traversal/")
*   [LeetCode 105. Construct Binary Tree from Preorder and Inorder Traversal](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fconstruct-binary-tree-from-preorder-and-inorder-traversal%2F "https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/")
*   [LeetCode 102. Binary Tree Level Order Traversal](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fbinary-tree-level-order-traversal%2F "https://leetcode-cn.com/problems/binary-tree-level-order-traversal/")
*   [LeetCode 236. Lowest Common Ancestor of a Binary Tree](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Flowest-common-ancestor-of-a-binary-tree%2F "https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/")
*   [LeetCode 297. Serialize and Deserialize Binary Tree](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fserialize-and-deserialize-binary-tree%2F "https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/")
*   [LeetCode 543. Diameter of Binary Tree](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fdiameter-of-binary-tree%2F "https://leetcode-cn.com/problems/diameter-of-binary-tree/")
*   [LeetCode 124. Binary Tree Maximum Path Sum](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fbinary-tree-maximum-path-sum%2F "https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/")
*   [LeetCode 173. Binary Search Tree Iterator](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fbinary-search-tree-iterator%2F "https://leetcode-cn.com/problems/binary-search-tree-iterator/")

字符串处理是常见题目，这部分不多说，主要空格和逗号，属于一些常规题目，简单推荐几道，可以包含几种常见的类型了  
**字符串处理**  
推荐题目:

*   [LeetCode 38. Count and Say](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fcount-and-say%2F "https://leetcode-cn.com/problems/count-and-say/")
*   [LeetCode 49. Group Anagrams](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fgroup-anagrams%2F "https://leetcode-cn.com/problems/group-anagrams/")
*   [LeetCode 151. Reverse Words in a String](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Freverse-words-in-a-string%2F "https://leetcode-cn.com/problems/reverse-words-in-a-string/")
*   [LeetCode 165. Compare Version Numbers](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fcompare-version-numbers%2F "https://leetcode-cn.com/problems/compare-version-numbers/")
*   [LeetCode 929. Unique Email Addresses](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Funique-email-addresses%2F "https://leetcode-cn.com/problems/unique-email-addresses/")
*   [LeetCode 5. Longest Palindromic Substring](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Flongest-palindromic-substring%2F "https://leetcode-cn.com/problems/longest-palindromic-substring/")
*   [LeetCode 6. ZigZag Conversion](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fzigzag-conversion%2F "https://leetcode-cn.com/problems/zigzag-conversion/")
*   [LeetCode 3. Longest Substring Without Repeating Characters](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Flongest-substring-without-repeating-characters%2F "https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/")
*   [LeetCode 208. Implement Trie (Prefix Tree)](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fimplement-trie-prefix-tree%2F "https://leetcode-cn.com/problems/implement-trie-prefix-tree/")
*   [LeetCode 273. Integer to English Words](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Finteger-to-english-words%2F "https://leetcode-cn.com/problems/integer-to-english-words/")

从这开始，进入虐心模式，这部分题目我刷了整整两天，刷的清爽的不得了。主要是深度优先搜索与回溯，这部分时间复杂度较大，经常难以找到合适的思路。  
**回溯法与深度优先搜索**  
推荐题目：

*   [LeetCode 17. Letter Combinations of a Phone Number](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fletter-combinations-of-a-phone-number%2F "https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/")
*   [LeetCode 79. Word Search](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fword-search%2F "https://leetcode-cn.com/problems/word-search/")
*   [LeetCode 46. Permutations](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fpermutations%2F "https://leetcode-cn.com/problems/permutations/")
*   [LeetCode 47. Permutations II](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fpermutations-ii%2F "https://leetcode-cn.com/problems/permutations-ii/")
*   [LeetCode 78. Subsets](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fsubsets%2F "https://leetcode-cn.com/problems/subsets/")
*   [LeetCode 90. Subsets II](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fsubsets-ii%2F "https://leetcode-cn.com/problems/subsets-ii/")
*   [LeetCode 216. Combination Sum III](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fcombination-sum-iii%2F "https://leetcode-cn.com/problems/combination-sum-iii/")
*   [LeetCode 52. N-Queens II](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fn-queens-ii%2F "https://leetcode-cn.com/problems/n-queens-ii/")
*   [LeetCode 37. Sudoku Solver](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fsudoku-solver%2F "https://leetcode-cn.com/problems/sudoku-solver/")
*   [LeetCode 473. Matchsticks to Square](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fmatchsticks-to-square%2F "https://leetcode-cn.com/problems/matchsticks-to-square/")

这部分题目涉及到一些较为复杂的数据结构，  
**滑动窗口、双指针与单调队列/栈**  
推荐题目：

*   [LeetCode 167. Two Sum II - Input array is sorted](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Ftwo-sum-ii-input-array-is-sorted%2F "https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/")
*   [LeetCode 88. Merge Sorted Array](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fmerge-sorted-array%2F "https://leetcode-cn.com/problems/merge-sorted-array/")
*   [LeetCode 26. Remove Duplicates from Sorted Array](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fremove-duplicates-from-sorted-array%2F "https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/")
*   [LeetCode 76. Minimum Window Substring](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fminimum-window-substring%2F "https://leetcode-cn.com/problems/minimum-window-substring/")
*   [LeetCode 32. Longest Valid Parentheses](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Flongest-valid-parentheses%2F "https://leetcode-cn.com/problems/longest-valid-parentheses/")
*   [LeetCode 155. Min Stack](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fmin-stack%2F "https://leetcode-cn.com/problems/min-stack/")
*   [LeetCode 42. Trapping Rain Water](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Ftrapping-rain-water%2F "https://leetcode-cn.com/problems/trapping-rain-water/")
*   [LeetCode 84. Largest Rectangle in Histogram](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Flargest-rectangle-in-histogram%2F "https://leetcode-cn.com/problems/largest-rectangle-in-histogram/")
*   [LeetCode 239. Sliding Window Maximum](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fsliding-window-maximum%2F "https://leetcode-cn.com/problems/sliding-window-maximum/")
*   [LeetCode 918. Maximum Sum Circular Subarray](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fmaximum-sum-circular-subarray%2F "https://leetcode-cn.com/problems/maximum-sum-circular-subarray/")


对于我来说，最难的部分，但是学会之后就会很舒服。DP日渐成为各大公司面试的必考点。通过DP可以有效的减少时间复杂度与重复计算。  
**动态规划**  
推荐题目：

*   [LeetCode 53. Maximum Subarray](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fmaximum-subarray%2F "https://leetcode-cn.com/problems/maximum-subarray/")
*   [LeetCode 120. Triangle](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Ftriangle%2F "https://leetcode-cn.com/problems/triangle/")
*   [LeetCode 63. Unique Paths II](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Funique-paths-ii%2F "https://leetcode-cn.com/problems/unique-paths-ii/")
*   [LeetCode 91. Decode Ways](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fdecode-ways%2F "https://leetcode-cn.com/problems/decode-ways/")
*   [LeetCode 198. House Robber](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fhouse-robber%2F "https://leetcode-cn.com/problems/house-robber/") 
*   [LeetCode 300. Longest Increasing Subsequence](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Flongest-increasing-subsequence%2F "https://leetcode-cn.com/problems/longest-increasing-subsequence/")
*   [LeetCode 72. Edit Distance](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fedit-distance%2F "https://leetcode-cn.com/problems/edit-distance/")
*   [LeetCode 518. Coin Change 2](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fcoin-change-2%2F "https://leetcode-cn.com/problems/coin-change-2/")
*   [LeetCode 664. Strange Printer](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fstrange-printer%2F "https://leetcode-cn.com/problems/strange-printer/")
*   [LeetCode 10. Regular Expression Matching](https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Fregular-expression-matching%2F "https://leetcode-cn.com/problems/regular-expression-matching/")

以上，是我刷的部分leetcode题目，偶尔还会打打周赛。另外，剑指offer是必刷的。个人比较推荐牛客网的剑指offer题目。最后，祝各位同学面试顺利，拿到满意的offer  

#### **二分查找**

- [**二分查找**](https://www.nowcoder.com/practice/7bc4a1c7c371425d9faa9d1b511fe193?tpId=190&&tqId=35227&rp=1&ru=/ta/job-code-high-rd&qru=/ta/job-code-high-rd/question-ranking)[牛客]：LC上找不到一模一样的。

- [**求平方根**](https://leetcode-cn.com/problems/sqrtx/)

#### **滑动窗口**

- [**滑动窗口的最大值**](https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/)

- [**滑动窗口的中位数\***](https://leetcode-cn.com/problems/sliding-window-median/)

- [**最长不含重复字符的子字符串**](https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/)

#### **数组**

- [**合并两个有序数组**](https://leetcode-cn.com/problems/merge-sorted-array/)

- [**数组中出现超过一半的数\***](https://leetcode-cn.com/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/)

- [**岛屿的最大面积**](https://leetcode-cn.com/problems/max-area-of-island/)

- [**接雨水**](https://leetcode-cn.com/problems/trapping-rain-water/)

- [**螺旋矩阵**](https://leetcode-cn.com/problems/spiral-matrix/)

- [**逆序对\***](https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/)

#### **链表**

- [**反转链表**](https://leetcode-cn.com/problems/reverse-linked-list/)

- [**k个一组反转链表**](https://leetcode-cn.com/problems/reverse-nodes-in-k-group/)

- [**删除排序链表中的重复元素**](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/)

- [**环形链表**](https://leetcode-cn.com/problems/linked-list-cycle/)

- [**两个链表的第一个公共节点**](https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/)

- [**合并有序链表**](https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/)

- [**链表求和**](https://leetcode-cn.com/problems/sum-lists-lcci/)

- [**回文链表**](https://leetcode-cn.com/problems/palindrome-linked-list/)

- [**复制带随机指针的链表**](https://leetcode-cn.com/problems/copy-list-with-random-pointer/)

#### **二叉树**

- [**二叉树的深度**](https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof/)

- [**之字形打印二叉树**](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/)

- [**二叉搜索树的第 k 大节点**](https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/)

- [**二叉树的最近公共祖先**](https://leetcode-cn.com/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof/)

- [**二叉树中和为某一值的路径\***](https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/)

- [**二叉树的最大路径和**](https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/)

- [**二叉树的右视图\***](https://leetcode-cn.com/problems/binary-tree-right-side-view/)

#### **TopK**

- [**最小的k个数**](https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/)

- [**数组中的第K个最大元素**](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/)

#### **设计题**

- [**最小栈**](https://leetcode-cn.com/problems/min-stack/)

- [**两个栈实现队列**](https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/)

- [**LRU缓存机制**](https://leetcode-cn.com/problems/lru-cache/)

#### **动态规划**

- [**青蛙跳台阶**](https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/)

- [**最长上升子序列**](https://leetcode-cn.com/problems/longest-increasing-subsequence/)

- [**最长公共子序列**](https://leetcode-cn.com/problems/longest-common-subsequence/)

- [**编辑距离\***](https://leetcode-cn.com/problems/edit-distance/)

- [**零钱兑换2\***](https://leetcode-cn.com/problems/coin-change-2/)

#### **其他**

- [**翻转单词顺序**](https://leetcode-cn.com/problems/fan-zhuan-dan-ci-shun-xu-lcof/)

- [**二进制中1的个数\***](https://leetcode-cn.com/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/)

- [**颠倒二进制位\***](https://leetcode-cn.com/problems/reverse-bits/)

- [**数据流中的中位数\***](https://leetcode-cn.com/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof/)

- [**复原IP地址**](https://leetcode-cn.com/problems/restore-ip-addresses/)

#### **系列题**

#### **X数之和系列：**

- [**两数之和**](https://leetcode-cn.com/problems/two-sum/)

- [**三数之和**](https://leetcode-cn.com/problems/3sum/)

- [**最接近的三数之和\***](https://leetcode-cn.com/problems/3sum-closest/)

#### **股票系列：**

> 这系列还有4，有余力的同学可以做做

- [**买卖股票的最佳时机1**](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/)

- [**买卖股票的最佳时机2**](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/)

- [**买卖股票的最佳时机3**](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/)

#### **括号系列：**

> 注意解法上的优化，这系列要搞定最优解

- [**有效括号**](https://leetcode-cn.com/problems/valid-parentheses/)

- [**最长有效括号**](https://leetcode-cn.com/problems/longest-valid-parentheses/)

### **各公司常考题补充**

> 下方列表，展示的是除了上面提到的题目以外，各自还常考的题目。

#### **字节（待验证）**

- [**单词搜索**](https://leetcode-cn.com/problems/word-search/)

- [**重排链表**](https://leetcode-cn.com/problems/reorder-list/)

- [**验证栈序列**](https://leetcode-cn.com/problems/validate-stack-sequences/)

- [**字典序排数**](https://leetcode-cn.com/problems/lexicographical-numbers/)

- [**寻找两个正序数组的中位数**](https://leetcode-cn.com/problems/median-of-two-sorted-arrays/)

- [**剪绳子I**](https://leetcode-cn.com/problems/jian-sheng-zi-lcof/)

- [**剪绳子II**](https://leetcode-cn.com/problems/jian-sheng-zi-ii-lcof/)

- [**最长回文子串**](https://leetcode-cn.com/problems/longest-palindromic-substring/)

- [**下一个数**](https://leetcode-cn.com/problems/closed-number-lcci/)