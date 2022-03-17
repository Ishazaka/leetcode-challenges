
// check whether string  is palindrome 
  // palendrome means it is same when reverse means (lol)  





// remove element from array
// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]


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


// compare the triplets

 var ap = [3, 5, 2];
 var bp = [2, 5, 4];

function compareTriplets(a, b) {
    // Write your code here
   let apoints = 0;
   let bpoints = 0;

   for( let i = 0; i < 3; i++){
     if(a[i] > b[i]){
       apoints ++
     }
      if(b[i] > a[i]){
       bpoints ++
     }
  return [apoints , bpoints];
}
}
console.log(compareTriplets([1, 2, 3], [2, 2, 1]));

// convert array of strings into array of numbers


function toNumberArray(arr) {
 let x = arr.map( i => Number(i) )
  return x
}
console.log(toNumberArray(["9.4", "4.2"])) 
  // result➞ [9.4, 4.2]


// Create a function that takes two arrays and insert the second array in the middle of the first array.
// example => tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]
// example => tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]

// first method
function tuckIn(arr1, arr2) {
	 arr2.push(arr1[1]);
	arr2.unshift(arr1[0]);
	return arr2;
}
// second method
function tuckIn(arr1, arr2) {
	return [arr1[0], ...arr2 , arr1[1]]
}


// Fizz Buzz
////////////////////////////////

for(let i = 0; i <= 100; i++){
 if(i % 3 == 0 && i % 5 == 0){
   console.log("FizzBuzz");
