//QUERY SELECTOR :::::::::::::::::::::::::::::::::::::::

// second item green 
var item=document.querySelector('.list-group-item:nth-child(2)');
item.style.backgroundColor='green';

// making third item invisible sharpener 
var thirditem= document.querySelector('.list-group-item:nth-child(3)')
 thirditem.style.display='none';

// checking item third on console yes it is there but not visible on form
 var li =document.getElementsByTagName('li');
console.log(li);     

// QUERY SELECTORALL ::::::::::::::::::::::::::::::::::::::::::::::::
// CHANGING SECOND ITEM FORNT GFREEN

//var titles=document.querySelectorAll('.list-group-item');
 //console.log(titles);
 var seconditem=document.querySelectorAll('li:nth-child(2)');
   //seconditem.style.color='green';     // this logic is not working here

   var listItems = document.querySelectorAll('.list-group-item');  // this logic is working
       if (listItems.length >= 2) {
 
       listItems[1].style.color = 'green';
       }
    // ALL ODD GREEN   
    var odd=document.querySelectorAll('li:nth-child(odd)');
    for(var i=0 ;i<odd.length;i++){
        odd[i].style.backgroundColor='green';
    }







/*

// GET ELEMENT BY TAG NAME ::::::::::::::::::
  var items=  document.getElementsByClassName('list-group-item');
  console.log(items);

  for(var i=0;i<items.length;i++){
    items[i].style.backgroundColor='yellow';

 } 

 var li = document.getElementsByTagName('li');
 console.log(li);
/* 
 for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor='purple';

 }  */

 //li[4].style.backgroundColor='green';
  
  
/*
console.log(document.title);
document.title='Arun';
console.log(document.title);

var headerTitle=document.getElementById('header-title');
console.log(headerTitle);
headerTitle.textContent='Superman';
var header = document.getElementById('header-title');
header.style.borderBottom= 'solid 4px #000';

//var item=document.getElementsByClassName('title');
//console.log(document.body);
//console.log(document.h2);
//item.style.fontWeight='bold';

//item.style.backgroundColor='green';

var additem=document.querySelector('h2');
 additem.style.fontWeight='bold';
 additem.style.color='green';     */

 // GET ELEMENT BY CLASS NAME   :::::::::::::::::::::::::::::::::::::
 /*
 var items = document.getElementsByClassName('list-group-item');
 console.log(items);
 items[2].style.backgroundColor='green';

 for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';

 }   */

 
