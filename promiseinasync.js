console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie=async() =>{
    const promiseWifeBringigTicks=new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve('ticket');},3000)
    });

    const getPopcorn= new Promise((resolve,reject)=>resolve(` popcorn`));

    const getCandy =new Promise((resolve,reject)=>resolve(` candy `));

    const getColdDrinks =new Promise((resolve,reject)=>resolve(` coke`));
    
    let[popcorn ,candy,coke] = await Promise.all([getPopcorn,getCandy,getColdDrinks]);

    console.log(`${popcorn},${candy},${coke}`)

    // let ticket
    // try
    // {
    //     ticket =await promiseWifeBringigTicks;
    // }   catch(e){
    //     ticket='sad face'
    // }
    let ticket=await promiseWifeBringigTicks;
        return ticket
}
preMovie().then((m)=>console.log(`person3:shows ${m}`));
console.log('person4: shows ticket');
console.log('person5: shows ticket');

