
// const posts=[
//     {title:'Post One',body:'This is Post One'},
//     {title:'Post Two',body:'This is Post Two'}
// ]
// function getPosts(){
//     setTimeout(()=>{
//         let output='';
//         posts.forEach((post,index)=>{
//             output+=`<li>${post.title}</li>`;

//         })
//         document.body.innerHTML=output;
//     },1000);
// }
// function createPost(post,callback){
//     setTimeout(()=>{
//         posts.push(post);
//         Callback();
//     },2000);
// }
// createPost({title:'Post Three',body:'This is Post Three'},getPosts);

// function BuyCar(cb){
//     setTimeout(()=>{
//         console.log('buy a car')
       
//     },10000)
// }
// function planatrip(){
//     setTimeout(()=>{
//         console.log('lets go to manali')
        
//     },2000)
// }
// function planatrip(){
//     setTimeout(()=>{
//         console.log('lets go to manali')
        
//     },1000)
// }
// BuyCar(planatrip);


// function BuyCar(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//         res('buy a car')
       
//     },3000)
//     })   
// }
// function planatrip(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res('lets go to manali')
            
//         },2000)
//     }) 
// }
// function reachedManali(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res('reached manali')
            
//         },1000)
//     })
    
// }
// async function fun1(){
//     const msg= await BuyCar();
//     console.log(msg)
//     const msg2= await planatrip();
//     console.log(msg2)
//     const msg3= await reachedManali();
//     console.log(msg3)
// }
// fun1()


// BuyCar().then((msg)=>{
//     console.log(msg)
//     planatrip().then((msg2)=>{
//         console.log(msg2)
//         reachedManali().then((msg3)=>{
//             console.log(msg3)
//         })
//     })
// })

function BuyCar(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
        res('buy a car')
       
    },3000)
    })   
}
function planatrip(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('lets go to manali')
            
        },2000)
    }) 
}
function reachedManali(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            rej('accident hogy')
            
        },1000)
    })
    
}

async function fun1(){
    try
    {const msg= await BuyCar();
    console.log(msg)
    const msg2= await planatrip();
    console.log(msg2)
    const msg3= await reachedManali();
    console.log(msg3)
}catch(err){
        console.log(err)
    }
}
fun1()

