
// // reverse each word in the sentence
// // Guide! Javascript this to Welcome
// var string = "Welcome to this Javascript Guide!";

// let res = string.split(" ").reverse().join(" ");
// console.log("7)", res);

// // reverse each char in the sentence
// // Output becomes !ediuG tpircsavaJ siht ot emocleW
// let result = string.split("").reverse().join("");
// console.log("12) ", result);

// // check if an object is an array or not
// var arrayList = [1, 2, 3];

// console.log(Array.isArray(arrayList));

// // 3 + 2 + 1 + 4 + 12 = 22
// var arr = [[3, 2], [1], [[[4, 12]]]];

// let x = arr.flat(Infinity);

// let total = 0;
// for (let i = 0; i < x.length; i++) {
//   total += x[i];
// }
// console.log("30)", total);

// // second method

// function arrsum(newarr) {
//   return newarr
//     .reduce((acc, cur) => acc.concat(cur))
//     .reduce((acc, curr) => acc + curr);
// }
// console.log(arrsum([[3, 2], [1], [4, 12]]));

// // print all numbers between low and high and  divisible by 3
// var low = 12;
// var high = 30;

// let newarray = [];
// for (let i = low; i < high; i++) {
//   newarray.push(i);
//   if (i % 3 == 0) {
//     newarray.push("div3");
//   }
// }
// console.log(newarray);

// // only add odd numbers
// let resarr = [];
// for (let i = 0; i < 12; i++) {
//   if (i % 3 == 0) {
//     resarr.push(i);
//   }
// }
// console.log(resarr);
// let save = resarr.reduce((acc, cur) => acc + cur);
// console.log(save);

// // assign/swap the value of variables

// let num3 = 34;
// let num4 = 56;

// [num3, num4] = [num4, num3];
// console.log("num1 :", num3, ", num2 :", num4);

// // // second method
// let num1 = 34;
// let num2 = 56;
// num1 = num1 + num2;
// num2 = num1 - num2;
// num1 = num1 - num2;

// console.log("num1 =>", num1, ", num2 =>", num2);

// // check number is in integer or not
// // isInt(4.0);        // true
// // isInt(12.2);       // false
// // isInt(0.3);        // false

// function isInt(value) {
//   return value % 1 == 0;
// }
// console.log(isInt(4.0));
// console.log(isInt(12.2));

// // is decimal or not
// function isDeci(value) {
//   return value % 1 != 0;
// }
// console.log(isDeci(4.0));
// console.log(isDeci(12.2));

// // return random number in between these two numbers
// // wrong way to solve
// function randomNumb(first, last) {
//   return first + Math.round(Math.random() * last - first);
// }

// console.log(randomNumb(10, 50));

// // return random number in between these two numbers
// // rigth way to solve
// function randomNumb(first, last) {
//   let v = first + Math.round(Math.random() * last);
//   if (v > last) return v - first;
//   return v;
// }

// console.log(randomNumb(10, 50));

// // reverse string without using built-in methods

let strstr = "     hello how are you     ";

let newres = "";
for (let i = strstr.length - 1; i >= 0; i--) {
  if (strstr[i] != " ") {
    newres += strstr[i];
  }
}
console.log("reverse string", newres.trim());

// // check palindrom

// //  lol        true
// // nurses run  false
// // hell        false

// function checkpalin(par) {

// let you = ''
// you = par.split('').reverse().join('')
// // console.log(you)
// if (par === you) return true;
//   return false;

  // let results = [];
  // for (let i = 0; i < par.length; i++) {
  //   results.unshift(par[i]);
  // }
  // let newst = results.join("");
  // console.log(newst);
  // if (par === newst) return true;
  // return false;


// }





// console.log(checkpalin("hello"));
// console.log(checkpalin("lol"));
// console.log(checkpalin("nurses run"));





// // reverse the interger

// let num10 = 678901.01;

// let rem = Math.floor(num10)


// let str = rem.toString().split('').reverse().join('')
// console.log(Number(str))



// let integ = Math.floor(num10);
// let tostr = integ.toString();

// let arr5 = [];
// for (let i = 0; i < tostr.length; i++) {
//   arr5.unshift(tostr[i]);
// }
// let repeatstr = arr5.join("");
// console.log(Number(repeatstr));




// //  replace the spaces of string with comma

// let ss = "  hello how are you   ";

// let nospa = ss.trim();

// let newr = nospa.replaceAll(" ", ",");
// console.log(newr);

