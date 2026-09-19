class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length == t.length){
            const mapS = new Map();
          for (const char of s){
            mapS.set(char , (mapS.get(char)||0)+1)
          }

          for (const char of t){
            if(mapS.get(char)){
               mapS.set(char , (mapS.get(char)||0)-1)
                if (mapS.get(char) < 0) {
                  return false;
                }
            }
            else{
             return false
            }
           
          }
           return true
        }
       
        else
        {
            return false
        }
    }
}
