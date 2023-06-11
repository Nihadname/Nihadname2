let count=0
document.getElementById("increase").onclick=function(){
    count+=1
    document.getElementById("CounterBox").innerHTML=count
}
document.getElementById("dicrease").onclick=function(){
    count-=1
    document.getElementById("CounterBox").innerHTML=count
}
document.getElementById("reset").onclick=function(){
    count=0
    document.getElementById("CounterBox").innerHTML=count
}
