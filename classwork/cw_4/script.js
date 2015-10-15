function click() {
    var value = document.querySelector('input').value;
    console.log(value);
    regex = /[A-Z0-9.+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    if (regex.test(value)) {
        var result = document.getElementById('result').setAttribute('class', 'success');
    }else{
        var result = document.getElementById('result').setAttribute('class','fail');
    }

}

document.querySelector('.button').addEventListener('click', click);

function hhp(selector){

    var arr = [];

    arr.html = function(){
        if(arguments.length>0){

        }else{

        }
    }

    arr.text = function(){

    }
}
