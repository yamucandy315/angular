var myData = [
    ["veg","morning","idly"],
    ["veg","morning","dosai"],
    ["veg","morning","poori"],
    ["veg","afternoon","veg-meals"],
    ["veg","afternoon","veg-briyani"],
    ["veg","afternoon","crud-rice"],
    // ["veg","evening","noodles"],
    // ["veg","evening","non"],
    // ["veg","evening","parotta"],
    ["non-veg","morning","kadaichicken with dosai"],
    ["non-veg","morning","chicken noodles"],
    ["non-veg","morning","chicken parotta"],
    ["non-veg","afternoon","chicken briyani"],
    ["non-veg","afternoon","mutton briyani"],
    ["non-veg","afternoon","chicken rice"],
    ["non-veg","evening","chicken shawarma"],
    ["non-veg","evening","chicken roll"],
    ["non-veg","evening","chicxen meals"]
];

function makeDropDown(data,level1Filter){

    const filteredArray = data.filter(r => r[0] === level1Filter);

    const uniqueList = getUniqueValues(filteredArray,1);
   
    const selectLevel2 = document.getElementById("level2");
   
    selectLevel2.innerHTML="";
    uniqueList.forEach(item => {
       const option = document.createElement("option");
       option.textContent = item;
       selectLevel2.appendChild(option);
    });
}

function applyDropDown(){
    const selectLevel1Value = document.getElementById("level1").value
    makeDropDown(myData,selectLevel1Value)
}

// function afterDocumentLoads(){
//     applyDropDown();
// }

function getUniqueValues(data,index){
    const uniqueOptions = new Set();
    data.forEach(r => uniqueOptions.add(r[index]));
    console.log("uniqueOptions",uniqueOptions);
    return [...uniqueOptions];
}
// function populateFirstLevelDropDown(){
//     const uniqueList = getUniqueValues(myData,0);
// }   

document.getElementById("level1").addEventListener("change",applyDropDown);
document.addEventListener("DOMContentLoaded",applyDropDown);
// var dd=new DropDown(myData).eazyDropDown(["level1","level2","level3"]);