function swapStyleSheet(sheet){
    document.getElementById('pagestyle').setAttribute('href', sheet);

}

document.getElementById("matches").onclick = function() {
    location.href = "matches.html";
}