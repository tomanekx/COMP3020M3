document.getElementById("login").onclick = function(){
    $("#outNav").removeClass("disabled");
    $("#accNav").removeClass("disabled");
    $("#logNav").addClass("disabled");
    $("#signNav").addClass("disabled");
    sessionStorage.setItem("logBool", true);
}
document.getElementById("signup").onclick = function(){
    $("#outNav").removeClass("disabled");
    $("#accNav").removeClass("disabled");
    $("#logNav").addClass("disabled");
    $("#signNav").addClass("disabled");
    sessionStorage.setItem("logBool", true);
}
document.getElementById("outNav").onclick = function(){
    $("#outNav").addClass("disabled");
    $("#accNav").addClass("disabled");
    $("#logNav").removeClass("disabled");
    $("#signNav").removeClass("disabled");
    sessionStorage.removeItem("logBool");
}
$(document).ready(function() {
    if (sessionStorage.getItem("logBool") != null) {
        $("#outNav").removeClass("disabled");
        $("#accNav").removeClass("disabled");
        $("#logNav").addClass("disabled");
        $("#signNav").addClass("disabled");
        
    }


});
// document.getElementById("Pines").onclick = function(){
    
//     sessionStorage.setItem("restName", "Pines Cuisine");
    

// }
$(".Pines").on('click', function(event){

    sessionStorage.setItem("restName", "Pines Cuisine");
});

$(".Crown").on('click', function(event){

    sessionStorage.setItem("restName", "Crown Eatery");
});
$(".Lime").on('click', function(event){

    sessionStorage.setItem("restName", "Lime Pub");
});
$(".Honey").on('click', function(event){

    sessionStorage.setItem("restName", "The Honeybee Pubhouse");
});
$(".Tilted").on('click', function(event){

    sessionStorage.setItem("restName", "Tilted Delight & Co");
});
$(".Garden").on('click', function(event){

    sessionStorage.setItem("restName", "The Garden Kitchen");
});
$(".Apple").on('click', function(event){

    sessionStorage.setItem("restName", "Little Apple Eats");
});
$(".Street").on('click', function(event){

    sessionStorage.setItem("restName", "Street Eats");
});
$(".tastes").on('click', function(event){

    sessionStorage.setItem("restName", "tastes n taps");
});