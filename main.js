$('#btn').on('click',function(e){
    e.preventDefault();
    e.stopPropagation();   
    $('.clear').addClass('removeMe');
    $('.result').addClass('jumbotron');
    let num = Math.floor(Math.random() * 10)
    $.ajax({
        type: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + $('#form').val() + "&APPID=4a82d86f036232da0fff556077455cb2&units=metric",       
        dataType: "json",
        success: function (data) {
                $.ajax({
                    type: "GET",
                    url: "http://api.giphy.com/v1/gifs/search?q=" +'weather +' + data.weather[0].main  + "&api_key=YbRs7KuHGNrKFx2CIRApv2B6PgT2aSyh&limit=10",
                    dataType: "json",
                    success: function (response) {
                        
                        $('.result').append(
                            
                            '<h1 class="display-3 clear">Weather in ' + data.name +  '</h1>',
                            '<h1 class="display-4 clear">Temprature: ' + data.main.temp + ' °C</h1>',
                            '<h1 class="display-4 clear">Feels: ' + data.weather[0].main + '</h1>',                      
                            '<img class="clear" src="' + response.data[num].images.downsized.url + '">'
                        )
                        $(".removeMe").remove();
                        $('#form').val('');
                    }
                });
        }
    })
})






