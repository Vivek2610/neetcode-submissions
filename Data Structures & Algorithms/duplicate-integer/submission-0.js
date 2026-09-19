class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let unique = new Set();
        for (let i=0; i <nums.length;i++){
           unique.add(nums[i])
        }
        if(unique.size == nums.length ){
          return false;
        }
        else{
          return true
        }
    }
}
