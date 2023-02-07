//EXAMINE THE DOCUMENT OBJECT //

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent='Hello';
// console.log(document.forms[0]);
// console.log(document.links);

//GETELEMENTBYID//
// console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header=document.getElementById('main-header');
var h1=document.getElementById('add-item');

// console.log(headerTitle);
// headerTitle.textContent= 'Hello';
// headerTitle.innerText= 'goodbye';
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
header.style.borderBottom='solid 3px #000';
h1.style.color='green';
h1.innerHTML='<strong>Add Item</strong>';


