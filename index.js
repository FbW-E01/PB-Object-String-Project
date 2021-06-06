/* 1. Write a JavaScript function to truncate a string to a certain number of words. */

// write your code here 

console.log(truncate("The quick brown fox jumps over the lazy dog", 4)); // "The quick brown fox"


/* 2. Write a JavaScript function to alphabetize a given string. */

// write your code here 

console.log(alphabetize_string("United States"));
//"SUadeeinsttt"

/* 3. Write a JavaScript function to convert ASCII to Hexadecimal format.
 */

 // write your code here 

console.log(ascii_to_hexa("12")); //3132
console.log(ascii_to_hexa("100")); //313030

/* 4. Write a JavaScript function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.r
 */

 // write your code here 

console.log(humanize(1)); //"1st"
console.log(humanize(20)); //"20th"
console.log(humanize(302)); //"302nd"


/* 5. Write a JavaScript function to get the successor of a string. */

// write your code here 

console.log(successor("abcd")); // "abce"
console.log(successor("THX1138")); // "THX1139"
console.log(successor("< >")); // "< >"
console.log(successor("1999zzz")); // "2000aaa"
console.log(successor("ZZZ9999")); // "AAAA0000"

/* 6. Write a JavaScript function to sort the following array of objects by title value. */

// write your code here 

let library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  },
];


/* 7. Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds. */

// write your code here 


console.log(num_string_range("a", "z", 2));
// ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]


/* 8. Write a JavaScript program to create a Clock.
   `Note`: The output will come every second. */

   // write your code here 


  let clock = new my_Clock();
   clock.run();
// "14:37:42";
// "14:37:43";
// "14:37:44";
// "14:37:45";
// "14:37:46";
// "14:37:47";

/* 9. Write a JavaScript function to print all the methods in an JavaScript object.
 */

 // write your code here 


console.log(all_properties(Array));
// ["isArray", "from", "of"]
console.log(all_properties(Math));
// ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc"]


/* 10. Write a JavaScript function to print all the properties in an JavaScript object. */


// write your code here 


console.log(all_properties(Math));
// ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"]
console.log(all_properties(Array));
// ["length", "name", "prototype", "isArray", "from", "of"]

