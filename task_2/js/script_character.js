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
            $('#row').append('<div class="card-detail col-md-8 mx-auto my-5 pb-5"></div>');
            $('.card-detail').append(`
                <h1 class="text-center pt-3">${data[0].name}</h1>
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
            $.get(`https://www.breakingbadapi.com/api/quote?author=${data[0].name}`, function(data){
                console.log(data)
                if(data.length > 0){
                    $('.card-detail').append(`
                    <h2 class="text-center mb-5"><strong>Цитаты:</strong></h2>
                    `)
                    for(let i=0; i<data.length; i++){
                    $('.card-detail').append(`<p class="ms-5">${data[i].quote}</p>`)
                    }
                }      
            })
        },
        error: function(response, status){
            console.log(status)
        }
    }
)