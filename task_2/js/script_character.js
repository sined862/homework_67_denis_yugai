let urlParams = new URLSearchParams(window.location.search);
const char_id = urlParams.get('id');

$.ajax(
    {
        url: `https://www.breakingbadapi.com/api/characters/${char_id}`,
        method: 'GET',
        success: function(data, status){
            let birthday = data[0].birthday
            if(birthday === 'Unknown'){
                birthday = 'Не указано'
            }
            container = $('.container');
            $('title').text(`${data[0].name}`);
            $('.container').append('<div id="row" class="row"></div>');
            $('#row').append('<div class="card-detail col-md-8 mx-auto my-5"></div>');
            $('.card-detail').append(`
            <h3 class="text-center pt-3">${data[0].name}</h3>
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 py-4">
                    <div class="photo mb-5">
                        <img class="img_detail" src="${data[0].img}">
                    </div>
                    <div class="info">
                        <p><strong>День рождения: </strong>${birthday}</p>
                        <p><strong>Список известных занятий персонажа: </strong>${data[0].occupation} </p>
                        <p><strong>Живы ли они (или до них Гейзенберг добрался?): </strong>${data[0].status}</p>
                        <p><strong>Прозвище: </strong>${data[0].nickname}</p>
                        <p><strong>В каких сезонах снимался: </strong>${data[0].appearance}</p>
                        <p><strong>Актер/актриса, сыгравшая персонажа: </strong>${data[0].portrayed}</p>
                        <p><strong>Сериалы, в которых снимался персонаж: </strong>${data[0].category}</p>
                    </div>
                </div>
            `);
        },
        error: function(response, status){
            console.log(status)
        }
    }
)