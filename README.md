# silver-hasher

Implementation of most used functions and data structures.


## Getting Started 
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Make sure you have installed NodeJS v >= 7.3.0.


## Installing
 
To install run:

    npm install silver-hasher --save 


## Running the tests 

    npm run test
    
## Build 

    npm run build    


# Functions 

* [isPrime](#isprime)
* [Factorial](#factorial)
* [Fibonacci](#fibonacci)
* [isSorted](#issorted)
* [Filter](#filter)
* [Reduce](#reduce)
* [Reverse](#reverse)
* [IndexOf](#indexof)
* [IsPalindrome](#ispalindrome)
* [Missing](#missing)
* [IsBalanced](#isbalanced)
* [Permute](#permute)
* [Debounce](#debounce)
* [Intersection](#intersection)
* [Uniq](#uniq)

### isPrime

`isPrime` - Returns `true` or `false`, indicating whether the given number is prime.

    isPrime(0)                          // false
    isPrime(1)                          // false
    isPrime(17)                         // true
    isPrime(10000000000000)             // false

### Factorial 

`factorial` - Returns a number that is the factorial of the given number.    


    factorial(0)                        // 1
    factorial(1)                        // 1
    factorial(6)                        // 720

### Fibonacci

`fib` - Returns the nth [Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number).

    fib(0)                              // 0
    fib(1)                              // 1
    fib(10)                             // 55
    fib(20)                             // 6765

### isSorted 

`isSorted` - Returns `true` or `false`, indicating whether the given array of numbers is sorted.

    isSorted([])                        // true
    isSorted([-Infinity, -5, 0, 3, 9])  // true
    isSorted([3, 9, -3, 10])            // false


### Filter 

`filter` - Implementation of the [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Filter) function.

    filter([1, 2, 3, 4], n => n < 3)    // [1, 2]


### Reduce

`reduce` - Implementation of the [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) function

    reduce([1, 2, 3, 4], (a, b) => a + b, 0) // 10
    
### Reverse 

`reverse` - Reverses the given string.

    reverse('')                         // ''
    reverse('abcdef')                   // 'fedcba'
    
    
### IndexOf

`indexOf` - Implementation of the [indexOf](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) function for arrays.

    indexOf([1, 2, 3], 1)               // 0
    indexOf([1, 2, 3], 4)               // -1
    

### IsPalindrome

`isPalindrome` - Return `true` or `false` indicating whether the given string is a palindrome (case and space insensitive).

    isPalindrome('')                                // true
    isPalindrome('abcdcba')                         // true
    isPalindrome('abcd')                            // false
    isPalindrome('A man a plan a canal Panama')     // true
    
### Missing 

`missing` - Takes an unsorted array of unique numbers from 1 through some number n, and returns the missing number in the sequence.

    missing([])                         // undefined
    missing([1, 4, 3])                  // 2
    missing([2, 3, 4])                  // 1
    missing([5, 1, 4, 2])               // 3
    missing([1, 2, 3, 4])               // undefined

### IsBalanced 

`isBalanced` - Takes a string and returns `true` or `false` indicating whether its curly braces are balanced.

    isBalanced('}{')                      // false
    isBalanced('{{}')                     // false
    isBalanced('{}{}')                    // true
    isBalanced('foo { bar { baz } boo }') // true
    isBalanced('foo { bar { baz }')       // false
    isBalanced('foo { bar } }')           // false
    
### Permute

`permute` - Return an array of strings, containing every permutation of the given string.

    permute('')             // []
    permute('abc')          // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
    

### Debounce 

`debounce` - Implementation of the [debounce](https://lodash.com/docs/4.17.4#debounce) function

    let a = () => console.log('foo')
    let b = debounce(a, 100)
    b()
    b()
    b() // only this call should invoke a()
    
### Intersection 

`intersection` - Return the intersection of two arrays.

    intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])    // [4, 1]
    intersection([1, 5, 4, 2], [7, 12])             // []
    
### Uniq 

`uniq` - Takes an array of numbers, and returns the unique numbers.

    uniq([])                              // []
    uniq([1, 4, 2, 2, 3, 4, 8])           // [1, 4, 2, 3, 8]
    

# Data Structures

* [LinkedList](#linkedlist)

### LinkedList

    let list = new LinkedList()
    list.add(4)                           // undefined
    list.add(5)                           // undefined
    list.remove(1)                        // 4
    list.size(6)                          // 1


# @Decorators

* [Debounced](#debounced)

### Debounced

    Example:
    
          class ExampleApp {
    
              constructor () {
                  document.addEventListener('mousemove', this.example)
              }
    
              @Debounced(500)
              public example() {
                  console.log('hello')
              }
          } 
