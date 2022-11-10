$(function(){
    $('#add-item-btn').click(function(){
        $('#container').append(`
            <div class="modal">
                <div class="modal-content">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                    <button id="button_close" class="button_close">закрыть</button>
                </div>
            </div>
        `);
        setTimeout(function(){
            $('.modal').remove();
        }, 5000);
        $('.button_close').click(function(){
            $('.modal').remove();
        });
    });
});