let x;
let y;
let z;


document.getElementById("rollButton").onclick=function(){
    let x=Math.floor(Math.random()*6)+1;
let y=Math.floor(Math.random()*6)+1;
let z=Math.floor(Math.random()*6)+1;

    document.getElementById("Numberx").innerHTML=x
    document.getElementById("Numbery").innerHTML=y
    document.getElementById("Numberz").innerHTML=z 
}

