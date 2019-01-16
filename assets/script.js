let titles = ["Lopídio", "Virgs", "Guilherme Moraes"];

function changeTitle() {
    titles = titles.concat(titles.splice(0, 1));
    $(".g-main-title").text(titles[0]);
}

const headerHeight = $('.g-header').css('height').replace(/[^-\d\.]/g, '') / 2;
window.onscroll = function () {
    if (document.documentElement.scrollTop - headerHeight > 50 ) {
        $('.g-header').addClass('shrink');
        $('.g-links').addClass('shrink');
        $('.g-title').addClass('shrink');
        $('.g-subtitle').addClass('shrink');
        $('.g-main-title').addClass('shrink');
    } else if (document.documentElement.scrollTop === 0 ){
        $('.g-header').removeClass('shrink');
        $('.g-links').removeClass('shrink');
        $('.g-title').removeClass('shrink');
        $('.g-subtitle').removeClass('shrink');
        $('.g-main-title').removeClass('shrink');
    }
};
