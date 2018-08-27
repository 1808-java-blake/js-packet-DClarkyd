//Daniel Clark

// 1. Fibonaccis
// Define function: fib(n) 
// Return the nth number in the fibonacci sequence.
let fib = function fib(n) {

    if (n === 2) {
        return 1
    }
    else if (n === 1) {
        return 1
    }
    else {
        return fib(n - 2) + fib(n - 1)
    }
}

// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.

function bubbleSort(numArray) {
    if (numArray.length === 1) {
        return numArray
    }
    // console.log(numArray.length)
    for (let i = 0; i < numArray.length - 1; i++) {
        for (let k = 0; k < numArray.length -i- 1; k++) {
            if (numArray[k + 1] < numArray[k]) {
                let temporary = numArray[k]
                numArray[k] = numArray[k + 1]
                numArray[k + 1] = temporary

            }
        }
    }
    return numArray
}


// console.log(a[2])
// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.

function reverseStr(someStr) {
    let newString = ""
    for (let i = someStr.length; i > -1; i--) {
        newString += someStr.charAt(i)
    }
    return newString
}

// console.log(reverseStr("racefar"))

// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.

function factorial(sumNum) {
    if (sumNum === 1) {
        return 1
    }
    else {
        return sumNum * factorial(sumNum - 1)
    }
}

// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.
function substring(someStr, length, offset) {
    if (someStr === null || length === null || offset === null) {
        window.alert("incorrect input has been entered")
    }
    let newString = someStr.slice(offset, offset + length + 1)
    return newString
}


// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.

function isEven(someNum) {
    if (someNum === 0) {
        return true
    }
    else if (someNum === -1 || someNum === 1) {
        return false
    }
    else if (someNum > 0) {
        let newNum = someNum - 2;
        return (isEven(newNum))
    }
    else {
        let newNum = someNum + 2;
        return (isEven(newNum))
    }
}

// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false
function isPalindrome(someStr) {
    let newString = reverseStr(someStr)
    console.log(newString)
    console.log(someStr)

    if (newString === someStr) {
        return true
    }
    else {
        return false
    }
}

// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape. Assume this String contains just one character.
// Use a switch statement to determine which shape was passed in.
// Use the console.log function to print the desired shape.
// Example for printShape("Square", 3, "%");
// %%%
// %%%
// %%%
// Example for printShape("Triangle", 3, "$");
// $
// $$
// $$$
// Example for printShape("Diamond", 5, "*");
//   *
//  ***
// *****
//  ***
//   *
function printShape(shape, height, character) {
    if (shape === "square") {
        for (let i = 0; i < height; i++) {
            let newStr = ""
            for (let j = 0; j < height; j++) {
                newStr += character
            }
            console.log(newStr)
        }
    }
    else if (shape === "Diamond") {
        if (height === 1) {
            console.log(character)
        }
        else {
            for (let i = 0; i < (height / 2); i++) {
                let newStr = ""
                for (let k = height - i; k > 0; k--) {
                    newStr += " "
                }
                for (let k = 0; k < 2 * i + 1; k++) {
                    newStr += character
                }
                console.log(newStr)
            }
            //fix implentation of second triangle
            for (let i = (height / 2) -1; i > 0; i--) {
                let newStr = ""
                for (let k = height-i; k > 0; k--) {
                    newStr += " "
                }
                for (let k = 2*i ; k>0; k--) {
                    newStr += character
                }
                console.log(newStr)
            }
        }
    }
    else if (shape === "Triangle") {
        for (let i = 0; i < height; i++) {
            let newStr = ""
            for (let k = 0; k < i; k++) {
                newStr += character
            }
            console.log(newStr)
        }
    }
}
// printShape('Diamond',52, '@')


// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.
function traverseObject(someObj) {
    for(let value in someObj){
        console.log(someObj[value])
    }
}

// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.

function deleteElement(...someArr) {
    console.log(someArr.length)
    // let newArray = []
    delete someArr[2]
    // for(let i = 0; i < someArr.length; i ++){
    //     newArray[i] = someArr[i]

    //     console.log(newArray[i])
    // }
    console.log(someArr.length)
}


// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.

function spliceElement(...someArr) {
    console.log(someArr.length)
    someArr.splice(2, 1)
    console.log(someArr.length)
}

// spliceElement(1,2,3,4)

// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	var john = new Person("John", 30);

function Person(name, age) {
    this.name = name
    this.age = age
}

// var john = new Person("John", 30)

// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	var john = getPerson("John", 30);


function getPerson(name, age) {
  let Person = {
      name,
      age
  }
  console.log(Person)
}


// var john = getPerson("John", 30);
// console.log(john)
// console.log(john)

// -----------------------------------------------------------------------------------
// PART II

// Part II will focus on Javascript's ability to manipulate the DOM.
// Use the provided index.html
// Put your Javascript in the provided <script> element at the bottom of the page or in a separate .js file next to it.
// Please put the question itself as a comment above each answer.

// -----------------------------------------------------------------------------------

// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.
 function getUSA(){
document.getElementsByName("USA")
 }
// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.
function getPeopleInSales(){

}
// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>
function getAnchorChildren(){

}
// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.
function getHobbies(){

}
// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute.
function getHobbies(){

}
// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>

// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element

// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.

// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor

// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.

// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.

// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.

// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).


