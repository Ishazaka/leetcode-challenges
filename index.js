
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
console.log(removeElement([0,1,2,2,3,0,4,2],  2) )
// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]



// remove element from array
var removeElement = function(nums, val) {
    let j = 0;
 for (let i =0 ; i<nums.length;i++){
        if(nums[i]!== val){
          nums[j]= nums[i]
