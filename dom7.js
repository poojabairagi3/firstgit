var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit evenet
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click', removeItem);
//Filter event
filter.addEventListener('keyup',filterItems);


//add item
function addItem(e){
    e.preventDefault();
    
    //get input value
    var newItem = document.getElementById('item').value;
    var descriptionNode = document.getElementById('description').value;
    //create new li element
    var li = document.createElement('li');
    //add class
    li.className='list-group-item';
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(descriptionNode));

    //create delete button element
    var deleteBtn =document.createElement('button');

    //add classes to delete button
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    //append button to li
    li.appendChild(deleteBtn);

//create edit button element
var editBtn =document.createElement('button');

//add classes to edit button
editBtn.className='btn btn-light btn-sm float-right edit';
//append text node
editBtn.appendChild(document.createTextNode('Edit'));
//append  edit button to li
li.appendChild(editBtn);

    //append li to list
    itemList.appendChild(li);
}

//Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
        itemList.removeChild(li);        }
    }
}

//filter item
function filterItems(e){
  //convert text to lowercase
  var text = e.target.value.toLowerCase();
  //get lis
  var items =itemList.getElementsByTagName('li'); //array of node
 //convert to an array
 Array.from(items).forEach(function(items){

  var itemName = items.firstChild.textContent;
  var description =items.childNodes[1].textContent;

  if(itemName.toLowerCase().indexOf(text)!=-1|| description.toLowerCase().indexOf(text)!=-1 ){
    itemList.style.display='block';
  }else{
    items.style.display='none';
  }
  
 });
}