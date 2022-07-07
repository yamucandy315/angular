/*
var
let
const
*/

var a=25;
var b=3;
console.log(a+b);
//1.scope
if(true)
    {
        var msg="hi";
        console.log(msg);
    }
    console.log(msg);

//let
if(true)
    {
        let msg="hiiii";
        console.log(msg);
    }
//const
if(true)
    {
        const msg="rex";
        console.log(msg);
    }

//variable redeclaration

const a=25;
console.log(a);
a=45;
console.log(a);


const stud={"name":"ram","age":22};
console.table(stud);
console.log(stud.name);
stud.name="rx";
console.table(stud)

