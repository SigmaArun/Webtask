 //TASK 15 js 3 deliverable part 3 

console.log('person1: shows ticket');
console.log('person2: shows ticket');
 // i observe complete code is inside asyn()
 const preMovie=async()=>{
   const promiseWifeBringingTicks= new Promise((resolve,reject)=>{
       setTimeout(()=> resolve('tickets'),3000);
   });
  const getPopcorn= new Promise((resolve,reject)=> resolve(`popcorn`));
  const addButter= new Promise((resolve,reject)=> resolve(`butter`));
  const getColdDrinks= new Promise((resolve,reject)=> resolve(`drinks`));


 let ticket= await promiseWifeBringingTicks;
   let [popcorn,butter,drinks] =  await Promise.all([getPopcorn,addButter,getColdDrinks])

  console.log(`${popcorn},${butter},${drinks}`);

   return ticket;

 }

 preMovie().then((m)=> console.log(`person3: shows ${m}`));
 console.log('person4: shows ticket');
 console.log('person5: shows ticket');