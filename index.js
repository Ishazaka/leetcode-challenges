
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
   }else if(i % 3 == 0){
   console.log("fizz");
 }else if(i % 5 == 0){
   console.log("buzz");
 }else{
   console.log(i);
 }

}

	 

////////////////////////////////
// Wild Wild Life
////////////////////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2] = 5001;
console.log(plantee);

// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".

wolfy[3] = "Gotham City";
console.log(wolfy);

//  Give D'Art a second hometown by adding "Hawkins"

dart.push("Hawkins");
console.log(dart);

// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".

 const deletenum = wolfy.splice(0,1);
 const add = wolfy.unshift("gameboy");
console.log(wolfy);


// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.


var kittentalking = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];

function getrandom(arr){

for (let i = 0; i <=20; i++){
  if(i % 2 == 0){
    let randomarr = Math.floor(Math.random()*arr.length);
    return arr[randomarr]
  }
}

}
console.log(getrandom(kittentalking)) ;

