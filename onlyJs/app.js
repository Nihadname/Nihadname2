/* 
1)elnur Ebdulayev:
Dogum tarihi:2000
Bilgisayar notllari:100,90,10
2)Eylul Aydemir:
dogum tarihi:2002
bilgisayar notlari:60.30,50
gecer not:45
sartlar:
1-yaslarini hesaplayin
2-ogrencimizin ders ortalamsini hesaplayin
3-dersden kalip kalmadigini oyrencez

*/ let MessageSucces="imtahandan ugurla gecdiniz"
let FailMessage="imtahandan kece bilmediniz"
let gecerNot=50
let ogr1="Elnur Ebdulayev"
let ogr2="2002"
let ogr1DogumYili=2000
let ogr2DogumYili=2002
let suankiYil=new Date().getFullYear()
let ogr2Yas=suankiYil-ogr2DogumYili
let ogr1Yas=suankiYil-ogr1DogumYili
let org1SinavNotlari1=100
let org1SinavNotlari2=90
let org1SinavNotlari3=10
let org1SinavOrtalamasi=(org1SinavNotlari1+org1SinavNotlari2+org1SinavNotlari3)/3
let org2SinavNotlari1=60
let org2SinavNotlari2=30
let org2SinavNotlari3=50
let org2SinavOrtalamasi=(org2SinavNotlari1+org2SinavNotlari2+org2SinavNotlari3)/3
console.log(org2SinavOrtalamasi)
console.log(org1SinavOrtalamasi)
console.log(ogr1Yas)
console.log(ogr2Yas)
let ogr1Gecerlik=org1SinavOrtalamasi>gecerNot
let ogr2Gecerlik=org2SinavOrtalamasi>gecerNot
console.log(ogr1Gecerlik)
if(org1SinavOrtalamasi>gecerNot){
    console.log(`hORMETLI${MessageSucces}`)
} else{
    console.log(`${FailMessage}`)
}
if(org2SinavOrtalamasi>gecerNot){
    console.log(`hORMETLI${MessageSucces}`)
} else{
    console.log(`${FailMessage}`)
}
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

