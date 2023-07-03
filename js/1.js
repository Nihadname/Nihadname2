let animals=["cat","dog","elephant","horse",]
let meyveler=["alma","qarpiz","armud"]
let newMassive=animals.slice(2,4)
let massive=animals.concat("car")
let concatMassive=animals.concat(meyveler)
let join=animals.join(" - ")
let reqemler=new Array(5,27,33,41,52,63,70,88,99)
let find=reqemler.find(element=>element>6)
let find2=reqemler.find(element=>element>7)
console.log(find2)
function axtarFunction(element){
   return element>6
    
}
let axtar=reqemler.find(axtarFunction)
let findIndex=reqemler.findIndex(axtarFunction)
console.log(findIndex)
let numune=reqemler.reduce((x,y)=> x+y)
let next=reqemler.reduce((x,y)=>{
    return x>y ? x:y
})
console.log(next)
let sort=reqemler.sort((a,b)=>a-b)
console.log(sort)
let netice=reqemler.some((number)=>{
    return number>50
})
let netice1=reqemler.every((number)=>{
    return number>50
})
let netice2=reqemler.filter((number)=>{
    return number>12
})
 console.log(join)
 let indexOf=animals.indexOf("dog")
 console.log(indexOf)
 let lastIndexOf=animals.lastIndexOf("dog")
 console.log(lastIndexOf)

console.log(concatMassive)
console.log(massive)
console.log(newMassive)
let newMassive2=animals.fill("menim adim",1,4)
console.log(newMassive2)
let newMethod=animals.splice(1,3)
console.log(newMethod)
