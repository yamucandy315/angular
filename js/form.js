function add(){
    let x=document.getElementById("form").value;
    let text;
    text=x;

    document.getElementById("demo").innerHTML = text;
    console.log("x",x);
    console.log("text",text);

    

}
// setInterval(()=>{
//     add()
// },5000)
setTimeout(()=>{
    add()
},5000)
    