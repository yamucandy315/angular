const textarea = document.querySelector("#t");
textarea.onkeyup = (e) => {
let count = document.getElementById("count");
let words = 0;
let space = 0;
for (let i = 0; i < textarea.value.length; i++) {
    if(textarea.value.charAt(i) != ' ' && textarea.value.charAt(i+1) == ' '){
        words += 1;
    }else if(textarea.value.charAt(i) == ' '){
        space +=1; 
    }
}
count.innerHTML = "Words count : " + words;

document.getElementById("count1").innerHTML = "space count : " + space;

const withoutSpace = textarea.value.split(' ').join('');
document.getElementById("count2").innerHTML = "characters without space : " + withoutSpace.length;

};
