// let a="5"
// let b=7
// const c=a-b;
// const d=c;
// console.log(d)


// let user={name:"harish",age:23}
// const {name}=user
// console.log(name)


// console.log("a");
// setTimeout(()=>{
//     console.log("b");
// },0);
// Promise.resolve().then(()=>{
//     console.log("c");
// })
// console.log("d");
// setTimeout(()=>{
//     console.log("e");
// },0);
// Promise.resolve().then(()=>{
//     console.log("f");
// })


//map()
// let name=["john","doe","hi"]
// const newName=name.map((name,index)=>{
//     return `index of this name ${name}=${index}`
// })
// console.log(newName)
// console.log(name)


//filter()
// let name=[1,2,3,4,5]
// const num= name.filter((name,index)=>name%2==0)
// console.log(num)
// console.log(name)

//find()
// let name=[{id:1,name:"harish",email:"harish@gmail.com"},{id:2,name:"balaji",email:"balaji@gmail.com"}];
// const n=name.find(name=>name.id==1);
// console.log(n.name)
// console.log(n.email)
// const i=name.find(name=>name.id%2==0);
// console.log(i.name)
// console.log(i.email)

//findIndex()
// let num=[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:0}]
// const i=num.findIndex(num=>num.id==7 && 11);
// const j=num.findIndex(num=>num.id==11);
// console.log(i)
// console.log(j)

//reduce()
// const c=['a','b','c'];
// const t=c.reduce((acc,n)=>acc+n,);
// console.log(t)
// const g=[1,20,30];
// const h=g.reduce((acc,n)=>acc+n,20);
// console.log(h)