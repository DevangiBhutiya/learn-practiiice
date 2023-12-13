// object Practice

// let user = {
//     name: "John",
//     surname: "smith",
// }

// user.name="Peter"
// delete user.name
// console.log(user)

//Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// let schedule = {
//     name:"devangi"
// };

// const isEmpty = (obj) => {

//     for(let key in obj) {
//        return false
//     }
// return true
// }

// console.log(isEmpty(schedule))

//Sum object properties

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// //   const {John, Ann, Pete} = salaries
// const sumObj = (obj) => {
//   let sum = 0;
//   for (let salarie in obj) {
//     sum = sum + obj[salarie];
//   }
//   return sum;
// };

// console.log(sumObj(salaries));

//Multiply numeric property values by 2

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// const MultiplyNum = (obj) => {

//   for(let mul in obj) {
//     if(typeof obj[mul]=== 'number') {
//       obj[mul] *= 2
//     }

//   }
//   console.log(obj)
// }

// const res = MultiplyNum(menu)

//object using this
//create a calculator
//Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

// let calculator = {
//   read: function() {
//     this.a= +prompt("enter the first value")
//      this.b = +prompt("enter the second value")
//   },
//   sum: function() {
//     return this.a + this.b
//   },
//   mul() {
//     return this.a * this.b;
//   },

// }
// calculator.read()
// console.log(calculator.a)
// console.log(calculator.sum())
// console.log(calculator.mul())

// let first = ""
// let last = ""
// let name = 0

// let result = first || last || name || "Anonymus"

// console.log(result)

// let hour = 10;
// let time = 0

// let result = time && hour
// console.log(result)

// let age = 30

// if(!(age > 14 && age < 90)) {
//     console.log("the age is between 14 to 90")
// }
// else {
//     console.log("not")
// }

// let age = 12
// console.log(age<14)
// console.log(age>90)
// if(age < 14 || age > 90) {
//     console.log("the age is not between 14 to 90")
// }
//  else  {
//      console.log("the age is between  ")
//  }

// let username = prompt("whos there", '')

// if(username === "Admin") {
// let pass = prompt("enter your password", '')
//     if(pass === "Master") {
//         console.log("Welcome!")
//     } else if ( pass === "" || pass === null) {
//         console.log("Canceled")
//     } else {
//         console.log("wrong password")
//     }
// } else if( username === "" || username===null) {
//     console.log("Canceled")
// } else {
//     console.log("I dont know")
// }

// for(let i = 1; i<=10; i++) {
//     if(i%2==0) {
//         console.log(i)
//     }
// }

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }

// const checkAge= (age) => {
// let result = age>18 ? true : "did"
// return result
// }
// console.log(checkAge(156))

// const min = (a,b) => {
//   return a < b ? a : b
// }

// console.log(min(2,1))
// console.log(min(2,-1))

// const pow = (a, b) => {
//     let res = a
//     for(let i = 1; i < b; i++ ) {
//         res*=a;

//     }

//     return res
// }

// console.log(pow(3,2))
// console.log(pow(3,3))

// let user = {
//     name: "devangi",
//     age: 20,
//     isAdmin: true
// }

// for(let key in user) {
//     console.log(user[key])
// }

// let user = {
//     name: "user",
//     age: 20,
//     isAdmin: true,

// }
// let admin = {
//     name: "admin",
//     age: 20,
//     isAdmin: true,

// }
// function say() {
//     console.log(this.name)
// }
// user.f = say;
// admin.f = say

// user.f()
// admin.f()

// let billion = 7e9
// console.log(billion)

// let num = 255
// console.log(num.toString(2))

// let num = 1.23456;
// console.log((num * 100) / 100)
// alert( Math.round(num);

// alert(num.toFixed())

// let str = "Hello"

// alert(str[0])
// alert( str.at(0))
// alert(str[str.length -1])

// alert( 'Interface'.toUpperCase() ); // INTERFACE
// alert( 'Interface'[0].toLowerCase() ); // INTERFACE

// let str = 'Widget with id';

// alert( str.indexOf('id', 2) ) // 12

// let str = 'As sly as a fox, as strong as an ox';

// let target = 'as'; // let's look for it

// let pos = 0;

// while(true) {
//     let found = str.indexOf(target, pos);
//     if(found===-1) break;

//     alert(`Found at ${found}`)
//     pos =  found + 1;
// }

// let str = "Widget with id";

// if(str.indexOf("Widget") != -1) {
//     alert("Found")
// }

// alert(str.includes("Widget", 3))

// let str = "stringify";

// console.log(str.slice(0,5))

// let gfg = 'GFG '
// let geeks = 'stands for GeeksforGeeks'

// // Split string on '-'.
// console.log(geeks.split(' '))

