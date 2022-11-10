$.ajax(
    {
        url: 'https://www.breakingbadapi.com/api/characters',
        method: 'GET',
        success: function(data, status){
            let container = $('.container');
            container.append('<h3 class="text-center mt-5">Персонажи сериала "Во все тяжкие"</h3>')
            container.append('<div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 my-5"></div>')
            for(i=0; i<data.length; i++){
                $('.row').append(`              
                        <a href="character.html?id=${data[i].char_id}" class="text-decoration-none text-black">
                            <div class="card my-2 mx-2">
                                <img src="${data[i].img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">${data[i].name}</h5>
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

