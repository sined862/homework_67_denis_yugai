let urlParams = new URLSearchParams(window.location.search);
const char_id = urlParams.get('id');

$.ajax(
    {
        url: `https://www.breakingbadapi.com/api/characters/${char_id}`,
        method: 'GET',
        success: function(data, status){
            container = $('.container')
            $('title').text(`${data[0].name}`)
            console.log(data)
        },
        error: function(response, status){
            console.log(status)
        }
    }
)