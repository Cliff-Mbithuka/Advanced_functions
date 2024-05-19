let fruit = {
    eatable: true,
    type: "apple"
};

let juice = {
    isLiquid: true,
    flavor: "apple",
    __proto__: fruit
};

console.log(juice.type);



//F.Prototypes
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.sayHello = function(){
//     console.log(`I'm ${this.name} and ${this.age} years old`);
// };

// const person1 = new Person("cliff", 20);
// const person2 = new Person("Nelly", 16);

// person1.sayHello();
// person2.sayHello();



//Native Prototypes
// let obj = {
//     0: "Hello",
//     1: "World",
//     length: 2
// };

// obj.join = Array.prototype.join;

// console.log(obj.join(' '));




//PROTOTYPAL METHOD
// function Dog(breed){
//     this.breed = breed;
// }

// Dog.prototype.bark = function() {
//     console.log("The " + this.breed + " is barking!");
// };

// const myDog = new Dog("German Shepherd");
// console.log(myDog.bark());
