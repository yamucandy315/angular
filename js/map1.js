const arr = [5, 1, 3, 2, 6];
// double -[10,2,6,4,12]
// triple -[15,3,9,6,18]
// binary -["101","1","11","10","110"]

//double
function double(x){
    return x * 2;
}
const output = arr.map(double);
console.log(arr);