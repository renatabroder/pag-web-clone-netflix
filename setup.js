$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:5
        }
    }
})

$(document).on('click', function (e) {
    if ($('#menu-nav').css('display') == 'none'
    && $(e.target).closest("#menu-nav").length === 0
    && $(e.target)[0] != $('.botao-menu-nav')[0]) {
        $('#menu-nav').css('display', 'none');
    }
});

menu = (() => {
    let menuVisivel = $('#menu-nav').css('display') == 'none' ? false : true;

    if(!menuVisivel){
        $('#menu-nav').css('display', 'flex')
    }
    else{
        $('#menu-nav').css('display', 'none')
    } 
})

searchButton = (() =>{
    let campoVisivel = $('#search-field').css('max-width') == '0px' ? false : true;
    let valCampo = $('#search-field').val()

    console.log(campoVisivel)
    if(!campoVisivel){
        $('#search-field').removeClass('hide');
        $('.search-bar').removeClass('hide');
    }
    else if(campoVisivel && ( valCampo == '')){
        $('#search-field').addClass('hide');
        $('.search-bar').addClass('hide');    
    }
    else if(valCampo != ''){
        pesquisa();
    } 
});


$(document).on('click', function (e) {
    if ($(e.target).closest(".search-bar").length === 0) {
        $('#search-field').addClass('hide')
        $('.search-bar').addClass('hide');
    }
});