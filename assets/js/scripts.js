// Banner carousel
$(document).ready(function(){
    $('.anuncio_index').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000
    });
});

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

function main(){
   waitLoad();
}

window.onload = main;