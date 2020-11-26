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