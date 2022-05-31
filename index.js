
1--  // check whether string  is palindrome 
   // palendrome means it is same when reverse means (lol)  




2--  // // sum the elements of the array except itself
  // // arrEleSum([1, 2, 3, 2, 1]) ➞ [8, 7, 6, 7, 8]

function arrEleSum(args) {
  let fullarr = []
 let len = args.length;

  
  for(let i =0; i< len; i++){
     let sum = 0;
   for(let j = 0; j< len; j++){  
      if(i!=j)	
        sum += args[j]; 
    }	
   fullarr.push(sum);
  }	
return fullarr;
}
	

console.log(arrEleSum([1, 2, 3, 2, 1]))
	

3-- // //find how many times element is present in ... 
  // charCount("a", "edabit") ➞ 1
	
function charCount(myChar, str) {
    let newarr = str.split('');
  // return newarr;
  return newarr.filter( x => 	x == myChar).length

}	

console.log(charCount("a", "edabit") );
console.log(charCount("a", "Chambaer of a seacrets") );
console.log(charCount("a", "edabait") );
	
	

	


4--  // remove element from array
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



5--  // compare the triplets

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



6--  // convert array of strings into array of numbers


function toNumberArray(arr) {
 let x = arr.map( i => Number(i) )
  return x
}
console.log(toNumberArray(["9.4", "4.2"])) 
  // result➞ [9.4, 4.2]



7-- // Create a function that takes two arrays and insert the second array in the middle of the first array.
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


8--  // Fizz Buzz
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

	 

9--  // Wild Wild Life
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


10--  // For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.


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


 
11-- // // digits = [1,2,3]
// //result = [1,2,4]

var plusOne = function(digits) {
    
   let x = digits.join('');
    let y = Number(x)+ 1 ;

      let z = y.toString().split('')
    return z;

};

console.log( plusOne([1,2,3]));

11-a)  // in leetcode we dont have to use build-in functions  

var plusOne = function(digits) {

for(let i=digits.length-1; i>0; i--) {

  if(digits[i] < 9 ){
    digits[i] =  digits[i] +1;	
  return digits	
  }else{
  digits[i] = 0;	
  }		
   // // second method	
   // if(++digits[i] == 10) {
     //     digits[i] = 0;	
    //     if (!i) digits.unshift(1)	
         // } else break; 	
	    }
	    return digits
	};
  console.log( plusOne([1,2,3]));	
	
	

12--  // which two elements make the target  
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

var twoSum = function(nums, target) {

	  for(let i = 0; i < nums.length; i++ ){
     for (let j = i+1; j < nums.length; j++ ){
         if(nums[i]+ nums[j] == target){
      return [i ,j];
         }
     }
      
    }
};
console.log( twoSum([2,7,11,15], 9))


13--  
// Create a function that will take a HEX number and returns the binary equivalent (as a string).
// toBinary(0xFF) ➞ "11111111"
// toBinary(0xAA) ➞ "10101010"
// toBinary(0xFA) ➞ "11111010"
// The number will be always an 8-bit number.
function toBinary(num) {
	return num.toString(2)
}
console.log(toBinary(0xFF));


14--  // // Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.
 // numberSplit(10) ➞ [5, 5]
 // numberSplit(11) ➞ [5, 6]
// numberSplit(-9) ➞ [-5, -4]

 // my answer
function numberSplit(n) {
	let nn = n/2;
	let arr= [];
	let ans1 = Math.floor(nn);
	let ans2 = Math.ceil(nn);
	arr.push(ans1);
	arr.push(ans2);
	  return arr;
	
 }


15--   // reverse each word in the sentence
// Guide! Javascript this to Welcome

var string = "Welcome to this Javascript Guide!";

let res = string.split(" ").reverse().join(" ");
console.log("7)", res);


16 --  // reverse each char in the sentence
// Output becomes !ediuG tpircsavaJ siht ot emocleW

let result = string.split("").reverse().join("");
console.log("12) ", result);


17--  // check if an object is an array or not
var arrayList = [1, 2, 3];

console.log(Array.isArray(arrayList));


18--  // generate random string 5 elements

let ch = Math.random().toString(36).substring(3, 8)

console.log(ch)


// Replace All Occurrences of a String
// convert red into blue
var stg = "Mr Red has a red house and a red car";
let str = stg.toLowerCase();

let z = str.split("red").join("blue");
console.log(z);

// second method with regex
var st = "Mr Red has a red house and a red car";
let reg = /red/gi;

let xt = st.replace(reg, "blue");
console.log(xt);


// Count the Number of Vowels in a String
var java = "javascript is a fun language";


function vowel(str) {
 let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

	 for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
    count++;
   }
  }
