//template String
let fname="rex"
let age="20";
let city="dindigul";
let role="ceo rex";
let output="";
output="<table border='1'><tr><th>name</th><td>"+fname+"</td></tr><tr><th>age</th><td>"+age+"</td></tr><tr><th>city</th><td>"+city+"</td></tr><tr><th>Role</th><td>"+role+"</td></tr></table>";

// or // es5

output+="<hr><table border='1'>"+
"<tr><th>name</th><td>"+fname+"</td></tr>"+
"<tr><th>age</th><td>"+age+"</td></tr>"+
"<tr><th>city</th><td>"+city+"</td></tr>"+
"<tr><th>Role</th><td>"+role+"</td></tr>"+
"</table>";

// or // es6

output+=`<hr><table border='1'>
<tr><th>name</th><td>${fname}</td></tr>
<tr><th>age</th><td>${age>=18?"good":"bad"}</td></tr>
<tr><th>city</th><td>${city}</td></tr>
<tr><th>Role</th><td>${role}</td></tr>
</table>`;
document.body.innerHTML=output;
