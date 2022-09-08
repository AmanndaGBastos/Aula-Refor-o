var canvas=document.getElementById("myCanvas");

var ctx=canvas.getContext("2d");

var color="red";

ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth= 2;
ctx.arc( 200, 200, 40 ,0 , 2 * Math.PI )
ctx.stroke();

canvas.addEventListener("mousedown", myMousedown)
//addEventListeer=escutador de eventos

function myMousedown(e){
    var mouseX=e.clientX-canvas.offsetLeft;
    var mouseY=e.clientY-canvas.offsetTop

    console.log("x="+mouseX+"y="+mouseY)
    
    circle(mouseX,mouseY)
}
function circle(mouseX,mouseY){
    ctx.beginPath();
    ctx.strokeStyle= color;
    ctx.lineWidth= 2;
    ctx.arc( mouseX,mouseY, 40 ,0 , 2 * Math.PI )
    ctx.stroke();

}
function clear(){
    ctx.clearRect( 0 , 0 ,canvas.width,canvas.height)
}