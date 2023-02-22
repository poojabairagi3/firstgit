console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringigTicks=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket');
    },3000)
});

const getPopcorn=promiseWifeBringigTicks.then((t)=>{
    console.log('wife: i have the ticks');
    console.log('husband: we should go in');
    console.log('wife:no i am hungry');
    return new Promise((resolve,reject)=>resolve(`${t} popcorn`));

});
const getbutter =getPopcorn.then((t)=>{
    console.log('husband: i got some butter');
    console.log('husband: we should go in');
    console.log('wife:I am thristy');
    return new Promise((resolve,reject)=>resolve(`${t} Butter `));
});


const getColdDrinks= getbutter.then((t)=>{
    console.log(`husband: i got some coke ` );
    console.log('husband: anything else darling?');
    console.log('wife:lets go we are getting late');
    console.log('husband: thank you for the reminder "grins"');
    return new Promise((resolve,reject)=>resolve(`${t}coke`));
});

getColdDrinks.then((t)=>console.log(t));

console.log('person4: shows ticket');
console.log('person5: shows ticket');
