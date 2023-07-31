//Data 
const inventory = [
  {
      id:1,
      title: 'Eloquent JavaScript: A Modern Introduction to Programming',
      author: 'Marjin Haverbeke',
      price: 10.00,
      reviews: [{userID: 1, content:'Good book, but not great for new coders'}],
      inventory: 10,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
      
  },
  {
      id:2,
      title: 'JavaScript & JQuery: Interactive Front-End Web Development',
      author: 'Jon Duckett',
      price: 45.75,
      reviews: [{userID: 15, content:'good way to learn JQuery'}],
      inventory: 2,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
  },
  {
      id:3,
      title: 'JavaScript: The Good Parts',
      author: 'Douglas Crockford',
      price: 36.00,
      reviews: [{userID: 25, content:'I disagree with everything in this book'}, {userID: 250, content:'Only JS book anyone needs'}],
      inventory: 8,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
  },
  {
      id:4,
      title: 'JavaScript: The Definitive Guide',
      author: 'David Flanagan',
      price: 25.50,
      reviews: [{userID: 44, content:'Great intro to js book'}, {userID: 350, content:'It really is the Definitive guide'}],
      inventory: 0,
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
      
  },
  {
      id:5,
      title: 'You Don’t Know JS',
      author: 'Kyle Simpson',
      price: 6.00,
      reviews: [{userID: 76, content:'You can find this for free online, no need to pay for it!'}],
      inventory: 7,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
  }, 
  {
      id:6,
      title: 'Learn Enough JavaScript to Be Dangerous',
      author: 'Michael Hartl',
      price: 24.00,
      reviews: [{userID: 50, content:'pretty good'}],
      inventory: 5,
      imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQyf6xSyTHc7a8mx17ikh6GeTohc88Hn0UgkN-RNF-h4iOwVlkW'

  },
  {
      id:7,
      title: 'Cracking the Coding Interview',
      author: 'Gayle Laakmann McDowell',
      price: 49.95,
      reviews: [{userID: 99, content:'One of the most helpful books for taking on the tech interview'}, {userID:20, content: 'Great but I just wish it was in JavaScript instead of Java' }],
      inventory: 20,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'

  }
]

// Pre Work Questions?


// Function Declaration!

function firstFunction () {
    console.log("We are in a function")
}

firstFunction()

function secondFunction (data){
    console.log(data)
}


// Now lets call the function

// Lets make a function with a parameter

function addNumbers(num1, num2){
    return num1+num2
}

const nums= addNumbers(7, 90)

console.log(nums)

// Using the data above what sort of function can we create?

// Anonomous Functions? Another way to write functions!

console.log(
    function(){
        return "Anonymous"
    }()
)

// Whats the difference? It comes down to where it is called


// Arrow Functions

const arrowFunc = ()=>{
    console.log("hello arrow")
}

arrowFunc()

// Arrow functions vs regular functions vs anonomous functions????

    // Arrow functions are treated like variables and need to be defined before they are defined
    // the benefit is that it doesn't use as much memory for the computer
    // stylistic thing for most parts
// Lets refactor the regular function above to be an arrow function!

// Now you try it!

// Scoping
    // anything defined outside of a function is on a global scope
    // that means you have access to it anywhere
    // for memory use best to define in the most narrow scope possible
// Global Scope
// Function Scope
    // move things from a function scope to global scope by returning it and then setting a var = to it
// Block Scope (If, else, for, while)

const ifStatement = true

if(ifStatement && 1===0){
    console.log("We're in IF!")
}else if (false){
    console.log("were in ELSEIF")
}
else{
    console.log("We're in ELSE!")
}

if(ifStatement || 1===0){
    console.log("We're in IF!")
}else{
    console.log("We're in ELSE!")
}


//whileif

let condition = 10
while(condition > 0){
    console.log (condition)
    condition -= 1
}


//for loop

for(let i=0; i<10; i++){
    console.log(`count up with a for loop up to ${i}`)
}

//can use this to loop through arrays

const exampleArray =["string", 2, 5, true]

inventory.map(exampleArray)

//objects
// 2 ways to access, dot notation or bracket notation 
// using brackets tells JS to interpret whats in the brackets, dot only if you know exactly what you're looking for


// Callback Functions, calling a function in a function

function outerFunction(innerFunction){
    console.log("outer function")
    innerFunction()}
