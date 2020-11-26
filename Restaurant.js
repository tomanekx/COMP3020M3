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

$(document).ready(function(){
    var addVal = 0.0;
    var newVal = 0.0;
    sessionStorage.setItem("currItem", 1.23);
    $("#addCart b").html(sessionStorage.getItem("currItem"));

    $("#option").change(function(){
        addVal = Number($("input[name=options]:checked").val());
        sessionStorage.setItem("currItem", sessionStorage.getItem("currItem") + addVal);
        $("#addCart b").html(sessionStorage.getItem("currItem"));
    })

    $("#addon1").click(function(){
        addVal = Number($("addon1").val());
        if($("addon1").is("checked")){
            newVal = addVal + Number(sessionStorage.getItem("currItem"));
            sessionStorage.setItem("currItem", newVal);
        }
        else{
            newVal = addVal - Number(sessionStorage.getItem("currItem"));
            sessionStorage.setItem("currItem", newVal);
        }

        $("#addCart b").html(sessionStorage.getItem("currItem"));
        
    })
    
    
})



$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
	var actions = $("table td:last-child").html();
	// Append table with add row form on add new button click
    $(".add-new").click(function(){
		//$(this).attr("disabled", "disabled");
		var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
            '<td>Item Name</td>' +
            '<td>1</td>' +
            '<td> $15.00 </td>' +
			'<td>' + actions + '</td>' +
        '</tr>';
    	$("table").append(row);		
		$("table tbody tr").eq(index + 1);//.find(".add, .edit").toggle();
        
    });
	
	// Edit row on edit button click
	$(document).on("click", ".edit", function(){		
        $(this).parents("tr").find("td:not(:last-child)").each(function(){
			$(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
		});		
		$(this).parents("tr").find(".add, .edit").toggle();
		$(".add-new").attr("disabled", "disabled");
    });
	// Delete row on delete button click
	$(document).on("click", ".delete", function(){
        $(this).parents("tr").remove();
		$(".add-new").removeAttr("disabled");
    });
});