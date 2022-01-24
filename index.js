
// check whether string  is palindrome 
  // palendrome means it is same when reverse means (lol)  



// remove element from array
var removeElement = function(nums, val) {
    let j = 0;
   for (let i =0 ; i<nums.length;i++){
        if(nums[i]!== val){
            nums[j]= nums[i]
          j++  
        }
 }
    return  j
    
};
