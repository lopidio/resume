let titles = ["Lopídio", "Virgs", "Guilherme Moraes"];

function changeTitle() {
    titles = titles.concat(titles.splice(0, 1));
    $("#title").text(titles[0]);
}
