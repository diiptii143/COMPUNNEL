// function findLongestWordLength(str) {
//     let words = str.split(' ');
//     let maxLength = 0;
  
//     for (let i = 0; i < words.length; i++) {
//       if (words[i].length > maxLength) {
//         maxLength = words[i].length;
//       }
//     }
//     return maxLength;
//   }


// function printOddEven(start,end){

//     for(i=start; i<=end; i++){
   
//          // let's divide the value by 2
//          // if the reminder is not a zero then it's an odd number
//          if(i % 2 != 0){
//              console.log("Number is odd" +" "+ i)
   
//          }
//          else{
//              console.log("Number is even" +" "+ i)
   
//          }
   
//        }
   
//    }
  


//    function findPrime(num) {
   
//     let numArray = [];
//     for (let i = 1; i <= num; i++) {
//       numArray.push(i);
//     }
  
//     //Remove non-prime     
//     numArray.map((number) => {
//       for (let i = 2; i < number; i++) {
//           if(number % i === 0) {
//               let index = numArray.indexOf(number);
//               return numArray.splice(index, 1);       
//           }
//       }   
//     });
  
//    return numArray;
  
//   } 



 
  
 

// function binarySearch(arr, low, high, val) {
//     if (high >= low) {

//         let mid = Math.floor((low + high) / 2)

//         if (arr[mid] == val)
//             return mid;

//         if (arr[mid] > val)
//             return binarySearch(arr, low, mid - 1, val);

//         return binarySearch(arr, mid + 1, high, val)
//     }
//     return -1;
// }

// let arr = [2, 3, 4, 10, 40];
// let val = 10
// ;
// console.log(binarySearch(arr, 0, arr.length - 1, val))