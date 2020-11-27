$('#recipeCarousel').carousel({
    interval: 0
})

$('.carousel .carousel-item').each(function() {
    var minPerSlide = 5;
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});

$(document).ready(function() {
    var addVal = 0.0;
    var newVal = 0.0;
    var prevVal = 0.0; 
    
    sessionStorage.setItem("currItem", 10.00);
    $("#addCart b").html(sessionStorage.getItem("currItem"));

    $("#option").change(function() {
        addVal = Number($("input[name=options]:checked").val());
        newVal = addVal - prevVal + Number(sessionStorage.getItem("currItem"));
        prevVal = addVal;
        sessionStorage.setItem("currItem", newVal);
        $("#addCart b").html(sessionStorage.getItem("currItem"));
    });
    var check1 = false; 
    $("#addon1").click(function() {
        
        addVal = Number($("#addon1").val());
        if (!check1) {
            newVal = addVal + Number(sessionStorage.getItem("currItem"));
            sessionStorage.setItem("currItem", newVal);
            check1 = true; 
        } else {
            newVal = - addVal + Number(sessionStorage.getItem("currItem"));
            sessionStorage.setItem("currItem", newVal);
            check1 = false; 
        }

        $("#addCart b").html(sessionStorage.getItem("currItem"));

    });
    var check2 = false; 
    $("#addon2").click(function() {
        
        addVal = Number($("#addon2").val());
        if (!check2) {
            newVal = addVal + Number(sessionStorage.getItem("currItem"));
            sessionStorage.setItem("currItem", newVal);
            check2 = true; 
        } else {
            newVal = - addVal + Number(sessionStorage.getItem("currItem"));
            sessionStorage.setItem("currItem", newVal);
            check2 = false; 
        }

        $("#addCart b").html(sessionStorage.getItem("currItem"));

    });
    var check3 = false; 
    $("#addon3").click(function() {
        
        addVal = Number($("#addon3").val());
        if (!check3) {
            newVal = addVal + Number(sessionStorage.getItem("currItem"));
            sessionStorage.setItem("currItem", newVal);
            check3 = true; 
        } else {
            newVal = - addVal + Number(sessionStorage.getItem("currItem"));
            sessionStorage.setItem("currItem", newVal);
            check3 = false; 
        }

        $("#addCart b").html(sessionStorage.getItem("currItem"));

    });
    var check4 = false; 
    $("#addon4").click(function() {
        
        addVal = Number($("#addon4").val());
        if (!check4) {
            newVal = addVal + Number(sessionStorage.getItem("currItem"));
            sessionStorage.setItem("currItem", newVal);
            check4 = true; 
        } else {
            newVal = - addVal + Number(sessionStorage.getItem("currItem"));
            sessionStorage.setItem("currItem", newVal);
            check4 = false; 
        }

        $("#addCart b").html(sessionStorage.getItem("currItem"));

    });


});



$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
    var actions = $("table td:first-child").html();
    // Append table with add row form on add new button click
    $(".add-new").click(function() {
        //$(this).attr("disabled", "disabled");
        var price = sessionStorage.getItem("currItem");
        var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
            '<td>' + actions + '   </td>' +
            '<td>Item Name</td>' +
            '<td>1</td>' +
            '<td>$' + price + '</td>' +

            '</tr>';
        $("table").append(row);
        $("table tbody tr").eq(index + 1); //.find(".add, .edit").toggle();

    });

    // Edit row on edit button click
    $(document).on("click", ".edit", function() {
        $(this).parents("tr").find("td:not(:last-child)").each(function() {
            $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
        });
        $(this).parents("tr").find(".add, .edit").toggle();
        $(".add-new").attr("disabled", "disabled");
    });
    // Delete row on delete button click
    $(document).on("click", ".delete", function() {
        $(this).parents("tr").remove();
        $(".add-new").removeAttr("disabled");
    });
});


$(document).ready(function() {
    if(sessionStorage.getItem("restName")!= null){
       document.getElementById("restName").innerHTML = sessionStorage.getItem("restName"); 
    }
    
});