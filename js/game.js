const WIDTH = 500;
const HEIGH = 500;

let target = {
    x: getRandom(WIDTH),
    y: getRandom(HEIGH)
};

let $map = document.getElementById("map");
let $distance = document.getElementById("distance");
let clicks = 0;

$map.addEventListener("click", function(e){
    clicks++;

    let distance = getDistance(e, target);
    let distanceHint = getDistanceHint(distance);
    $distance.innerHTML = `<h2>${distanceHint}</h2>`;

    if(distance < 10){
        return $distance.innerHTML = `<h1>解码成功！找到啦！ ${clicks} clicks!!<h1> <button onclick="location.reload()">Reiniciar juego</button> <audio src="../audios/bites-ta-da-winner.mp3" autoplay></audio>`
    }
});