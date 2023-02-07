//TRAVERSING THE DOM//
var itemList= document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'red';
// console.log(itemList.parentElement.parentElement.parentElement);


//childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor ='yellow';

// //FirstChild
// console.log(itemList.firstChild);
// //firstElementChild
// console.log(itemList.firstElementChid);
// itemList.firstElementChild.textContent='Hello 1';

// //LastChild
// console.log(itemList.lastChild);
// //flasstElementChild
// console.log(itemList.lastElementChid);
// itemList.lastElementChild.textContent='Hello 4';

//nextsibling
// console.log(itemList.nextSibling);
// //nextElementSibling
// console.log(itemList.nextElementSibling);

// //previous sibling
// console.log(itemList.previousSibling);
// //previous Elementsibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='green';


//create Element

//create a div
var newDiv = document.createElement('div');
//Add class 
newDiv.className='hello';
//Add Id
newDiv.id='hello1';
//Add attribute
newDiv.setAttribute('title','Hello Div');
//create a text node
var newDivText = document.createTextNode('HEllo');
//add text to div
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize='30px';
container.insertBefore(newDiv,h1);


//create Element



var parentNode = document.getElementById('items');

parentNode.innerHTML='<li>HEllo</li>'+parentNode.innerHTML


