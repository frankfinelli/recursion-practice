// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n, o = 1) {
  if (n < 0) return null;
  if (n === 0) return o; 

  o *= n;
  return factorial(n - 1, o);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array, out = 0) {
  if(array.length < 1) {
    return out
  }
  
  out += array[0]
  return sum(array.slice(1), out)

/*
//var sum = function(array, output=0){
  // base
  if (array.length === 0){
    return output;
  }
  // recursion
  
  output += array[0]; // output = 1
  
  return sum(array.slice(1), output);
  
}

console.log(sum([1, 2, 3]));*/

// what is the purpose of the default param?

/*

// sum([1, 2, 3]) // <== #1
        ^
 // if () // FALSE
 // RECURSION
   // output = 1
   // return sum([2, 3], 1)
   
     // sum([2, 3], 1) // <== #2
             ^
       // if () //
       // RECURSION
         // output = 3 
         // return sum([3], 3)
         
           // sum([3], 3) // <== #3
                   ^
             // if () // FALSE
             // RECURSION
              // output = 6
              // return sum([], 6)
              
                // sum([], 6)
                  // if (0 === 0)
                    // return 6


*/

};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  if (array.length === 0) return 0;

  return arraySum(array[0] + array.slice(1))
};


// 4. Check if a number is even.
var isEven = function(n) {
  n = Math.abs(n) // neg. integers
  if (n === 1) return false
  if (n === 0) return true

  return isEven(n - 2); //n / 2 can work mathematically, but with advanced js manipulation
};

console.log('isEven: ' + isEven(8), isEven(9), isEven(-90), isEven(-9), isEven(101), isEven(2048), isEven(24))

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n, o = 0) {
  if (n === 0) return o 
  
  if (n > 0) {
    o += n - 1
    return sumBelow(n - 1, o)
  }

  if (n < 0) {
    o += n + 1;
    return sumBelow(n + 1, o)
  }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, o = []) {
  //base
 /* if ((y === x)) {
    return [];
  } //can't see why I can't just return default out */

  if (Math.abs(y - x) <= 1) return o; //using absolute value to simplify 4 or 5 conditions
  
  
  if (y > x) {
    y--
    o.unshift(y)
    return range(x, y, o)
  } 
  if (x > y) {
    x--
    o.push(x)
    return range(x, y, o)
  }
};

console.log(range(3, 17));

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp, out = 1) {
  if (exp === 0) return out
  
  //exponent (4, 3) //64
  //4, -2 = 1/16 // -2 -> 1/-2*-1
  if (exp > 0) {
    out *= base;
    return exponent(base, exp - 1, out)
  } else if (exp < 0) {
    out /= base;
    return exponent(base, exp + 1, out) // div and add work here? really?
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1 || n === -1) return true;
  
  if (n <= 0 || n % 2 !== 0) return false;
  return powerOfTwo(n / 2);
};

console.log(powerOfTwo(64), powerOfTwo(14), powerOfTwo(99), powerOfTwo(-32), powerOfTwo(-2048), powerOfTwo(1024))

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string, o = []) {
  if (string.length === 0) return o.join('')

  o.push(string[string.length - 1])
  return reverse(string.slice(0, -1), o)
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  string = string.toLowerCase().replace(/\s/g, '')
  if (string.length <= 1) return true
  if (string[0] !== string[string.length - 1]) return false

  return palindrome(string.slice(1, -1))
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  
  //trying without abs value
  if (x === 0 || y === 0) return 0
  if (x > 0 && x < y) return x
  if (x < 0 && x > y) return x
  
  return modulo(x + y, y)
};

console.log(modulo(6, 25))

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function(x, y, o = 0) {
  if (x === 0 || y === 0) return 0
  if (x === 1) return y
  if (y === 1) return x
  
  if (y > 0) {
    return multiply(x, y - 1, o + x)

  } 
  
  if (y < 0) {
    return multiply(x, y + 1, o - x)
  }

};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
  if (x === 0 || y === 0) return NaN
  if (x === 1) return y
  if (y === 1) return x



};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x === 0) return y
  if (y === 0) return x

  return gcd(y, x % y)
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {

};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){return str.split('')
};

