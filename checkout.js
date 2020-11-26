$(document).ready(function() {
    if (sessionStorage.getItem("logBool") == null) {
        $("#logPromp").modal('show');
    }
});

