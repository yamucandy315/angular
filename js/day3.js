// 1
// let y1=prompt("enter one")
// let y2=prompt("enter sec")
// if(y1.length==y2.length){
//     let a=y1.split('').sort('').join('')
//     let b=y2.split('').sort('').join('')
//     if(a==b){
//         console.log("is anangram")
//     }
//     else{
//         console.log("is not")
//     }
// }
// else{
//     console.log("not valid")
// }

// 3
// let a=prompt("enter num")
// if(a>=0)
// {
//     let d=fact(a)
//     console.log(d)
// }
// else{
//     console.log("enter +no")
// }
// function fact(x){
//     if(x==0){
//         return 1
//     }
//     else{
//         return x*fact(x-1)
//     }
// }

// 4
// let y1=prompt("eneter")
// let y2=prompt("enter")
// let y
// for(let i=1;i<y1&&i<=y2;i++){
//     if(y1%i==0 && y2%i==0){
//         d=i
//     }
// }
// console.log(d)

// 5
// let a=0
// let b=1
// let c=[]
// for (let i=0;i<=10;i++){
//     console.log(a)
//     c.push(a)
//     let t=a+b
//     a=b
//     b=t
// }
// console.log(c)

//7
// const arr=[9,8,6,7,5,4,3,2,1];
// let len=arr.length;
// for(let i=0;i<len;i++){
//     for(let j=0;j<len-i;j++){
//     if(arr[j]>arr[j+1]){
//         let temp=arr[j];
//         arr[j]=arr[j+1];
//         arr[j+1]=temp;
//     }else{
//         arr[j];
//     }
// }
// }
// console.log(arr);

//8
// function yamuna(n){
//     for(let i=0;i<=10;i++){
//         if(i%2==0){
//             console.log(i+" is Even")
//         }else{
//             console.log(i+" is ODD")
//         }
//     }
// }
// console.log(yamuna())

// 9
// function mark(n){
//         if(n>95){
//             console.log("You have 'S' Grade - FIRST");
//         }else if(n>75 && n<=95){
//             console.log("A Grade");
//         }else if(n>65 && n<=75){
//             console.log("B Grade");
//         }else if(n>55 && n<=65){
//             console.log("C Grade");
//         }else if(n>35 && n<=55){
//             console.log("D Grade");
//         }else if(n<35){
//             console.log("Fail")
//         }
//         return n;
    
//     }
//     console.log(mark(97))

//10
    
// function yamu(){
//     let n=prompt("Enter the Age of Candidate:")
//     if(n>=18){
//         console.log("Eligible To Vote")
//     }else{
//         console.log("NOT Eligible")
//     }
// }
// console.log(yamu())
