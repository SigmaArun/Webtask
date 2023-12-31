  // axios globals
   axios.defaults.headers.common['X-Auth-Token']=
   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.'+
   'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.'+
   'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

    // GET REQUEST
     // i have to complete all the functions 
 function getTodos() {
   // console.log('GET Request');
   /* axios({
      method :'get',
      url : 'https://jsonplaceholder.typicode.com/todos',
      params :{
        _limit:5
      }
    })
    //.then(res=> console.log(res))
    //.catch(err=> console.error(err))
    // instead of console i want show method to get data on web page showoutput() is desingned in that way
    .then(res=>showOutput(res))
    .catch(err=> console.error(err))   */
    // shorter syntax
    axios
    .get('https://jsonplaceholder.typicode.com/todos?_limit=5',{timeout:3000})
    .then(res=>showOutput(res))
    //.then(err=>console.error(err))         // error was on console undefined here catch will come 
    .catch(err=>console.error(err))
  }
  
  // POST REQUEST
  function addTodo() {
    //console.log('POST Request');
    /*  axios({
      method :'post',                 // important to use this line method should be post here   id 201
      url : 'https://jsonplaceholder.typicode.com/todos',
      data :{
          title:'New Todo',
          completed: false
      }
    })   */

    axios
     .post('https://jsonplaceholder.typicode.com/todos',{title:'New Todo',completed:false})
    
    .then(res=>showOutput(res))
    .catch(err=> console.error(err))   
  }
  
  // PUT/PATCH REQUEST         
  function updateTodo() {
   // console.log('PUT/PATCH Request');
   /*
   axios
   .put('https://jsonplaceholder.typicode.com/todos/1',{title:'Updated Todo',completed:true})
  
  .then(res=>showOutput(res))
  .catch(err=> console.error(err))   
  }   */
  axios
  .patch('https://jsonplaceholder.typicode.com/todos/1',{title:'Updated Todo',completed:true})
 
 .then(res=>showOutput(res))
 .catch(err=> console.error(err))   
 }
  
  // DELETE REQUEST
  function removeTodo() {
   // console.log('DELETE Request');
   axios
   .delete('https://jsonplaceholder.typicode.com/todos/1')
  
  .then(res=>showOutput(res))
  .catch(err=> console.error(err))   

  }
  
  // SIMULTANEOUS DATA
  function getData() {
    //console.log('Simultaneous Request');  // we want to get posts and todos at same time 
    axios.all([
         axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
         axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
        ])
        /*
        .then(res=>{
          console.log(res[0]);
          console.log(res[1]);
          showOutput(res[1]);
        })   */
        .then(axios.spread((todos,posts)=>showOutput(posts)))
        .catch(err=>console.error(err))

  }
  
  // CUSTOM HEADERS
  function customHeaders() {
   // step2 adding config object and headers object inside config
    const config={
      headers :{
        'Content-Type':'application/json',
        Authorization: 'sometoken'
      }
    }

    // step 1 adding post request
    axios
    .post('https://jsonplaceholder.typicode.com/todos',     // url data and config
    {title:'New Todo',completed:false},config)      // passing third parameter config
   
   .then(res=>showOutput(res))
   .catch(err=> console.error(err))   
  }
  
  // TRANSFORMING REQUESTS & RESPONSES
  function transformResponse() {
   const options={
    method:'post',
    url : 'https://jsonplaceholder.typicode.com/todos',
    data :{
      title: ' hello arun '
    },
    transformResponse: axios.defaults.transformResponse.concat(data=>{
      data.title=data.title.toUpperCase();
      return data
    })
   };    // color of this braces tells me scope 
   axios(options).then(res=> showOutput(res));
  }
  
  // ERROR HANDLING
  function errorHandling() {
    // grabing GET req here
    axios
    .get('https://jsonplaceholder.typicode.com/todoss')   // cange url to wrong to see 404 error
    .then(res=>showOutput(res))
    .catch(err=>{
      if(err.response){
        // server responded with a status other than 200 range 
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
        if(err.response.status===404){
          alert('Error: page Not Found');
        }
      }else if(err.request){
        //request was made no response
        console.error(err.response);
      }else{
        console.error(err.message);
      }
    })
  }
  
  // CANCEL TOKEN
  function cancelToken() {
   // cancel request on the fly 
   const source=axios.CancelToken.source();
   // get request 
   axios
   .get('https://jsonplaceholder.typicode.com/todos',{
    cancelToken :source.token
   })   
   .then(res=>showOutput(res))
   .catch(thrown=>{
      if(axios.isCancel(thrown))
      {
        console.log('Request canceled ',thrown.message);
      }
   });
       if(true)
       {
        source.cancel('Request canceled ');
       }
  }
  
  // INTERCEPTING REQUESTS & RESPONSES
   axios.interceptors.request.use(config=>{
    console.log(`${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().getTime()}`);
    return config;
   }, error=>{
    return Promise.reject(error);
   }
   );
  
  // AXIOS INSTANCES
    const axiosInstance=axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com'
    });
   // axiosInstance.get('/comments').then(res=> showOutput(res));  // to run this line use dot 
  
  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Event listeners
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken);