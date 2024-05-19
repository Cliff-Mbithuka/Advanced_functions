// function myDecorator(func) {
//     return function() {
//         console.log("Happiness before code is called");
//         const result = func.apply(this, arguments);
//         console.log("Happiness after the code is called");
//         return result;
//     };
// }

// function sayHello() {
//     console.log("Hello this is Cliff");
//     return "Returned from sayHello";
// }

// sayHello = myDecorator(sayHello);

// console.log(sayHello());




//using func.call
// function sayHey() {
//   console.log(this.name);
// }

// let user = { name: "Cliff" };
// let admin = { name: "Admin" };

// //use call to pass different objects 
// sayHey.call(user);
// sayHey.call(admin);



//using func.apply
const person = {
    fullName: function(city, country){
        return this.firstName + " " + this.lastName + " " + city + "," + country;
    }
}

const Person1 = {
    firstName: "James",
    lastName: "Njuguna"
};

console.log(person.fullName.apply(Person1, ["kisumu", "Kenya"]));