// 1
// let url='https://jsonplaceholder.typicode.com/users'
// fetch(url).then(res=>res.json()).then(data=>{
//     console.log(data)
//     let x=data.filter(print)
// function print(b){
//     if(b.id==3){
//         console.log(b)
//     }
// }
// })

// 2
// let today = new Date();
// let day = today.getDay();
// let daylist=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
// console.log("Today is " + daylist[day] + ".")

// 3
// for ( var i = 1; i <= 100; i++ )
// {
//   if ( i%3 === 0 && i%5 === 0 )
//   {
//     console.log( i + " FizzBuzz" );
//   }
//   else if ( i%3 === 0 ) 
//   {
//     console.log(i+ " Fizz" );
//   }
//   else if ( i%5 === 0 ) 
//   {
//     console.log(i+ " Buzz" );
//   }
//   else
//   {
//     console.log(i);
//   }
// }

//4
// let x='https://jsonplaceholder.typicode.com/users'
// fetch(x).then(res=>res.json()).then(data=> {
//     console.log(data)
//     let y=data.map(dispaly)
//     function dispaly(n){
//         console.log("id:",n.id)
//         console.log("name:",n.name)
//     }
// })

//5
let yamuna={id:23,ph:09876543211,ad:888}
// // 
// let yamu=Object.assign({},yamuna)
// console.log(yamuna)
// console.log(yamu)
// // 
// let yamu1={...yamuna}
// console.log(yamuna)
// console.log(yamu1)
// // 
let a=JSON.stringify(yamuna)
let yamu2=JSON.parse(a)
console.log(yamuna)
console.log(a)
console.log(yamu2)


// 6
// let y=[]
// for(let i=1;i<=20;i++){
//     y.push(i)
// }
// let r=y.filter(div)
// function div(b){
//     if(b%2==0){
//         return b
//     }
// }
// console.log(r)

// 7
// let y=[]
// for(let i=1;i<=20;i++){
//     y.push(i)
// }
// let r=y.filter(div)
// function div(b){
//     if((b%2)!=0){
//         return b
//     }
// }
// console.log(r)

// 8
// let a=[9,4,3,2]
// let n=prompt("enter:")
// if(a.includes(n)){
//     console.log("true")
// }
// else{
//     console.log("flase")
// }

//9
// let y=[]
// for(let i=1;i<=20;i++){
//     y.push(i)
// }
// let r=y.filter(div)
// function div(b){
//     if(b%2==0){
//         return b
//     }
// }
// console.log(r)

//10
// let yamu= setInterval(() => alert('clg'), 2000);
// setTimeout(() => { clearInterval(yamu); alert('stop'); }, 5000);