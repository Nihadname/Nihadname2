let c = document.getElementById("canvas");
let  ctx = c.getContext("2d");

ctx.beginPath();
ctx.arc(95,50,12,0,2*Math.PI);
ctx.stroke();
ctx.fillStyle = "red"
ctx.fill();


let centerX=c.width/2
let centerY=c.height/2


function myFunction(){
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(Math.PI / 4);
    ctx.beginPath();
    ctx.arc(0, 0, 12, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.restore();
}

c.addEventListener("click", myFunction);
