//How to get flags
// let Product = {
//     Title: "pen",
//     Price: 100,
//     inStock: true
// }

// console.log(Object.getOwnPropertyDescriptor(Product, "Price"));



//to change flags
// let Product = {
//     Title: "pen",
//     Price: 100,
//     inStock: true
// }

// Object.defineProperty(Product, "price", {
//     writable: false
// })

// console.log(Object.getOwnPropertyDescriptor(Product, "Price"));



//Non - Enumerable
// let Product = {
//         Title: "pen",
//         Price: 100,
//         inStock: true
//     }

//     Object.defineProperty(Product, "inStock", {
//         enumerable: false
//     })

//     for(let p in Product){
//         console.log(p);
//     }



//non - configurable
let user = { name: "Cliff" };

Object.defineProperty(user, "name", {
    configurable: false
});

user.name = "Mbithuka"; //works
delete user.name; //error