//颜色随机效果
function randomColor(){
    var color = "rgb(";
    var r = parseInt(Math.random()*256);
    var g = parseInt(Math.random()*256);
    var b = parseInt(Math.random()*256);
    color = color + r + "," + g + "," + b + ")";
    return color;
}
//创建一个制造烟花的构造函数，第一个参数为元素，后两个为xy轴
function Fireworks(Div,x,y){
    Div.style.backgroundColor=randomColor();
    Div.className = "fireworks";
    document.body.appendChild(Div);
    Div.style.left = x + "px";
    Div.style.top = y + "px";
    var speedX = (parseInt(Math.random()*2) == 0 ? 1 : -1)*parseInt(Math.random()*16 + 1);
    var speedY = (parseInt(Math.random()*2) == 0 ? 1 : -1)*parseInt(Math.random()*16 + 1);
    this.move = function () {
        var i = 3;
        var flowerTime = function () {
            i++;
            Div.style.left = Div.offsetLeft + speedX + "px";
            Div.style.top = Div.offsetTop + speedY + i + "px";
            //移动出可视区域记得删除div和清除定时器
            if(Div.offsetLeft+Div.offsetWidth>window.innerWidth|| Div.offsetLeft<2 || Div.offsetTop+Div.offsetHeight>window.innerHeight || Div.offsetTop<2 ){
                Div.remove();
                clearInterval(time1);
            }
        };
        var time1 = setInterval(flowerTime,30);
    }
}
document.onclick = function (e) {
    var evt = e || window.event;
    for(var i=0; i < 80; i++){
        var div = document.createElement("div");
        var b = new Fireworks(div,evt.pageX,evt.pageY);
        b.move();
    }
};