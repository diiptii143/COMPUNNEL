let people = ["Ankur", "Zooav", "Elewiss", "Crossy"];
// for (let i = 0; i< people.length;  i++) {
//     console.log(people[i]);

// }
 
// // command to remove "Ankur" from the array.
//  people.shift();
//  console.log(people)
 
// //  command to remove "Crossy" from the array.
//  people.pop();
//  console.log(people)

  
// //  command to add "Matt" to the front of the array
// people.unshift("Matt" )

// // // after Insertin
// console.log(people)

// // command to add your name to the end of the array.
// people.push('Dipti');

// after insertion
// console.log(people);


// Using a loop, iterate through this array and after
//  console.log-ing "Zooav", exit from the loop.

 
// for ( let i = 0; i< people.length;  i++) {
//     console.log(people[i]);
//     if(people[i] == "Zooav" ){
//         break;
//     }

// }


//or we can delete by index

// for(let i =0; i< people.length; i++){
//     if(i > 1){
//         break;
//     }
//     console.log(people[i]);
// }



// Write the command to make a copy of the array using slice.
//  The copy should NOT include "Zooav" or "Matt"


// console.log(people);
// let peopleCopy = people.slice(1)
// console.log(peopleCopy);




// gives the indexOf where "Zooav" is located.

 
// console.log(people.indexOf("Zooav"));

// Write the command that gives the indexOf where "Foo" is located.

// console.log(people.indexOf("foo"));



// Redefine the people variable with the value you started with

//  people = ["Ankur", "Zooav", "Elewiss", "Crossy"];
// people.splice(2,1,"Elizabeth", "Artie");
// console.log(people)



// Create a new variable called withBob and set it equal to the people array

// let withBob = people.concat("Bob");
// console.log(withBob);
 


// sort the following array of objects by title value in descending order.

// var library = [ 
//     { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
//     { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
//     { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
//     ];
 
//  function sortTitle(a,b) 
//   {
//    if (a.title < b.title)
//      return -1;
//    if (a.title > b.title)
//      return 1;
//    return 0;
//   }
 
//  console.log(library.sort(sortTitle));



// clears array from all unnecessary elements, like false, undefined, empty strings

// let arr = [27,"" , 0, "rrr", "we", false,56,76, true,21,true, NaN, 12,null, "hi", undefined ];
//  function filterArray(arr) {
//     // Create a new array
//     let output = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i]) {
//         output.push(arr[i]);
//       }
//     }
//     return output;
//   }
//  console.log(filterArray(arr));


// Write a method that returns an array without listed values 

// let values = [2, 3, 5,7]

// let arr = [1, 2, 3,7, 4, 5, 3,7,9,1]

// arr = arr.filter(item => !values.includes(item))
 
// console.log(arr);


// Write a method that returns a duplicate-free array 


// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function size(arr, determinedSize) {
//     const res = [];
//     for (let i = 0; i < arr.length; i += determinedSize) {
//         const chunk = arr.slice(i, i + determinedSize);
//         res.push(chunk);
//     }
//       return res;
// }
//  console.log(size(arr, 3));


// Write a method that returns a duplicate-free array


// program to remove duplicate value from an array

// function removeDuplicate(arr){
    
//     let uniqueArr = [];
    
//     // loop through array
//     for(let i of arr) {
//         if(uniqueArr.indexOf(i) === -1) {
//             uniqueArr.push(i);
//         }
//     }
//     return uniqueArr;
// }
// const array = [1, 2, 3, 2, 3,4,6,4,7,6,9,11];
// console.log(removeDuplicate(array));



 
// function removeDuplicate(array) {
//     return array.filter((element, index) => array.indexOf(element) === index);
//   }

// const array = [1, 2, 3, 2, 3,4,6,4,7,6,9,11];  
// console.log(removeDuplicate(array)); 