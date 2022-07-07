// for loop ++
console.log("is +++");
for (let i=0; i<=5; i++)
{
console.log(i);
}

/* for loop --  */

console.log("is ---");
for (let i=5; i>=0; i--)
{
console.log(i);
}
console.log("even and odd ")
for (let i=1; i<10; i++ ){
    if(i % 2 == 0)console.log(i);
}
//time
console.log("settimeout")
for(let i=0; i<=5; i++)
{
    setTimeout(function(){console.log(i);},3000)
}