// let yup = nospa.split(" ").join("-");
// console.log(yup);

// //  Write a function which accepts a string argument and returns the count of characters between the first and last character 'X'

// // getTheGapX('XeroX');                        // 4
// // getTheGapX('Xamarin');                      // -1       (If there is only single character 'X')
// // getTheGapX('JavaScript');                      -1

// function getcount(str) {
//   if (!str.includes("X")) {
//     return -1;
//   }
//   firstInd = str.indexOf("X");
//   lastInd = str.lastIndexOf("X");
//   return firstInd === lastInd ? -1 : lastInd - (firstInd + 1);
// }



// console.log(getcount("XabcdX"));
// console.log(getcount("hfsjofska"));
// console.log(getcount("hfsXska"));

// there are three words of 'hello' give the index of 2nd word 'hello'
let thisarr = [
  "yup",
  "hell",
  "hello",
  "yoga",
  "hello",
  "how",
  "hello",
  "you",
  "hello",
];


// let first = thisarr.indexOf("hello");
// console.log(first);

// let second = thisarr.indexOf("hello", first + 1);
// console.log(second);

// let third = thisarr.indexOf("hello", second + 1);
// console.log(third);

// let last = thisarr.lastIndexOf("hello");
// console.log(last);

// // Write a code to truncate a string to a certain number of words

// const str11 = "JavaScript is simple but not easy to master";
// const wordLimit = 3;

// let xx = str11.split(" ").slice(0, wordLimit).join(" ");
// console.log(xx);

// Write a function which returns a list of elements which contains at least one character as digit
// // numInStr(['1a', 'a', '2b', 'b']);              // ['1a', '2b']
// // numInStr(['abc', 'abc10']);                    // ['abc10']

// function checkint(arr) {

//  return  arr.filter((value) => {
//     return /[0-9]/.test(value)
//   })

// }


// console.log(checkint(["1a", "a", "2b", "b"]));

// // second method
// function checknum(arr) {
//   return  arr.filter((value) => {
//       let valid = false
//       value.split('').forEach((ele) => {
//         if(Number.isInteger(parseInt(ele))){
// valid = true
//         }
//       })
//       if(valid) return value
//     })

//   return arr.filter((value) => {
//     let valid = false;
//     value.split("").forEach((element) => {
//       if (Number.isInteger(parseInt(element))) {
//         valid = true;
//       }
//     });
//     if (valid) return value;
//   });
// }

// console.log(checknum(["1a", "a", "2b", "b"]));

// // duplicate the elements of array
// // duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]

// function dupli(arr) {
//   return arr.concat(arr);
 
// }
// console.log(dupli([1, 2, 3, 4, 5]));

// // Given two strings, return true if they are anagrams of one another
// // For example: Mary is an anagram of Army
// // isAnagram(firstWord, secondWord); // true

// var firstWord = "Mary";
// var secondWord = "Army";

// function isana(first, second) {
//   var a = first.toLowerCase();
//   var b = second.toLowerCase();

//   a = a.split("").sort().join("");
//   b = b.split("").sort().join("");

//   return a == b;
// }
// console.log(isana(firstWord, secondWord));

// // how to impliment this
// // multiply(5)(6)(3);

// // answer => we can create closure to keep the value of a outer function into inner function that making it closure , and it has access to the varibales with in the outer function

// function multiply(a) {
//   return function (b) {
//     return function (c) {
//       return a * b * c;
//     };
//   };
// }
// console.log(multiply(5)(6)(3));

// // how to empty an array
// var arrayList = ["a", "b", "c", "d", "e", "f"];

// // first method
// var arrayList = [];
// console.log(arrayList);

// // second method
// arrayList.length = 0;
// console.log(arrayList);

// // third method
// arrayList.splice(0, arrayList.length);
// console.log(arrayList);

// // Counts the occurrences of a value in an array
// // ([1, 1, 2, 1, 2, 3], 1); // 3

// function count(arr, val) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == val) {
//       sum++;
//     }
//   }
//   return sum;
// }

// console.log(count([1, 1, 2, 1, 2, 3], 1));

// // second method
// function countnumb(arr, val) {
//   return arr.reduce((acc, cur) => (cur == val ? acc + 1 : acc), 0);
// }


// console.log(countnumb([1, 1, 2, 1, 2, 3], 2)); // 3

