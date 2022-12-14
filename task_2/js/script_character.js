let urlParams = new URLSearchParams(window.location.search);
const char_id = urlParams.get('id');

$.ajax(
    {
        url: `https://www.breakingbadapi.com/api/characters/${char_id}`,
        method: 'GET',
        success: function(data, status){
            let birthday = data[0].birthday;
            if(birthday === 'Unknown'){
                birthday = 'Не указано'
            }else{
                let yearBirthday = birthday.substring(birthday.length - 4);
                let monthBirthday = birthday[4];
                let dayBirthday = birthday[1];
                let yearNow = new Date().getFullYear();
                let monthNow = new Date().getMonth();
                let dayNow = new Date().getDate();
                let diffYears = (yearNow - yearBirthday);
                if(monthBirthday < monthNow){
                    diffYears -= 1
                }
                else{
                    if(dayBirthday < dayNow){
                        diffYears -= 1
                    }
                }
                birthday = diffYears
            }    
            photo = data[0].img
            console.log(`Img - ${data[0].img}`)
            if(photo.length == 0){
                console.log('Нет фото')
                photo = 'no.jpg'
            }    
            container = $('.container');
            $('title').text(`${data[0].name}`);
            $('.container').append('<div id="row" class="row"></div>');
            $('#row').append('<div class="card-detail col-md-8 mx-auto my-5 pb-5"></div>');
            $('.card-detail').append(`
                <h1 class="text-center pt-3">${data[0].name}</h1>
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 py-4">
                    <div class="photo mb-5">
                        <img class="img_detail" src="${photo}" alt="photo">
                    </div>
                    <div class="info">
                        <p><strong>Возраст: </strong>${birthday}</p>
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
                    $('.card-detail').append(`<p class="mx-5">${data[i].quote}</p>`)
                    }
                }   
                $('.card-detail').append('<a class="ms-5" href="index.html">Вернуться на главную страницу</a>')  
            })
        },
        error: function(response, status){
            console.log(status)
        }
    }
)