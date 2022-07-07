//object
// const employee ={
//     id : "19pca102",
//     names:"jermieo rex",
//     age:23,
//     department: "angular",
//     address:{
//         city: "DINDIGUL",
//         country: "India",
//         presonal:{
//             course: "angular"
//         }
//     }
// }
//normal
// const ex1 = employee.id
// console.log(ex1)
// const ex2 = employee.names
// console.log(ex2)


//object dec
// const {names,age}=employee
// console.log(names)
// console.log(age)

// const { address:{city}} = employee;

// console.log(city)
//-------------------------------------------------------------------------

// const{name:fullName = "rex",age}=employee;
// console.log(fullName);
// console.log(age)
//-----------------------------------------------------------------------------

// function functname(){
//     console.log(`my name is ${employee.names} from ${employee.address.city} `)
// }
//------------------------------------------------------------------------------
//shall copy
// let d2=employee
// d2.names="karan"
// console.log(employee,"employee")
// console.log(d2,"d2")

// console.log(person)
//---------------------------------------------------------------------
//depcopy
// let d1 ={...employee}
// d1["names"]="kings"
// console.log(d1,"d1 deepcopy")
// console.log(employee,"emp")
//---------------------------------------------------------------------
//dep levl 2
// let d3 ={...employee,address:{...employee.address}}
// d3.address.country="us"
// console.log(employee,"emp")
// console.log(d3,"d3")
//dep level 3
//   let d4 ={...employee,presonal:{...employee.address.presonal}}
//   d4.presonal.course="rx"
//   console.log(employee,"emp")
//   console.log(d4,"d4")
//--------------------------------------------------------------------------
// // json.stringfy   view json formate key =""
// let person1 = JSON.stringify(employee)
// console.log(employee,"emp")
// console.log(person1,"person1")
// // json.parse view  normal
// let person2 =JSON.parse(JSON.stringify(employee))
// console.log(employee,"emp")
// console.log(person2,"person2")
// //--------------------------------------------------------------------------
//oject destructure
// const courses = {
//     name1 : "rex",
//     name2 : "karthiga",
//     name3 : "yamuna",
//     title : ["n1","n2","n3","n4"],
   
// }
// const {title,...other}=courses
// console.log(courses,"course")
// console.log(title,"title")
// console.log(other,"other")
//array destructure
// const [,,b,...remder]=courses.title

// console.log(b,"b")
// console.log(remder)

// const fruits =["apple","mango","banana","pineapple"]
// const [f1,f2,...rest]=fruits

// console.log(fruits,"fruits")
// console.log(f1,"f1")
// console.log(f2,"f2")
// console.log(rest,"remider")
//------------------------------------------------------------------
//boolean  return arrray  includes,some,every
// const rex = [1,2,3,4,5,6,7,8,9,10]
// console.log(rex.includes(0))//chek numder
//some and every
// const gg =[58,56,55,66,77,88];
// const gg1 =[58,56,55,66,77,88,101];
// console.log(gg.some(num=>num<56))
// console.log(gg1.every(num=>num<100))
//concat
// const a = ["Hi I am "]
// let s = a.concat("Jermieorex")
// console.log(s,"concat")
//String.startsWith()  string
// const a = "Hi I am "
// console.log(a.startsWith('H'));
//endswith
// const a = "Hi I am"
// console.log(a.endsWith('m'));
//indexof 
// const a=["a","b","c","d"]
// const b= "jermieorex"
// console.log(a.indexOf("b"))
// console.log(b.indexOf("r"))
//lastindexof
// const a=["a","b","c","d","b"]
// const b= "jermieorex"
// console.log(a.lastIndexOf("b"))
// console.log(b.lastIndexOf("r"))
//length
// const a=["a","b","c","d","b"]
// const b= "jermieorex"
// console.log(a.length)
// console.log(b.length)
//replace
// const a=["a","b","c","d","b"]
// const b= "hi I ham jermieorex"
// console.log(b.replace("h","k"))
//search
// const paragraph = 'The quick brown';
// console.log(paragraph.search("q"));
//split
// const a ="hi i am rex"
// console.log(a.split(" "))
// slice
// const a ="hi i am rex"
// console.log(a.slice(2,7))
// console.log(a.slice(-3))
// console.log(a.slice(-7,-4))
//trim
// const a ="    hi i am rex    "
// console.log(a.trim())
// console.log(a)
//substring
// const a ="abcdef rex"
// console.log(a.substring(2))
// console.log(a.substring(2,4))
// function swap(value){
//     const length = value.length;
//     return(
//         value.charAt(length -1)+ value.substring(1,length-1)+value.charAt(0)
//     );
// }
// console.log(swap("jermio rex"))