// // extract the first half of the string of even length
// const first_half = (word) => {
//   if (word.length % 2 == 0) {
//     let half = word.length / 2;
//     return word.slice(0, half);
//   }
//   return word;
// };

// console.log(first_half("Python"));
// console.log(first_half("JavaScript"));
// console.log(first_half("PHP"));

// // remove the duplicates in the array
// // [1,2,3,4,2,5,6,4] => [1,2,3,4,5,6]

// function remov(arr) {
//   let newarr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!newarr.includes(arr[i])) {
//       newarr.push(arr[i]);
//     }
//   }
//   return newarr;
// }
// console.log(remov([1, 2, 3, 4, 2, 5, 6, 4]));

// // second method
// function removeme(arr) {
//   let newarr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (newarr.indexOf(arr[i]) == -1) {
//       newarr.push(arr[i]);
//     }
//   }
//   return newarr;
// }



// console.log(removeme([1, 2, 3, 4, 2, 5, 6, 4]));

// // third method  not working
// // const removeme = (arr) => { arr.reduce((acc , cur) => (!acc.includes(arr[cur])) ? acc.push(arr[cur]) ,[])
// // }

// // create a new string without the first and last character of a given string
// var small = "Hello Javascript";

// function cutit(word) {
//   return word.substring(1, word.length - 1);
// }
// console.log(cutit(small));

// //write program to concatenate two strings except their first character
// var new1 = "java";
// var new2 = "script";

// function notfirst(first, second) {
//   let fir = first.substring(1, first.length);
//   let sec = second.substring(1, second.length);

//   return fir + sec;
// }
// console.log(notfirst(new1, new2));

// // Remove a Property from a JavaScript Object
// var person = {
//   name: "Harry",
//   age: 16,
//   gender: "Male",
// };

// delete person.age;
// console.log(person);

// // Write a code to move last three character to the start of a given string. The string length must be greater or equal to three

// var hy = "javascript";

// function lastthree(char) {
//   return char.slice(-3) + char.slice(0, -3);
// }
// console.log(lastthree(hy));

// // Write a code to move first five character to the end of a given string. The string length must be greater or equal to five

// var hi = "   Hello   javascript";

// function five(word) {
//   if (word.length >= 5) {
//     let x = word.slice(0, 5);
//     return (word.slice(5) + x).trim();
//   }
// }
// console.log(five(hi.trim()));

// // create a string using the middle three characters of a given string of odd length. The string length must be greater or equal to three.

// var yo = "hello";

// function hel(word) {
//   if (word.length % 2 != 0) {
//     let mid = Math.ceil(word.length / 2);
//     console.log(mid);
//     return word.slice(mid - 2, mid + 1);
//   }
// }
// console.log(hel(yo));

// // dont add any character which is more than one
// // ("abcdabc")     //return  d

