// let a="5"
// let b=7
// const c=a-b;
// const d=c;
// console.log(d)


// let user={name:"harish",age:23}
// const {name}=user
// console.log(name)


console.log("a");
setTimeout(()=>{
    console.log("b");
},0);
Promise.resolve().then(()=>{
    console.log("c");
})
console.log("d");
setTimeout(()=>{
    console.log("e");
},0);
Promise.resolve().then(()=>{
    console.log("f");
})