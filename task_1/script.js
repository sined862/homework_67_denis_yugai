$(function(){
    let btnOpen = $('#add-item-btn');
    let container = $('#container');
    btnOpen.on('click', function(){
        container.append('<div id="notice"></div>');
        $('#notice').addClass('modal')
        $('#notice').append('<p>Уведомление</p>');
        $('#notice').append('<input id="close-btn" type="button" value="Закрыть">');
        console.log($('p'));
        btnClose = $('#close-btn');
        setTimeout(function(){
            $('#notice').remove();
        }, 5000);
        btnClose.on('click', function(){
            $('#notice').remove();
        })
    });
})