// function hur(word) {
//   let arr = word.split("");
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) {
//       res.push(arr[i]);
//     }
//   }
//   return res.join("");
// }


// console.log(hur("helloo"));

// // Convert the First Letter of a String into UpperCase
// // output Javascript
// var java = "javascript";

// function upit(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }


// console.log(upit(java));

// // Check the Number of Occurrences of a Character in the String
// // (hello world , l) => 3

// function how(str, val) {
//   let total = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str.charAt(i) == val) {
//       total++;
//     }
//   }
//   return total;
// }
// console.log(how("hello world", "l"));

// //  remove all white spaces from text
// let str1 = "     hello how are you     ";

// let res1 = "";
// for (let i = 0; i < str1.length; i++) {
//   if (str1[i] != " ") {
//     res1 += str1[i];
//   }
// }
// console.log(res1);

// // Check the Number of Occurrences of a Character in the String
// // (hello world , l) => 3

// function how(str, val) {
//   let total = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str.charAt(i) == val) {
//       total++;
//     }
//   }
//   return total;
// }
// console.log(how("hello world", "l"));

// // Convert the First Letter of a String into UpperCase
// // output Javascript
// var java = "javascript";

// function upit(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }
// console.log(upit(java));

// // Count the Number of Vowels in a String
// var java = "javascript is a fun language";

// function vowel(str) {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i].toLowerCase())) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(vowel(java));

// //  Count the Number of Vowels Using Regex

// var java = "javascript is a fun language";

// function checkvowel(str) {
//   let count = str.match(/[aeiou]/gi).length;
//   return count;
// }

// function checkvowel(str){
//    let count = str.match(/[aeiou]/gi).length;
//    return count
// }

// console.log(checkvowel(java));

// // remove word from string using regex

// var java = "javascript is a fun language";

// let y = java.match(/[^a]/g).join("");

// console.log(y);

// // Check Whether a String Starts and Ends With Certain Characters
// var j = "String";

// function che(str) {
//   if (
//     str.startsWith("S") ||
//     (str.startsWith("s") && str.endsWith("G")) ||
//     str.endsWith("g")
//   ) {
//     return true;
//   }
// }
// console.log(che(j));

// // Replace All Occurrences of a String
// // convert red into blue
// var stg = "Mr Red has a red house and a red car";
// let str = stg.toLowerCase();

// // that method is not correct because it will not return you the uppercase words into uppercase like Mr Red
// let z = str.split("red").join("blue");
// console.log(z);

// // second method with regex
// var st = "Mr Red has a red house and a red car";
// let reg = /red/gi;

// let xt = st.replace(reg, "blue");
// console.log(xt);

// // what is console hi or hello
// const a = undefined;
// console.log(!a ? "hi" : "hello");

// // generate random string 5

// let ch = Math.random().toString(36).substring(3, 8);

// let ch = Math.random().toString(36).substring(3 , 8)

// console.log(ch);

// // Check Whether a String Contains a Substring

// var tt = "yo want a book i guess!";
// var you = "you";

// console.log(tt.includes(you));

// // Compare Two Strings
// var string1 = "JavaScript Program";
// var string2 = "javascript program";

// console.log(string1.toLowerCase() === string2.toLowerCase());

// // remove element from array
// // Input: nums = [0,1,2,2,3,0,4,2], val = 2
// // Output: 5, nums = [0,1,4,0,3,_,_,_]

// var nu = [0, 1, 2, 2, 3, 0, 4, 2];
// var val = 2;

// let arr2 = [];
// for (let i = 0; i < nu.length; i++) {
//   if (nu[i] !== val) {
//     arr2.push(nu[i]);
//   }
// }
// console.log(arr2);

// // count the total elements except val in array
// var nu = [0, 1, 2, 2, 3, 0, 4, 2];
// var val = 2;

// let sum2 = 0;
// for (let i = 0; i < nu.length; i++) {
//   if (nu[i] !== val) {
//     sum2++;
//   }
// }
// console.log(sum2);

// // remove the duplicates
// var nu = [0, 1, 2, 2, 3, 0, 4, 2];

// var arr3 = [];
// for (let i = 0; i < nu.length; i++) {
//   if (!arr3.includes(nu[i])) {
//     arr3.push(nu[i]);
//   }
// }
// console.log(arr3);

// // //find how many times element is present in ...
// // charCount("a", "edabit") ➞ 1

// var tt = "edabit";
// var val = "a";

// let k = 0;
// for (let i = 0; i < tt.length; i++) {
//   if (tt[i] == val) {
//     k++;
//   }
// }
// console.log(k);

// // second method

// function cha(str, val) {
//   let x = str.split("");
//   return x.filter((x) => x == val).length;
// }
// console.log(cha("java java", "a"));

// // sum the elements of the array except itself
// // // arrEleSum([1, 2, 3, 2, 1]) ➞ [8, 7, 6, 7, 8]




// function arrEleSum(args) {
//   let fullarr = []
//  let len = args.length;

  
//   for(let i =0; i< len; i++){
//      let sum = 0;
//    for(let j = 0; j< len; j++){  
//       if(i!=j)	
//         sum += args[j]; 
//     }	
//    fullarr.push(sum);
//   }	
// return fullarr;
// }
	

// console.log(arrEleSum([1, 2, 3, 2, 1]))


// function Sum(arr){

//   let fularr = []
// let len = arr.length;

// for(let i =0; i< len; i++){
//   let sum = 0
//   for(let j =0; j< len; j++){
//     if(i != j){
//       sum += arr[j]
//     }
 
//   }
//   fularr.push(sum)
// }
// return fularr


// }


// console.log(Sum([1, 2, 3, 2, 1]))



// //  search method in string
//  var message = 'The quick brown fox jumped!';
//  console.log(message.search('fox'))
//  console.log(message.search('dog'))




//  var str = 'abc1'
//  var right = /[a-z][0-9][a-z0-9]/.test(str)
//  console.log(right)


//  var str = 'abc1'
//  console.log(/[a-z][a-z0-9][0-9]/.test(str))


// var str =  'abc1def2';
// var right = /^[a-z][a-z0-9]*[0-9]$/.test(str)
// console.log(right)

// var str =  'abc1def2';
// var right = /[0-9][a-z]$/.test(str)
// console.log(right)

// var str =  'abc1def2';
// var right = /^[0-9][a-z0-9]*$/.test(str)
// console.log(right)

// var str =  'abc1def2';
// var right = /[a-z][0-9][a-z0-9]$/.test(str)
// console.log(right)




// creating an object using different ways
const obj = Object.create({ abc : "ve"})
console.log(obj.abc)

const obj2 = {
  name: "hello"
}
console.log(obj2)


function getObject(key, value){
 return   this[key] = value;
}

const obj3 = new getObject('name', 'valpa');
console.log(obj3)


class obje{
  constructor(key , value){
    this[key] = value
  }
}
const obj4 = new obje('name' , 'yoyo')
console.log(obj4)


// Display all the keys of an object
let objj ={
  name: 'aly',
  age: 34,
  key : 'hello'
}
// methods
console.log(Object.keys(objj))

for(let key in objj){
  if(objj.hasOwnProperty(key)){
    console.log(key)
  }
}

for(let key of Object.keys(objj)){
  if(objj.hasOwnProperty(key)){
    console.log(key)
  }
}

Object.keys(objj).forEach((key) => {
  if(objj.hasOwnProperty(key)){
    console.log(key)
  }
})
// hasOwnPropwerty displays the properties present in object not the inherited ones


// Display all values of an object
let objval ={
  name: 'aly',
  age: 34,
  key : 'hello'
}
 // Methods
console.log(Object.values(objval))


for(let key in objval){
  if(objval.hasOwnProperty(key)){
    console.log(objval[key])
  }
}

for(let value of Object.values(objval)){
  console.log(value)
}

Object.values(objval).forEach((value) => {
  console.log(value)
} )



// create a object from array
const arr2 = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];
const obj5 = Object.fromEntries(arr2);
console.log(obj5)


