//what do I think will be outputted in the terminal? 
// Regardless of whether I was right or wrong, WHY was I right or wrong? 
// What is the execution flow of this code?". 

// console.log('First');

// setTimeout(() => {
//   console.log('Second');
// }, 0);

// console.log('Third');

//what do I think will be outputted in the terminal?  first, third, second
// Regardless of whether I was right or wrong, WHY was I right or wrong?  right
// What is the execution flow of this code?".  first will go first, second 


// setTimeout(() => {
//     console.log('First');
//     setTimeout(() => {
//       console.log('Second');
//     }, 0);
//   }, 0);
  
//   console.log('Third');

  //what do I think will be outputted in the terminal?  third, first, second
// Regardless of whether I was right or wrong, WHY was I right or wrong?  right
// What is the execution flow of this code?".  Third will get pushed out first, then first, and then second

// function longOperation() {
//     for (let i = 0; i < 1000000000; i++) {
//       // Some heavy computation
//     }
//     return 'Operation complete';
//   }
  
//   console.log('Start');
  
//   setTimeout(() => {
//     console.log(longOperation());
//   }, 0);
  
//   console.log('End');

  //what do I think will be outputted in the terminal?  start, end, operation complete, 
// Regardless of whether I was right or wrong, WHY was I right or wrong?  right
// What is the execution flow of this code?".  the function will flow top to bottom, first console log start, then end, and then longOperation
//that is in callback//

// console.log("Start");

// setTimeout(() => {
//   console.log("A");
// }, 3000);

// setTimeout(() => {
//   console.log("B");
// }, 1000);

// setTimeout(() => {
//   console.log("C");
// }, 2000);

// console.log("End");

//what do I think will be outputted in the terminal? start, end, a , b ,c 
// Regardless of whether I was right or wrong, WHY was I right or wrong?  wrong, I didnt look at the callback seconds
// What is the execution flow of this code?".  first start is pushed, then end, and then b bc its 1000 second callback, then c since its 2000 
//callback and A will push out at 3000 seconds.//
// console.log("Start");

// let delay = 2000;
// setTimeout(() => {
//   console.log("Hello");
//   delay = 1000;
// }, delay);

// setTimeout(() => {
//   console.log("World");
// }, delay);

// console.log("End");

//what do I think will be outputted in the terminal?  start, end, hello world
// Regardless of whether I was right or wrong, WHY was I right or wrong? right
// What is the execution flow of this code?". start gets pushed first, then end, then hello but it has its own delay time of 1000, and then 
//world with 2000 second delay//

console.log('First');

Promise.resolve().then(() => console.log('Second'));

setTimeout(() => console.log('Third'), 0);

console.log('Fourth');

//what do I think will be outputted in the terminal?  first, fourth, second, third
// Regardless of whether I was right or wrong, WHY was I right or wrong? yes
// What is the execution flow of this code?". not sure what promise is but I feel like it will be stored somewhere and then come back fast then callback/
