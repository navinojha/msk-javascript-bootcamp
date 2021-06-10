/* 

1) Object.values() :

we can access the values of an object by looping through the keys and then dynamically accessing the keys. 
This works if you need to access both the keys and the values. However, if you only need to access the values,
then you can use Object.values() which returns an array of the values: 
*/

const user = {
    id: 1,
    name: "Navin Ojha",
    age: 22
};

const values = Object.values(user);
console.log(values); // [1, "Navin ojha", 22]

/* 

2) Object.entries() :

   The Object.entries() method returns an array of arrays representing every key/value pair. Let's visualize it: */

const user = {
    id: 1,
    name: "Navin Ojha",
    age: 22
};

const entries = Object.entries(user);

//The entries variable will return the following array of arrays:

[
    ["id", 1],
    ["name", "Navin ojha"],
    ["age", 22]
]

// This is especially useful in combination with for..in and array destructuring.

