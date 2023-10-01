//1. PARENT ELEMENT
var itemList=document.querySelector('#items');
console.log(itemList.parentElement);
// output: it returns me parent of nodes having id items which islist node
itemList.parentElement.style.backgroundColor='yellow';

//console.log(itemList.lastChild);
//........................................................................................
// 2.LAST ELEMENT CHILD
 console.log(itemList.lastElementChild);
 // i get output without text means spaces or line break which was in last child property
 itemList.lastElementChild.textContent='hi Arun';

 //.........................................................................................

 //3 LAST CHILD
 console.log(itemList.lastChild);
 itemList.lastChild.textContent='hi last buddy';
 
 //.............................................................................................
 // 4 create child
    var newChild=document.createElement('li');
    var textnode=document.createTextNode('My Alien child ');

     newChild.appendChild(textnode);
     document.getElementById('items').appendChild(newChild);
//...........................................................................................     

// 5. FIRST ELEMENT CHILD 
 
console.log(itemList.firstElementChild);      // return first single item
itemList.firstElementChild.textContent=' hi humans';
//..........................................................................................
//6 FIRST CHILD PROPERTY
console.log(itemList.firstChild);     // return text line brake or space 
//..........................................................................................
//7. next sibling property 
console.log(itemList.nextSibling);     // returnning me text space
//8 . nextelement sibling  
console.log(itemList.nextElementSibling);   // returning null which is accurate so it is better than above

//9. previous sibling 
console.log(itemList.previousSibling);   // also returnning text space 
//10. previous element sibling
console.log(itemList.previousElementSibling);  // imediate siblimg is h2 so returning sibling 
itemList.previousElementSibling.style.color='blue';
//................................................................................................

// 11 .create element property
 var para=document.createElement('p');
 para.className='addpara';
 para.id='p1';
// para.innerText='Hi buddies this is arun and i am Alien';


 document.body.appendChild(para);
 console.log(para);
//12 set attribute
var para=document.createElement('p');
 para.className='addpara';
 para.id='p1';
 para.setAttribute('title' , 'hello yara');
 console.log(para);
 //13 create text node
 var paratext=document.createTextNode('  Amazing sharpener journey ......');
 //14 append child.
 para.appendChild(paratext);

 console.log(para);
 document.body.appendChild(para);
 para.style.color='blue';

 // HELLO WORLD BEFORE ITEM LISTNER.........................................
  var newtitle=document.createTextNode('HEllo');
  var container=document.querySelector('header  .container');
  var h1= document.querySelector('header  h1');
  container.insertBefore(newtitle, h1);
// add HEllo before item 1
const newNode = document.createElement("li");
const textNode = document.createTextNode("HEllo");
newNode.appendChild(textNode);

const list = document.getElementById('items');
list.insertBefore(newNode, list.children[0]);
newNode.style.color="purple";


/*

var newtitle=document.createTextNode('HEllo');
const list=document.getElementById('#items');
list.insertBefore(newtitle,list.children[0]);  */
