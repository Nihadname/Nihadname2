function PassingExamOrFail(studentExamPoint,AverageScore){
    const MessageSucces="imtahandan ugurla gecdiniz!"
const FailMessage="imtahandan kece bilmediniz!"

if (studentExamPoint>AverageScore){
    console.log(`hormetli ${MessageSucces}`);
} else{
    console.log(`${FailMessage}`) 
}
}
const org3SinavOrtalamasi = 75; // define org1SinavOrtalamasi variable
const gecer2Not = 60; // define gecerNot variable

PassingExamOrFail(org3SinavOrtalamasi,gecer2Not)

let yas=17
let mezuniyyet="unuversite"
if(yas>=18&& (mezuniyyet=="lise" ||mezuniyyet=="unuversite" )){
    console.log("ehliyet ala bilirsin")
} else if(yas===17){
console.log("DAYAN SON 1 SENE")
}
 else{
    console.log("ehliyet alamazsim")
}