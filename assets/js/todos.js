//Check Off specific todos by clicking 
$("ul").on("click", "li", function () {
    $(this).toggleClass("clickList");
})

//Click on X to delete the todo
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
})


$("input[type = 'text']").keypress(function (event) {
    if (event.which === 13) {
        //grabbing new Todo from input
        var todoText = $(this).val();
        $(this).val("");
        // create a new li and add to todo
        $("ul").append("<li><span>X </span>" + todoText + "</li>");

    }
})