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