let urlParams = new URLSearchParams(window.location.search);
let char_id = urlParams.get('id');
console.log(char_id)

$.ajax(
    {
        url: ` https://www.breakingbadapi.com/api/characters/${char_id}`,
        method: 'GET',
        success: function(data, status){

        },
        error: function(response, status){
            console.log(status)
        }
    }
)