// create an empty object whuch has no prototype attached

const obj6 = Object.create(null)


  // accessor properties of object properties are

 var object2 = {}
Object.defineProperty(object2 , 'data', {
  value : 1,
    writable: true,
    configurable : true,
    ennumerable: true
})

console.log(object2)

// write a function to check object is empty or Not

// Object is empty if it has no keys
// Few objects such as Date object does not have any keys but still are not empty. Hence additional check can be implemented to verify the stringification of the object is also empty

function isEmpty(obj){
  if(obj !== "null" && typeof obj !== "undefined" && typeof obj === "object") {
    return Object.keys(obj).length === 0 && JSON.stringify(obj) === "{}"
  }else{
    return false
  }
}
console.log(isEmpty({}))
console.log(isEmpty({a: 1 , b: 2}))








  // // compare the triplets

  // var ap = [3, 5, 2];
  // var bp = [2, 5, 4];

 



  
  // interview questions

  // // question 1
// const storeProducts = [
//     { description: 'Eggs', quantity: 1, price: 3 },
//     { description: 'Cheese', quantity: 5, price: 5 },
//     { description: 'Butter', quantity: 2, price: 6 }
//   ];
//   //output the total value of all the products

//  const result = storeProducts.map(x => x.quantity * x.price )


//  var totalval = 0
//  for(let i = 0; i < result.length; i++){
//     totalval += result[i]
//  }
//  console.log(totalval)



// // question 2

// let arr = [1, 3, 3, 4, 4, 2, 0, 2, 2];
// //output: [1,3,4,2,0]

// var newarr = []
// for(let i = 0 ; i< arr.length; i++){
//     if(arr[i] != arr[i + 1] ){
//         newarr.push(arr[i])
//     }

  
    
// }

// console.log(newarr)


// let ar = [1, 3, 3, 4, 4, 2, 0, 2, 2];
// //output: [1,3,4,2,0]

// // var newarr = []
// var result = ar.reduce(function(acc, curr){
// if(acc.includes(curr)){
// acc.push(curr)
// }
// }, [])

// console.log(result)

// Interview Phase has started ... Today's interview went well 


let a = [1, 3, 3, 4, 4, 2, 0, 2, 2];
//output: [1,3,4,2,0]

var newar = []
let res = a.map(func)

function func(x){
if(newar.includes(x)){
   console.log('already there')
}else{
   newar.push(x)
}
return newar
}

console.log(res)
