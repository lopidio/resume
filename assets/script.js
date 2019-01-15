let titles = ["Lopídio", "Virgs", "Guilherme Moraes"];

    console.log('irgsdasdads')
function changeTitle() {
    titles = titles.concat(titles.splice(0, 1));
    console.log('irgs')
    $("#title").text(titles[0]);
}
