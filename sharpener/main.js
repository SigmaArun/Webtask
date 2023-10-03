
// TASK 9 FILTER SHARPENER ::::::::::::::::::::::::::::::::::::::::::::::::::
// i am adding filter 
var filter= document.getElementById('filter');    // defined kar liya filter
filter.addEventListener('keyup',filterItems);
// now i am adding function which will invoke by keyup 

function filterItems(e){
    var text = e.target.value.toLowerCase();
   // console.log(text);
    var items =itemList.getElementsByTagName('li');
    
  
    Array.from(items).forEach(function(item){
    var itemName=item.firstChild.textContent;
    var itemName2=item.childNodes[1].textContent;  //TASK 9 
    
    if(itemName.toLowerCase().indexOf(text) != -1 ||itemName2.toLowerCase().indexOf(text) != -1 ){
      item.style.display='block';
    }else{
      item.style.display='none';
    }
    });
    // adding
   
 }

 



var form =document.getElementById('addForm');
var itemList=document.getElementById('items');

// need an action   SUBMIT EVENT 
form.addEventListener('submit',addItem);     // note: this event on form 
// DELETE EVENT TO REMOVE ITEM
itemList.addEventListener('click',removeItem);     // note: this event on itemList


// add item function 
function addItem(e){
    e.preventDefault();

    // now i have to get value from tab 
    var newItem=document.getElementById('item').value;
    // i have to create an li element to add value and show it
    var li=document.createElement('li');
     
    // adda cklass 
    li.className='list-group-item';  // class same like other li tyhen good 

    // text node add 
    li.appendChild(document.createTextNode(newItem));
   // itemList.appendChild(li);    // added but i ahve to add a delete button 

// FUNCTIONALITY OF TASK 9 ADDING DESCRIPTION :::::::::::::::::::
var newItem2=document.getElementById('item2').value;
//var li=document.createElement('li');
li.className='list-group-item'; 
li.appendChild(document.createTextNode(newItem2));


   
   // logic to creatye delete button
   var deletebtn=document.createElement('button');
   
   // class is imp same class 
   deletebtn.className='btn btn-danger btn-sm float-right delete';
  
    deletebtn.appendChild(document.createTextNode('X'));
  //li.appendChild(deletebtn);

 //EDIT BUTTON 
 var editbtn=document.createElement('button');
 editbtn.className='btn btn-danger btn-sm float-right delete';
  //editbtn.appendChild(document.createTextNode('Edit'));
  //editbtn.className='btn btn-primary btn-sm float-right edit';
  editbtn.appendChild(document.createTextNode('Edit'));
 // li.appendChild(editbtn);
 // editbtn.appendChild(document.createTextNode('Edit'));
   
 
 li.appendChild(deletebtn);  
 itemList.appendChild(li);

  li.appendChild(editbtn);

  itemList.appendChild(li); 
   
  // UPTILL HERE DELETE BUTTON ADD BUT NOT FUNCTIONAL ADD LOGIC
}

// ADD DELETE EVENT ABOVE   and adding fucntion here 

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure user?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
 
// ADDING EDIT BUTTON 
/*
var li=document.createElement('li');
li.className='list-group-item'; 
var editbtn=document.createElement('button');
editbtn.className='btn btn-danger btn-sm float-right delete';
editbtn.appendChild(document.createTextNode('Edit'));
li.appendChild(editbtn);
itemList.appendChild(li); */


