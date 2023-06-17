var mouseEvent = "empty";
var LastX, LastY;
var canva = document.getElementById("mycanvas");
var ctx = canva.getContext("2d");
var color = "black";
var width_line = 3;
canva.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
    mouseEvent  = "mousedown";
}
canva.addEventListener("mouseup",my_mouseup);
function my_mouseup(e) {
    mouseEvent  = "mouseup";
}
canva.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e) {
    mouseEvent  = "mouseleave";
}
canva.addEventListener("mousemove",my_mousemove);
function my_mousemove(e) {
    currentX = e.clientX-canva.offsetLeft;
    currentY = e.clientY-canva.offsetTop;
    if(mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_line;
        ctx.moveTo(LastX,LastY);
        ctx.lineTo(currentX,curretY);
        ctx.stroke();
    }
    LastX = currentX;
    LastY = currentY;
}
function clearArea() {
    ctx.clearRect(0,0,ctx.canva.width,ctx.canva.height);
}