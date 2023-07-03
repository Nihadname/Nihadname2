let reqemler=new Array(5,27,33,41,52,63,70,88,99)
let filterVersion=[]
reqemler.forEach((element)=>{
    if(element>75){
        filterVersion.push(element)
    }
})
console.log(filterVersion)
let numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, index, array) => {
  array[index] = number * 2;
});

console.log(numbers);

let sum = 0;

numbers.forEach((number) => {
  sum += number;
});

console.log(sum);
let squaredNumbers = [];

numbers.forEach((number) => {
  squaredNumbers.push(number ** 2);
});

console.log(squaredNumbers);
