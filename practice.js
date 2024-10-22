// callback

// let arr=[1,2,3,4,5];
// // arr.forEach(function printval(val) {//value at each index
// //     console.log(val);
    
// // })
// // arrow function
// arr.forEach((val)=>{
//     console.log(val);
    
// })
// //for uppercase
// console.log(val.toUpperCase());
// let arr=["pune","mumbai","hyderabad","bangalore"];
// arr.forEach((val,idx,arr)=>{
//     console.log(val.toUpperCase(),idx,arr);
    
// })
// let nums=[2,3,4,5,6];
// let calcsquare=(num)=>{
//     console.log(num*num);
// }
// nums.forEach(calcsquare);
// let arr=[1,2,3,4,5];
// let evenArr=arr.filter((val)=>{
//     return val%2===0;
// })
// console.log(evenArr);
let arr=[1,2,3];
arr.reduce((res,cur)=>{
    return res+cur;
});
console.log(arr);
