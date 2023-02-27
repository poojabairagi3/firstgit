let sum = 0;
let sum_of = document.getElementById('sum-of');
sum_of.textContent = `Total sum of products:- ${sum}`
function SaveToCrudCrud(event){
    event.preventDefault();
    var price= event.target.price.value;
    var product=event.target.product.value;

    var obj={
        price:price,
        product:product
    }
    // localStorage.setItem(obj.sell,JSON.stringify(obj));
    axios.post('https://crudcrud.com/api/5d45371c3b5c48de810188b907e12764/EcomApp',obj)
    .then((response)=>{
        sum += Number(obj.price);
        console.log(response);
        showUserOnScreen(response.data);
    })
    .catch((err)=>{
        console.log(err);
    })
}
window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/5d45371c3b5c48de810188b907e12764/EcomApp')
    .then((response)=>{
        console.log(response)
        
        for(var i=0;i<response.data.length;i++){
            showUserOnScreen(response.data[i]);
            sum += Number(response.data[i].price);
        }
        sum_of.textContent = `Total sum of products:- ${sum}`
    })
    .catch((err)=>{
        console.log(err);
    })
})

function showUserOnScreen(obj) {
    var parentElement = document.getElementById('ListOfItems');
    var childElement = document.createElement('li');
    childElement.textContent = obj.price+ ' - ' + obj.product;
    parentElement.appendChild(childElement);

    var parentElement = document.getElementById('ListOfItems');
    var deleteBtn = document.createElement('input');
    deleteBtn.type = 'button';
    deleteBtn.value = 'Delete User';
    deleteBtn.onclick = () => {
        axios.delete(`https://crudcrud.com/api/5d45371c3b5c48de810188b907e12764/EcomApp/${obj._id}`)
        .then((response) =>{
            parentElement.removeChild(childElement)
            sum -= obj.price;
            sum_of.textContent = `Total sum of products:- ${sum}`;
        })
        .catch((err)=>{
            console.log(err);
        });   
    }
    sum_of.textContent = `Total sum of products:- ${sum}`
    childElement.appendChild(deleteBtn);
    parentElement.appendChild(childElement);
}