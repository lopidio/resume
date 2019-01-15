let titles = ["Lopídio", "Virgs", "Guilherme Moraes"];

function changeTitle() {
    titles = titles.concat(titles.splice(0, 1));
    $(".g-main-title").text(titles[0]);
}
