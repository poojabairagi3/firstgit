//GETELEMENTBUCLASSNAME//
var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent='Hello 2';
// items[1].style.fontWeight= 'bold';
// items[1].style.backgroundColor= 'yellow';
items[2].style.backgroundColor= 'green';
// items.style.backgroundColor='#f4f4f4';
// for (var i=0;i<items.length;i++){
//     items[i].style.backgroundColor='#f4f4f4';
// }
for(var i=0;i<items.length;i++){
items[i].style.fontWeight='bold';
}



//GETELEMENTBYTAGNAME//
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent='Hello 2';
li[1].style.fontWeight= 'bold';
li[1].style.backgroundColor= 'yellow';
li[2].style.backgroundColor= 'green';
li.style.backgroundColor='#f4f4f4';
for (var i=0;i<items.length;i++){
    li[i].style.backgroundColor='#f4f4f4';
}
for(var i=0;i<items.length;i++){
li[i].style.fontWeight='bold';
}

