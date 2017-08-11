/* The four rules for 'this';
* in your own words. explain the four rules for the "this" keyword below.
* 1. When THIS is not explicitly defined of the variable you are working then THIS will take on global properties.
* 2. When THIS is called before the dot and is within a function, THIS will look outside the function to what it's assigned to.
* 3. When using a constructor function - THIS refers to the specific instance of the object being created by the constructor function
* 4. When apply and call method is used it is another way to call THIS
* write out a code example of each explanation above
*/
/*
// First Rule
const computer = {
  cpu: 'i7 3770k',
  gpu: 'GTX 970',
  internal: function () {
    console.log(`MY CPU is ${computer.cpu}`, this);
  },
};
computer.internal()

// Second Rule

console.log('\n\n\n')
const me = {
  greeting: 'Hello, my name is ',
  name: 'Ryan',
  introduce: function() {
    console.log(`${this.greeting} ${this.name}`);
    console.log(this);
  },
};
me.introduce()

const passwordRetrieve = {
  userName: 'rolandc5',
  password: '123456',
  retrieve: function() {
    console.log(`${this.password}`);
    console.log(this);
  },
};
  passwordRetrieve.retrieve()

// Third Rule

function Person (option) {
  this.firstName = options.firstName;
  this.lastName = options.lastName;
  this.greet = function () {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);

  };
};

const ryan = new Person[{firstName: 'Ryan', lastName: 'Hamblin'}];
const sean = new Person[{firstName: 'Sean', lastName: 'Chen'}];



function Robot (specs) {
  this.processor = specs.processor;
  this.quantumMotor = specs.quantumMotor;
  this.bootMessage = function () {
    console.log(`Your new robot has ${this.processor} and ${this.quantumMotor}, ENJOY!`);
  };
};
const robot = new Robot({processor: 'Quantum Entanglement Demension 5 processor', quantumMotor: 'Series 7 Motor'});

// Fourth Rule * you may want to use your third rule's example to accomplish this
class Robot {
  constructor(specs) {
    this.processor = specs.processor;
    this.quantumMotor = specs.quantumMotor;
  };
  bootMessage() {
    console.log(`Your new robot has ${this.processor} and ${this.quantumMotor}, ENJOY!`);
  };
};

const robot = new Robot({processor: 'Quantum Entanglement Demension 5 processor', quantumMotor: 'Series 7 Motor'});
robot.bootMessage();
*/
// explain closure
/*
function foo () {
  console.log(this); // what does this point to?
};

THIS is hitting the global object.
*/

/*
const counterFunction = () => {
  // this code is broken. figure out why, and tell us where the closure is when you fix it
  let count = 0;
  const changeCount = (value) => {
    count += value;
  };
  return {
    increment: () => {
      changeCount(1);
    },
    decrement: () => {
      changeCount(-1);
    },
    total: () => {
      return count;
    }
  }
};
const counter = counterFunction();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.total());

//closure is count
*/



// create a constructor function called "Car"
  // car takes an options object as its only argument
  // your options object should have "make", "model", "year" properties on it
  // assign these properties you pass in with options to the constructors 'this' object.
  // add a speak() method to your object that when called will log out the car's make model and year.

/*
class Car {
  constructor(options) {
    this.make = options.make;
    this.model = options.model;
    this.year = options.year;
  };
  speak() {
    console.log(`This car's make ${this.make}, model ${this.model}, and year ${this.year}`);
  };
};
const car = new Car({make: 'Tesla', model: 'Model S', year: '2017'});
car.speak();
*/

// when you're done un comment the next few lines and run the file here in node `node app.js`.

// const herby = new Car({make: 'Volkswagen', model: 'Beetle', year: '1963'});
// console.log(herby.speak());
// const goldfinger = new Car({make: 'Aston Martin', model: 'DB5', year: '1964'});
// console.log(goldfinger.speak());


// once you get done with this, redo it all using the class keyword and a constructor function.

// extra credit

// we didn't touch on Recursion in the lecture yet, but you're going to build a recursive function now

/*
let n = 10;
while(n >= 1) {
  console.log(n);
  n--;
}

// write a function called countDown that does the exact same thing as above, but calls itself until it can't anymore.
  // hint-> your base case will look like the logic in the while loop.
*/
