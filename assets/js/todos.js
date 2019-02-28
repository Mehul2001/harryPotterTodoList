//Check Off specific todos by clicking 
$("li").on("click", function () {
    $(this).toggleClass("clickList");
})

//Click on X to delete the todo
$("span").on("click", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
})