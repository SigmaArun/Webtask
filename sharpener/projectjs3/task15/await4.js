// task 15 js3 deliverable 4
const posts = [{ title: 'POST1' }, { title: 'POST2' }];

function printPost() {
   // posts.forEach((post) => {
      //  console.log(post.title);
   // });
   setTimeout(()=>{
    let output='';
    posts.forEach((post, index)=>{
        output +=`<li>${post.title}</li>`;
    });
    document.body.innerHTML=output;
},1000);
}

function create3rdPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ title: 'POST3' });
            resolve();
        }, 3000);
    });
}

function create4thPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ title: 'POST4' });
            resolve();
        }, 2000);
    });
}

async function deletePost() {
    await new Promise((resolve) => {
        setTimeout(() => {
            posts.pop();
            resolve();
        }, 1000);
    });
}


async function sequence() {
    try {
        await create3rdPost();
        await create3rdPost();   // i deliberatly called again to check delte 
        await deletePost();
        await create4thPost();
        printPost();
    } catch (error) {
        console.error(error);
    }
}


    sequence();
