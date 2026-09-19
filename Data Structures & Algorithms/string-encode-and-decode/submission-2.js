class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
            let string="";
    for(let str of strs){
      string =  string + str.length+'#'+str
    }
    return string
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i=0;
    let array=[];
  
    while(i<str.length){
      let j= str.indexOf('#',i);
      let leng = Number(str.slice(i,j));
 
      let arrayItem=str.slice(j+1,leng+j+1);
      array.push(arrayItem)
  
      i=leng+j+1;
    }
    return array
    }
}
