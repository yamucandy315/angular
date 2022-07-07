const arrOfObj = [{
        name: 'Diwakar Kannan',
        age: 22,
        designation: 'UI Developer',
        rollNumber: 'CRUD02'
    },
    {
        name: 'Jermio Rex',
        age: 23,
        designation: 'UI Developer',
        rollNumber: 'CRUD03'
    },
    {
        name: 'Abishek Raja',
        age: 23,
        designation: 'Data Science',
        rollNumber: 'CRUD01'
    },
    {
        name: 'Meenakshi',
        age: 22,
        designation: 'Data Science',
        rollNumber: 'CRUD05'
    },
    {
        name: 'Yoshuva Immanuvel',
        age: 22,
        designation: 'UI Developer',
        rollNumber: 'CRUD07'
    },
    {
        name: 'Joseph Nishanth',
        age: 24,
        designation: 'UI Developer',
        rollNumber: 'CRUD04'
    },
    {
        name: 'Yamuna Devi',
        age: 22,
        designation: 'UI Developer',
        rollNumber: 'CRUD06'
    }

]

arr = [45, 4, 9, 16, 25]

let obj = {
    name: 'Diwakar Kannan',
    age: 22,
    designation: 'UI Developer'
}



// arrOfObj.forEach((a) => {
//  console.log(a, 'values')
// })
/* forin */
// for (let x of arrOfObj) {
//     // text += arrOfObj[x] + " ";
//     console.log(x, "values")
// }

// let newArr = arrOfObj.map((obj) => {
//     let mapedNewObj ={
//         candidate: obj.name
//     }
//     return mapedNewObj
// })

// let newArr2 = arrOfObj.map(obj =>
//      obj.name
// )
// let z = true
// if(z){
//     const a = 10;
//     a = 20;
//     a

// }

// const a = 20

// let filtered = arrOfObj.find((obj) => {
//     if(obj.rollNumber == "CRUD01"){
//         return obj;
//     }
// })

// const numbers = [1, 2, 3, 4];
// const sum = arrOfObj.reduce((result, item) => {
//        return result + item.age;
//     // else {
//     //    return result + item.age
//     // }
// }, 0);
// console.log(sum, "sum");

// let filtered2 = arrOfObj.find(obj =>
//     obj.rollNumber == "CRUD01"
// )

// let find2 = arrOfObj.findIndex(obj =>
//     obj.rollNumber == "CRUD01"
// )
// console.log(find2, "find2");

// console.log(filtered, filtered2, arrOfObj, "afterMap")


/* forloop */
// for (let i = 0; i < arrOfObj.length; i++) {
//     console

//     if (arrOfObj[i].age === 22) {
//         console.log(arrOfObj[i], "age 22")
//     } else if (arrOfObj[i].age === 23) {
//         console.log(arrOfObj[i], "age 23")
//     } else {
//         console.log(arrOfObj[i], "Other ages")
//     }

// }