class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const compliment = new Map();
        for(let i=0;i<nums.length;i++){
           const diff= target -nums[i];
            if(compliment.has(diff))
            {
                return [i,compliment.get(diff)]
            }
              compliment.set(nums[i],i)
        }
    }
}