// let str = "devangi"

// const ucFirst= (str) => {
//     return str[0].toUpperCase() +  str.slice(1)
// }

// console.log(ucFirst(str))

// const checkSpam = (str) => {
//     if(str.includes("ViAgRA") ||  str.includes("xxxxx")) {
//         return true
//     }
//     else {
//         return false
//     }

// }

// console.log(checkSpam('buy ViAgRA now'))
// console.log(checkSpam('free xxxxx'))
// console.log(checkSpam('innocent rabbit'))

// const trunc = (str, maxlength) => {
//     if(str.length > maxlength) {
//         return str.slice(0, maxlength-1) + "..."
//     } else {
//         return str
//     }
// }

// alert(trunc("What I'd like to tell on this topic is:", 20))

//Extract the money

// const extractCurrencyValue = (str) => {

//   return parseInt(str)
// }

// alert(extractCurrencyValue("$120"))

//for hollow square
// let num = +prompt("Enter number")
// let string = "";

// for(let i=0;i<num;i++)
// {
//   for(let j=0;j<num;j++){
//       if(i>0&&i<num-1&&j>0&&j<num-1){
//         string+=" ";
//       }else{
//         string+="*";
//       }

//   }
//   string += "\n";
// }
// console.log(string);

//for triangle
// let num = 4;

// let string = "";
// for (let row = 1; row <= num; row++) {
//   for (let col = 1; col <= row; col++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string)

//for square
// let num = 4

// let string = ""
// for(let row = 1; row<=num; row++) {

//   for (let col = 1; col<=num; col++) {
//     string+= "*"
//   }
//   string+= "\n"
// }
// console.log(string)

//for reverse triangle

//  let num = 4;
// let string = "";

// for (let row = 1; row <= num; row++) {
//    for(let col = 1; col<=num-row +1; col++) {
//        string+="*"
//    }

//    string+= "\n"
//  }
//  console.log(string)

//print number in triangle

// let num = 5;
// let string = "";

// for (let row = 1; row <= num; row++) {
//    for(let col = 1; col<=row; col++) {
//        string+=col
//    }

//    string+= "\n"
//  }
//  console.log(string)

//question 4

// let num = 3
// let string = "";
// let totalrows = 2* num -1;
// debugger;
// for(let row = 0; row <=totalrows; row++) {
//   let totalCols = row > num  ? num - (row - num ) : row
//   for(let col = 0; col<totalCols; col++) {
//     string+= "*"
//   }

//   string+="\n"
// }

// console.log(string)

// hollow diamond

// let num = 3
// let string = ""

// debugger;

// for(let row = 1; row<= 2 * num; row++) {
//   let totalCols = row> num ? 2 * num -row : row
//   let totalSpace = num - totalCols
//     for(let s = 0; s<totalSpace; s++) {
//       string+=" "
//     }

//   for(let col = 1; col<=totalCols; col++) {
//     if (row === 1 || row === 2 * num || col === 1 || col === totalCols) {
//       string += "* ";
//     } else {
//       string += "  "; // Two spaces for hollow pattern
//     }
//   }
//   string+="\n"
// }
// console.log(string)

// let num = 5;
// let string = "";
// debugger;
// for(let row = 1; row<=num; row++) {

//   for(let col = 1; col<=num; col++) {
//     if(row === col || col === num - row + 1) {
//       string+="*"
//     }
//     else {
//       string+=" "
//     }
//   }
//    string+= "\n"
// }

// console.log(string)

// let num = 5
// let string = ""

// for(let row = 1; row<=num * 2-1 ; row++) {
//   //let totalCols = row < num ? 2 * num - row : row

//   for(let col= 1; col<=num *2-row; col++) {

//     string+= col
//   }
//   string+="\n"
// }

// console.log(string)
// debugger
// let n = 5;
// let string = "";
// // Reverse Pyramid
// // for (let i = 1; i <= n; i++) {
// //   for (let j = 1; j < i; j++) {
// //     string += " ";
// //   }
// //   for (let k = 1; k <= 2 * (n - i ) + 1; k++) {
// //     string += k;
// //   }
// //   string += "\n";
// // }
// // Pyramid
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     string += " "; // Add extra space for better alignment
//   }
//   for (let k = 5; k <= i; k++) {
//     string += k + " ";
//   }
//   string += "\n";
// }

// console.log(string);

// Decreasing Pyramid with Numbers
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     string += " "; // Add extra space for better alignment
//   }
//   for (let k = 5; k <= i; k--) {
//     string += k + " ";
//   }
//   string += "\n";
// }

// console.log(string);

// let n = 5;
// let string = "";

// // Upper part of the hourglass
// let n = 5;
// let string = "";

