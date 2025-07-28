// Copying In Javascript 

// When we assign one variable to another, In primitive types , we are copying the actual value but in reference types , we are copying the referece(address in the memory) of the value(not the actual value).

// Example (For Primitive types : number, string, boolean, null and undefined)

// let a = 20;
// let b = a ;  //( copied the value of 'a' not the address of the 'a')
// console.log(a);
// console.log(b);

// b = 40;  //(when you change the value of 'b')

// console.log(a); //( 'a' value still the same i.e., 20)
// console.log(b); 

// a value remains the same ( b)


// Example (For reference types: Array and Objects)

// let obj1 = {
//     firstName : 'Saikrishna',
//     lastName : 'Marri',
//     age :24
// }

// let obj2 = obj1 ; //( Copied the address of the 'obj1' not the actual value of the 'obj1')

// console.log(obj1);
// console.log(obj2);

// obj2.age = 28; // (we just changed the value of age in 'obj2')

// console.log(obj2); 
// console.log(obj1); // (Surprisingly value in the obj1 is also got changed, This happened because in reference types, we copy the value by reference, not the actual value.

// Now let's understand what is shallowcopy 

// Shallow Copy : Shallow copy duplicates only the first level of an Array / Object, if the original contains the nested objects, those nested parts are still referenced not copied. 
// The most common methods to do shallow copy are using Object.assign() and spreadOperator(...)


// Example : 

// const user = {
//     firstName : "Saikrishna",
//     lastName : 'Marri',
//     age : 25
// }

//const shallowcopy = {...user} // Creating a shallowcopy using spread operator

// console.log(user);
// console.log(shallowcopy); // now a separate copy of user is created


// shallowcopy.age = 28;

// console.log(shallowcopy);
// console.log(user); // see there is not change in user object


// But what if the user object contains another object inside it (i.e., nested objects)?


// let user = {
//     firstName : 'Saikrishna',
//     lastName : 'Marri',
//     age: 25,
//     address : {
//         city  :'Hyderabad',
//         pin : 500089   
//     }
// }


// const shallowcopy = { ...user };

// console.log(shallowcopy);
//console.log(user);


//shallowcopy.address.city = "Mumbai";

//console.log(shallowcopy);
//console.log(user) // See, if you observe that value of the city got changed in original object(user) even thought we made a separate copy of the original object, This is happend because in the shallow copy nested objects are still referenced not copied.)

// To overcome this issue we have to do the deepcopy
// Now let's understand what is mean by DeepCopy
// DeepCopy : A deep copy duplicates everything - inluding nested objects and arrays, Changes in the copied object do not affect the original object.

// We can do the deep copy in 4 ways in javascript
// 1. Js native `structuredClone()` method, It's introduced in ES12, Publicly available in most browsers from 2021 onwwards..
// 2. Using `JSON.parse(JSON.stringify(obj))` - but it has some limitations
// 3. using third party library i.e., `lodash.cloneDeep()`
// 4. Writing a custom deep clone function.

// Example1 : structuredClone() ES12

// let user = {
//     firstName : 'Saikrishna',
//     lastName : 'Marri',
//     age: 25,
//     address : {
//         city  :'Hyderabad',
//         pin : 500089   
//     }
// }

// let deepcopy = structuredClone(user);

//console.log(deepcopy);
//console.log(user);

//deepcopy.address.city = "mumbai";

//console.log(deepcopy);
//console.log(user) // if you observe here, value in the deepcopy changed, not affecting anything to the original object i.e., user object.


// Example2 : JSON.parse(JSON.stringify()) - This is method is commonly used and has some limitations.

// let user = {
//     firstName : "Saikrishna",
//     lastName : "Marri",
//     address : {
//         city: "Hyderabad",
//         PIN : 409038
//     },
//    greet(){
//        console.log("Say Hello..!")
//    }, // JSON will skip this
//    age: undefined, // JSON will skip this 
//    date: new Date() // typeof date will change to 'string' (but won't skip)
// }

// let deepcopy = JSON.parse(JSON.stringify(user));

// console.log(deepcopy)
// In this JSON.parse(JSON.stringify(user)) approach, functions and undefined's are skipped.. This is one limitation in this approach.

// Example3 : lodash
// Install if not already installed  (npm install lodash)
// Import cloneDeep from 'lodash/cloneDeep'

// let user = {
//     firstName : 'Saikrishna',
//     lastName : 'Marri',
//     date: new Date(),
//     greet(){
//         console.log('Say Hello...!')
//     },
//     age: undefined,
//     address: {
//         city: 'Hyderabad',
//         PIN : 345689
//     }
// }

// let deep = cloneDeep(user);

// deep.address.city = "Mumbai"

// console.log(deep);
// console.log(user.address.city) // Hyderabad (Origial object value won't change and it won't skip the undefined and funtions)


// Example4 : Writing our own deepClone Function.

// function customDeepClone(obj){

//     if(obj === null || typeof obj !== 'object') return obj;

//     if(Array.isArray(obj)){
//         return obj.map(customDeepClone)
//     }

//     const copy ={}

//     for( let key in obj){
//         copy[key] = customDeepClone(obj[key])
//     }

//     return copy
// }

// customDeepClone([1,[2,4],[5,[6,7]]]);
// customDeepClone({name:"sai",age:'24', address:{city:"Hyderabad", PIN: '546736'} });


/*
Limitations Summary:

1. JSON.parse(JSON.stringify(obj))
   - Skips functions
   - Skips undefined
   - Converts Date to string
   - Fails on circular references

2. structuredClone()
   - Fails on functions, DOM elements, class instances
   - Handles Date, undefined, and circular refs 

3. lodash.cloneDeep()
   - Handles most edge cases including functions, Date, undefined

4. Custom deepClone()
   - Works well but doesn't handle Date, Map, Set, or circular refs
*/