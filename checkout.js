$(document).ready(function() {
    if (sessionStorage.getItem("logBool") == null) {
        $("#logPromp").modal('show');
    }
});

$(document).ready(function() {
    if(sessionStorage.getItem("restName")!= null){
       document.getElementById("restName").innerHTML = sessionStorage.getItem("restName"); 
    }
    
});
