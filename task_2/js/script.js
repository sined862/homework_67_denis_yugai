$.ajax(
    {
        url: 'https://www.breakingbadapi.com/api/characters',
        method: 'GET',
        success: function(data, status){
            let container = $('.container');
            container.append('<h1 class="title text-center mt-5">Персонажи сериала "Во все тяжкие"</h1>')
            container.append('<div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 my-5"></div>')
            for(i=0; i<data.length; i++){
                let birthday = data[i].birthday;
                if(birthday === 'Unknown'){
                    birthday = 'Не указан'
                }
                $('.row').append(`              
                        <a href="character.html?id=${data[i].char_id}" class="text-decoration-none text-black">
                            <div class="my_card card my-3 mx-2">
                                <img src="${data[i].img}" class="img-card card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title text-center">${data[i].name}</h5>
                                </div>
                            </div>
                        </a>               
                `)
            }
            console.log(data.length)
            console.log(data);
            console.log(status);
            console.log(data[13].img)
        },
        error: function(response, status){
            console.log(status)
        }
    }
);

