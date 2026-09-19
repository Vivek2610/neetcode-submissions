class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let compliment = new Map();
        let diff;
        for(let i=0;i<nums.length;i++){
            diff= target -nums[i];
            if(compliment.has(diff))
            {
                return [i,compliment.get(diff)]
            }
            else
            {
              compliment.set(nums[i],i)
            }
        }
    }
}
