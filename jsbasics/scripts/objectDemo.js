// // / Functions to create object (Employee) Factory and Constructor
// // factory

// function createEmployee(firstName, lastName, salary) {
//     return {
//       firstName: firstName,
//       lastName: lastName,
//       salary: salary,
// 	   employeeDetails(){
// 		  return firstName + ' ' + lastName + ' ' + salary ;
// 	  }
//     }
//   }





//   //Constructor

//  function Employee(firstName, lastName,age, salary) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age =  age;
//     this.salary = salary;
//   }
 
// const emp1 = new Employee("John", "Doe",26, 5000 );
// const emp2 = new Employee("John1", "Doe1",34, 8000 );
// const emp3 = new Employee("John2", "Doe2",44, 9000 );
 

// const salaries = [emp1.salary, emp2.salary,emp3.salary];

// const average = salaries.reduce((total, amount, index, array) => {
//   total += amount;
//   if( index === array.length-1) { 
//     return total/array.length;
//   }else { 
//     return total;
//   }
// });
// console.log(average)

// // maximum salary
// maximumSalary= Math.max.apply( null,salaries);
 


// //   Function to draw a circle, get its area and perimeter

// function circle(radius)
// {
//     this.radius = radius;
  
//     this.area = function () 
//     {
//         return Math.PI * this.radius * this.radius;
//     };
//   // perimeter method
//     this.perimeter = function ()
//     {
//         return 2*Math.PI*this.radius;
//     };
// }
// var a = new circle(6);
// console.log('Area =', a.area());
// console.log('perimeter =', a.perimeter());



// const student = {
//   name: 'dipti'
// };

// student.hasOwnProperty('name');     // => true
// student.hasOwnProperty('realName'); // => false


function closureSampleDpt(x){
  
  return function add(y){
     return x + y;
 }

// return x ;

}
var dptCls2= closureSampleDpt(-1);  
var dptCls = closureSampleDpt(1);
// console.log(dptCls+5);





