//Write a function findLargest that takes three numbers as 
// arguments and returns the largest of the three.//


function findLargest(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
} else { 
      return num3;
    }
}
console.log(findLargest(5, 10, 3)); // Output: 10



function findLargest ( a, b, c) {
    return Math.max ( 8, 2, 6);
    }
    console.log (findLargest (8, 2, 6)); 




//https://www.geeksforgeeks.org/how-to-find-largest-of-three-numbers-using-javascript///

//Write a function reverseWords that takes a string as an argument and returns a new string where the order 
// of the words in the sentence are reversed, but the words themselves aren't.//

function reverseWords(sentence) {
    // Split the sentence into an array of words
    const words = sentence.split("");

    // Reverse the array of words
    words.reverse();

    // Join the reversed array back into a string
    return words.join(" ");
}


console.log(reverseWords("Hello world!")); // Output: "world! Hello"
console.log(reverseWords("The quick brown fox")); // Output: "fox brown quick The"
console.log(reverseWords("JavaScript is fun")); // Output: "fun is JavaScript"


//Description: Write a function findLongestWord that takes an array of strings as an argument and 
// returns the longest word in the array. 
// If there are multiple words with the same length, return the first one.//



function greeting() {
    // [1] Some code here
    sayHi();
    // [2] Some code here
  }
  function sayHi() {
    return "Hi!";
  }
  
  // Invoke the `greeting` function
  greeting();
  
  // [3] Some code here