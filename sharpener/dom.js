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
 additem.style.color='green';