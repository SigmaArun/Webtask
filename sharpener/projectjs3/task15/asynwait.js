
console.log('person1: shows ticket');
console.log('person2: shows ticket');
// creating a promise 

const promiseWifeBringingTicket= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket')
    },3000)
});
// when i get promise apply , .then 
/*
promiseWifeBringingTicket.then((t)=>{
    console.log(`person3: shows ${t}`)    // ${t} interpolate ticket like this 
})   */

 // now i want to make another promise on previous promise and return a promise
 const getPopcorn= promiseWifeBringingTicket.then((t)=>{
   // console.log(`person3: shows ${t}`)    
   console.log('husband: we should go in');
   console.log('Wife: no i am hungry');
   return new Promise((resolve,reject)=>resolve(`${t} popcorn`))  // here (resolve) is important  
})   
   // now i have to call on this getPopcorn promise 
 //getPopcorn.then((t)=> console.log(t));
 const getButter=getPopcorn.then((t)=>{
    // console.log(`person3: shows ${t}`)    
    console.log('husband: we should go in');
    console.log('Wife: i need butter on my popcorn');
    return new Promise((resolve,reject)=>resolve(`${t} butter`))  // here (resolve) is important  
 })   

  const getColdDrinks= getButter.then((t)=>{
    // console.log(`person3: shows ${t}`)    
    console.log('husband: we should go in');
    console.log('Wife: i need a cold drink');
    return new Promise((resolve,reject)=>resolve(`${t} cold drink`))  // here (resolve) is important  
 })   


 //getButter.then((t)=>console.log(t));
 getColdDrinks.then((t)=>console.log(t));
console.log('person4: shows ticket')
console.log('person5: shows ticket')