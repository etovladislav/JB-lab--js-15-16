$(function(){
    var temp;
    temp = doT.template(
        $('#temp1').text()
    );

    $('#button').on('click',function(){
        var sendM = $('#input1').val();
        var color = $('#color').val();
        var date = new Date();
        $('#message').append(
            temp({
                text: sendM,
                date: date,
                color: 'border:1px solid '+color
            })
        )
    })
})
