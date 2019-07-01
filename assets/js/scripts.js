// Banner carousel
function carregaCarousel(){
    $('.anuncio_index').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000
    });

    $('.sponsor-carousel').slick({
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 7,
        infinite: true,
        slidesToScroll: 7,
        prevArrow:"<button type='button' class='slick-prev relative pull-left'></button>",
        nextArrow:"<button type='button' class='slick-next relative pull-right'></button>"
    });

    $('#novidades-carousel').slick({
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        infinite: true,
        slidesToScroll: 3,
        prevArrow:"<button type='button' class='slick-prev relative pull-left'></button>",
        nextArrow:"<button type='button' class='slick-next relative pull-right'></button>"

    });
}


// toggle navbar button
function toggleNav(x) {
    let nav_btn = document.getElementById('navbar__mobile');
    x.classList.toggle('active');
    nav_btn.classList.toggle('active');
}

function waitLoad(){
    setTimeout(function(){
        document.getElementById('imgMain').classList.add('loaded');
    },400);
}

function toggleActive(){
    let nav = document.querySelectorAll('.nav_novidades-item');
    for(let i = 0; i < nav.length; i++){
        nav[i].addEventListener('click', function() {
            if(!nav[i].classList.contains('active')){
                for(let y = 0; y < nav.length; y++){
                    nav[y].classList.remove('active');
                }
                this.classList.add('active');
            }else{
                return false;
            }
        });
    }
}

function main(){
    toggleActive();
    carregaCarousel();
    waitLoad();
}

window.onload = main;