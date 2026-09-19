class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
       const map = new Map();

        for(let num of nums){

            if(!map.get(num)){
                map.set(num,0)
            }

            map.set(num,map.get(num)+1)
        }
     const array = [...map.entries()];
     
     array.sort((a,b)=>b[1]-a[1])
   
     return array.slice(0,k).map(item => item[0])
    }
}
