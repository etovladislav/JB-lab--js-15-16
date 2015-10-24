var f = function () {
    console.log(1);
}
var time = setTimeout(f, 1000);
clearTimeout(time);
requestAnimationFrame(f);
var time = setInterval(f, 1000);

    var time = false;
    interval = function  () {
        if(time){return}
        time = true;
        console.log(1);
        setTimeout(function(){time = true},300);
    }

var to, delay;
delay = 3* 1000;
function f(){
    clearTimeout(to);
    to = setTimeout(function(){
        alert(1)
    },3000)
}

for(var i = 0; i<300; i++){
    setInterval(interval(),0);
}