// 17. Reverse the order of an array
var reverseArr = function (array, o = []) {
  if (array.length === 0) return o
  
  o.push(array[array.length - 1])
  return reverseArr(array.slice(0, -1), o)  
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, o = []) {
  if (length === 0) return o

  o.push(value)
  return buildList(value, length - 1, o)
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, c = 0, x = 0) {
  if (array[x] === array[array.length]) return c

  if (array[x] === value) c++
  
  return countOccurrence(array, value, c, x + 1)
};

console.log('COUNT OCC: -- ' + countOccurrence([2,'banana',4,4,1,'banana'], 'banana'), countOccurrence(['',7,null,0,'0',false], null))

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, o = [], x = 0) {
  if (array.length === o.length) return o

  o.push(callback(array[x]))
  return rMap(array, callback, o, x + 1)
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key, c = 0, x = 0) {
  if (Object.keys(obj)[Object.keys(obj).length - 1] === Object.keys(obj)[x]) return c

  if (Object.keys(obj)[x] === key) c++
  return countKeysInObj(obj, key, c, x + 1)
};

console.log('COUNT KEYS: -- ' + countKeysInObj({'e':'y', 'i': 9, 'fire': null}, 'x'))

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value, c = 0, x = 0) {
  if (Object.keys(obj)[Object.keys(obj).length - 1] === Object.keys(obj)[x]) return c

  if (obj[Object.keys(obj)[x]] === value) c++
  return countValuesInObj(obj, value, c, x + 1)
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n, o = [0, 1]) {
  
  if (o.length === n) return o
  //if (o[o.length - 1] > n || n <= 0) return null

  o.push(o[o.length - 1] + o[o.length -2])
  return fibonacci(n, o)
};

console.log('WHOLE FIB: -- ' + fibonacci(4) + '; ' + fibonacci(10))

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n, x = 0) {
  /* GREAT IF I WANTED TO RETURN THE INDEX OF FIB AND NOT THE NUMBER
  default param: x = 0
  
  if (o[o.length - 1] === n) return x
  if (o[o.length - 1] > n || n <= 0) return null

  o.push(o[o.length - 1] + o[o.length -2])
  return nthFibo(n, o, x + 1) 
  

  */
  
  /* SECOND ATTEMPT - RECONSTRUCTING FROM fx-fibonacci TEMPLATE

  if (o[o.length - 1] === o[n]) return o[n]
  if (o[o.length - 1] > o[n] || o[n] <= 0) return null

  o.push(o[o.length - 1] + o[o.length -2])
  return nthFibo(n + 1, o) 

  */

  // A GOOD TEMPLATE TO UNDERSTAND THE CALL STACK IN PLAY WITH REFXs
  if (n <= 0) return 0;
  if (n === 1) return 1;

  return nthFibo(n - 1) + nthFibo(n - 2);
};

console.log('nTH FIB: -- ' + nthFibo(13) + ", " + nthFibo(6))

// 26. Given an array of words, return a new array containing each word capitalized.
var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, o = [], x = 0) {
  if (input.length === x) return o
  
  o.push(input[x].toUpperCase())
  return (capitalizeWords(input, o, x + 1))
};

console.log(capitalizeWords(words));
// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, o = [], x = 0) {
  if (x === array.length) return o

  if (x % 2 === 0) o.push(Math.abs(array[x]))
  if (x % 2 === 1) o.push(-(Math.abs(array[x])))

  return alternateSign(array, o, x + 1)
};

console.log(alternateSign([2,7,8,3,1,4]), alternateSign([-2,-7,8,3,-1,4]))
// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str, o = '') {
  if (!str) return o
    
  let numw = {0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'}
  
  if (numw.hasOwnProperty(str[0])) { //array of keys iteration? something along those lines, maybe not necessary
    o += numw[str[0]] //incorrect syntax but idea for accessing object keys
  } else { 
    o += str[0]
  }

  return numToText(str.slice(1), o)
};

console.log(numToText("I have 5 dogs and 6 ponies"))
// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------