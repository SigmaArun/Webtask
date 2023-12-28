const posts=[
    {title: 'post one', body: 'this is post one'},
    {title: 'post two', body: 'this is post two'},
];

function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post, index)=>{
            output +=`<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    },1000);
}
let latestActivityTime = null;
const timestamps = [];

 function createPost(post){
   const promiseFirst=  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            timestamps.push(new Date().toLocaleString());
            const error= false;
            if(!error){
                resolve();
            }else{
                reject('Error : Something went wrong');
            }
        },2000);
    });
    latestActivityTime = new Date().toLocaleString();
    return promiseFirst;
 }
 const promise1 = createPost({ title: 'post three', body: 'this is post three' });
 const promise2 = new Promise((resolve, reject) => {
   
    setTimeout(() => {
     
      latestActivityTime = new Date().toLocaleString();
      resolve('Latest activity time updated');
    }, 3000); 
  
  });
  Promise.all([
    promise1,
    promise2,
    createPost({ title: 'post four', body: 'this is post four' }) 
  ])
    .then((values) => {
      console.log(values);
      const latestPost = posts[posts.length - 1];
      const latestPostIndex = posts.length - 1;
      console.log('Previous Post Time:', timestamps[latestPostIndex - 1]);
      console.log('Before creating post four - Latest Activity Time:', latestActivityTime);
      console.log('After creating post four - Latest Activity Time:', latestActivityTime);

      console.log(latestPost.title +'  : '+'Latest Activity Time:', latestActivityTime); 
      getPosts();
    })
    .catch((error) => {
      console.error(error);
    });
  

 //createPost({title: 'post three', body: 'this is post three'}).then(getPosts).catch((error)=>{console.log(error)});
 // promise.all 
 //const promise1=Promise.resolve('hi there');
 //const promise2=10;
 //const promise3= new Promise((resolve,reject)=>
 //setTimeout(resolve,2000,'goodbye'));
 //Promise.all([promiseFirst,promise1,promise2,promise3]).then(values=>console.log(values))

