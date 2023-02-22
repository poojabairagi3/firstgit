console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie=async() =>{
    const promiseWifeBringigTicks=new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve('ticket');},3000)
    });

    const getPopcorn= new Promise((resolve,reject)=>resolve(` popcorn`));

    const getbutter =new Promise((resolve,reject)=>resolve(` Butter on popcorn`));

    const getColdDrinks =new Promise((resolve,reject)=>resolve(` coke`));

    let ticket =await promiseWifeBringigTicks;

    console.log(`wife: i have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife:no i am hungry');

    let popcorn = await getPopcorn;

    console.log(`husband: i got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife:I need butter on my popcorn');
            
    let butter=await getbutter;
        
    console.log(`husband: i got some ${butter} ` );
    console.log('husband: anything else darling?');
    console.log('wife:I am thristy');

    let coke= await getColdDrinks;

    console.log(`husband: i got some ${coke} ` );
    console.log('husband: anything else darling?');
    console.log('wife:lets go we are getting late');
    console.log('husband: thank you for the reminder "grins"');
        return ticket
}
preMovie().then((m)=>console.log(`person3:shows ${m}`));
console.log('person4: shows ticket');
console.log('person5: shows ticket');

