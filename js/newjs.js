//type of function
//function declaration (or) named function
function printSum(a,b){
    return a+b
}
//function expression (or) anonymous function
const printSum=function(a,b){
return a+b
}
//arrow function
const printSum= (name) => {
return +name[5]
}
console.log((printSum("908765432")+1000))
//immideate invoke function 
(function printSum(){
    console.log("name"[5])
    })()
//function with defalut params
const printSum= (name="12345614") => {
    return +name[5]
    }
    console.log((printSum("")+1000))
//rest params
const printSum= (...args) => {
    console.log(args)
    return args[0]
    }
    console.log(printSum("rex","ruby"))
// default params
const printSum= (name="rex") => {
    return name
    }
    console.log(printSum("yamu"))
//shallow copy
var person={
    name:"yamu",
    age:"23",
    gender:"female",
    id:"1234"
}
//shallow copy
var person1=person
person1.name="ruby"
console.log("person1",person1)
console.log("person",person)
//deep copy-method 1 spred operater
var person1={...person}
// person1["name"]="yamu"
// const person2={...person1,name:"rex"}
// console.log("person1",person1)
// console.log("person",person)

//deep copy- method2 json
var person={
    name:"yamu",
    age:"23",
    gender:"female",
    id:"1234",
    score:[10,20,30],
    address:{
        doorno:"66",
        street:"xxx",
        pincode:987654
    }
}
// var person1={...person}
// var person1={...person,address:{...person,}}

var person1=JSON.parse(JSON.stringify(person))
// person1.address.doorno="55"
console.log("person1",person1)
console.log("person",person)
// //Dstructering object
// const{address}=person
// console.log("person")
const{address,id,...others}=person 
console.log("others",others)
const{score}=person
console.log(score)
//array Dstructering kind of assingment  
const [mark1,mark2,...remaining]=score
console.log(remaining)

console.log(Object.keys(person))
console.log(Object.values(person))
const name="abishek raja"
console.log(name.split(" ").reverse().join(" "))
//boolean methods
const numberarray=[10,20,30,40,40,50,60]
//inculdes
console.log(numberarray.includes(20,1))
console.log(numberarray.includes(23))
console.log(numberarray.includes(20,numberarray.findIndex(n=>n=23)))
//some
console.log(numberarray.some((num,idx,a)=>num<1))
//every
console.log(numberarray.every((num,idx,a)=>num<50))
//find
console.log(numberarray.find((num,idx,a)=>num=10))