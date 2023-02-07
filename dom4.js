// //QUERYSELECTOR//
// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px blue';

// //  will grab 1 st input 
// var input = document.querySelector('input');
// input.value ='Hello world';

// var submit=document.querySelector('input[type="submit"]');
// submit.value="SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color='red';

// var lastItem= document.querySelector('.list-group-item:last-child');
// lastItem.style.color='blue';

var secondItem= document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor='green';

var secondItem= document.querySelector('.list-group-item:nth-child(3)');
secondItem.style.display='None';

//QUERYSELECTORALL//

// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent='Hello';

// var odd=document.querySelectorAll('li:nth-child(odd)');
// var even=document.querySelectorAll('li:nth-child(even)');
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor ='#f4f4f4'
//     even[i].style.backgroundColor ='#ccc'
// }

var lis =document.querySelectorAll('.list-group-item');
lis[1].style.color='green';

var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
        odd[i].style.backgroundColor ='green'
}