// Upper part of the hourglass
// for (let i = 1; i <= n; i++) {
//   let totalCols = i > n ? n - i : i;
//   for (let j = 1; j < n -i; j++) {
//     string += " ";
//   }
//   for (let k = n; k >= n - totalCols + 1; k--) {
//     string += k + " ";
//   }
//   string += "\n";
// }

// // Lower part of the hourglass
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j < n - i; j++) {
//     string += " ";
//   }
//   for (let k = n; k >= n - i + 1; k--) {
//     string += k + " ";
//   }
//   string += "\n";
// }

// console.log(string);


//Practice of Array methods

// const camelize = (str) => {
//   const res = str.split("-")
//   const trans = res.map((item,index)=> {
//       return index == 0 ? item : item[0].toUpperCase() + item.slice(1)

//   }).join("")
//   return trans;

// }

// console.log(camelize("background-color"))


// js string practice question

// 1. Write a JavaScript function to check whether an 'input' is a string or not.
// Test Data :
// console.log(is_string('w3resource'));
// true
// console.log(is_string([1, 2, 4, 0]));
// false

// const isString = (str) => {
//   return typeof str === 'string' 
// }


// console.log(isString("Hello"))
// console.log(isString([1, 2, 4, 0]))


// 2. Write a JavaScript function to check whether a string is blank or not.
// Test Data :
// console.log(is_Blank(''));
// console.log(is_Blank('abc'));
// true
// false

// const strBlank = (str) => {
//   return str.length === 0 
  
// }
// console.log(strBlank(''));
// console.log(strBlank('abc'));


// 3. Write a JavaScript function to split a string and convert it into an array of words.
// Test Data :
// console.log(string_to_array("Robin Singh"));
// ["Robin", "Singh"]


// const string_to_array = (str) => {

//       return str.split(" ")
  
// }
// console.log(string_to_array("Robin Singh"));


//4. Write a JavaScript function to extract a specified number of characters from a string.
// Test Data :
// console.log(truncate_string("Robin Singh",4));
// "Robi"

// const truncate_string = (str, num) => { 
//     return str.slice(0, num)

// }

// console.log(truncate_string("Robin Singh",4));


// 5. Write a JavaScript function to convert a string in abbreviated form.
// Test Data :
// console.log(abbrev_name("Robin Singh"));
// "Robin S."

// const abbrev_name = (str) => {
//   return str.split(" ")[0] + " " + str.split(" ")[1][0] + "."
// }

// console.log(abbrev_name("Robin Singh"))

// 6. Write a JavaScript function to hide email addresses to protect from unauthorized user.
// Test Data :
// console.log(protect_email("tzirw@example.com"));
// "tzirw@example.com"

// const protect_email = (email) => {

//   return email.split("@")[0] + "..." + "@" + email.split("@")[1]
  
// }

// console.log(protect_email("tzirw@example.com"))

//7. Write a JavaScript function to parameterize a string.
// Test Data :
// console.log(string_parameterize("Robin Singh from USA."));
// "robin-singh-from-usa"

// const string_parameterize = (str) => {
//     return str.split(" ").join("-").toLowerCase()
  
// }
// console.log(string_parameterize("Robin Singh from USA."));

//8. Write a JavaScript function to capitalize the first letter of a string.
// Test Data :
// console.log(capitalize('js string exercises'));
// "Js string exercises"

// const capitalize = (str) => { 
//     return str.charAt(0).toUpperCase() + str.slice(1)
// }

// console.log(capitalize('js string exercises'));

//9. Write a JavaScript function to capitalize the first letter of each word in a string.
// Test Data :
// console.log(capitalize_Words('js string exercises'));
// "Js String Exercises"  

// const capitalize_Words = (str) => {
//   let res = str.split(" ")
//   let transform = res.map((item)=> {
//         return item.charAt(0).toUpperCase() + item.slice(1)
//   })
//   return transform.join(" ")  
// }

// console.log(capitalize_Words('js string exercises'));

//10. Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case.
// Test Data :
// console.log(swapcase('AaBbc'));
// "aAbBC"

// const swapcase = (str) => {
//   return str.split("")
//   .map((item) => item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase())
//   .join("")
// }


// console.log(swapcase('AaBbc'));

//11. Write a JavaScript function to convert a string into camel case.
// Test Data :
// console.log(camelize("JavaScript Exercises"));
// console.log(camelize("JavaScript exercises"));
// console.log(camelize("JavaScriptExercises"));


// const camelize = (str) => {
//     return str.split(" ") 
//   .map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1))
//   .join("")
  
// }
// console.log(camelize("JavaScript Exercises"));
// console.log(camelize("JavaScript exercises"));

// 12. Write a JavaScript function to uncommelize a string.
// Test Data :
// console.log(uncamelize('helloWorld'));
// console.log(uncamelize('helloWorld','-'));
// console.log(uncamelize('helloWorld','_'));
// "hello world"
// "hello-world"
// "hello_world"

// const uncamelize = (str, separator = " ") => {
//   let uncamelized = "";
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (char === char.toUpperCase() && i > 0) {
//       uncamelized += separator;
//     }
//     uncamelized += char.toLowerCase();
//   }
//   return uncamelized;
// }

// console.log(uncamelize("helloWorld")); // Output: hello world
// console.log(uncamelize("helloWorld", "-")); // Output: hello-world
// console.log(uncamelize("helloWorld", "_")); // Output: hello_world


//13. Write a JavaScript function to concatenate a given string n times (default is 1).
// Test Data :
// console.log(repeat('Ha!'));
// console.log(repeat('Ha!',2));
// console.log(repeat('Ha!',3));
// "Ha!"
// "Ha!Ha!"
// "Ha!Ha!Ha!"

// const repeat = (str, num = 1) => {
//   return str.repeat(num)
// } 

// console.log(repeat('Ha!'));
// console.log(repeat('Ha!',2));
// console.log(repeat('Ha!',3));

// 14. Write a JavaScript function to insert a string within a string at a particular position (default is 1).
// Test Data :
// console.log(insert('We are doing some exercises.'));
// console.log(insert('We are doing some exercises.','JavaScript '));
// console.log(insert('We are doing some exercises.','JavaScript ',18));
// "We are doing some exercises."
// "JavaScript We are doing some exercises."
// "We are doing some JavaScript exercises."


// const insert = (str, str1, num = 0) => {
//   return str.slice(0, num) + str1 + " " + str.slice(num)   
// }

// console.log(insert('We are doing some exercises.'));
// console.log(insert('We are doing some exercises.', 'JavaScript'));
// console.log(insert('We are doing some exercises.','JavaScript', 18));

// 15. Write a JavaScript function that format a number in a human-readable string with the correct suffix, such as 1st, 2nd, 3rd, etc.

// Test Data :
// console.log(humanize_format());
// console.log(humanize_format(1));
// console.log(humanize_format(8));
// console.log(humanize_format(301));
// console.log(humanize_format(402));
// "1st"
// "8th"
// "301st"
// "402nd"

// const humanize_format = (num) => {
//   if (num % 100 >= 11 && num % 100 <= 13) {
//     return num + "th";
//   }
//   switch (num % 10) {
//     case 1:
//       return num + "st";
//     case 2:
//       return num + "nd";
//     case 3:
//       return num + "rd";
//     default:
//       return num + "th";
//   }
// }
// console.log(humanize_format(1));
// console.log(humanize_format(8));
// console.log(humanize_format(301));
// console.log(humanize_format(402));

//16. Write a JavaScript function to truncate a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("...") (by default) or specified characters.
// Test Data :
// console.log(text_truncate('We are doing JS string exercises.'))
// console.log(text_truncate('We are doing JS string exercises.',19))
// console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
// "We are doing JS string exercises."
// "We are doing JS ..."
// "We are doing !!"


// const text_truncate = (str, num, replaceStr) => {
//   if (str.length > num  && replaceStr ) {
//     return str.slice(0, num) + replaceStr;;
//   }  else if (str.length > num) {

//      return str.slice(0, num) + "...";
//   }
//   else  {
//     return str;
//   }
  
// }

// console.log(text_truncate('We are doing JS string exercises.'))
// console.log(text_truncate('We are doing JS string exercises.',19))
// console.log(text_truncate('We are doing JS string exercises.',15,'!!'))

//17. Write a JavaScript function to chop a string into chunks of a given length.
// Test Data :
// console.log(string_chop('w3resource'));
// console.log(string_chop('w3resource',2));
// console.log(string_chop('w3resource',3));
// ["w3resource"]
// ["w3", "re", "so", "ur", "ce"]
// ["w3r", "eso", "urc", "e"]


// const string_chop = (str, num) => {
//     const arr = [];
//     for (let i = 0; i < str.length; i += num) {

//         arr.push(str.slice(i, i + num));
//     }
//   return arr
    
// }
// console.log(string_chop('w3resource',2));
// console.log(string_chop('w3resource',3));

// Test Data :
// console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
// Output :
// 2
// console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
// Output :
// 1

// const count = (str1, str2) => {
//   return str1.split(str2).length - 1;

  
// }
// console.log(count("The quick brown fox jumps over the lazy dog", 'the'));


// 18. Write a JavaScript function to count substrings in a string.
// Test Data :
// console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
// Output :
// 2
// console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
// Output :
// 1


