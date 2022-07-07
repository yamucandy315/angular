const number=[10,20,30,40,50,60,70,80,90,100];
//map(value,index,array)
let sqrt=number.map((rex) => {
    return Math.sqrt(rex);

});

console.table(sqrt);
const users =[
    {names:"sam",age:15,city:"chennai",salary:120000},
    {names:"rex",age:17,city:"bangalour",salary:130000},
    {names:"abi",age:23,city:"dindigul",salary:140000},
    {names:"yosuva",age:23,city:"dindigul",salary:150000},
    {names:"meena",age:23,city:"dindigul",salary:160000},
    {names:"yamuna",age:23,city:"trichy",salary:120000},
    {names:"nishanth",age:16,city:"thrichy",salary:140000},
    {names:"kings",age:23,city:"dindigul",salary:130000},
    
];
console.table(users);
let elig_status=users.map((rx)=>({
    //sperad operator
    //...rx,
    names:rx.names,
    age:rx.age,
    city:rx.city,
    salary:rx.salary,
    status:rx.age>=18?"eligible":"not eligible"

}));

console.table(elig_status);
