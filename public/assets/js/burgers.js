$(function () {
    $(".eat-or-uneat").on("click", function (event) {
        var id = $(this).data("id");
        var burgerState = $(this).data("burgerState");

        var newBurgerState = {
            devoured: burgerState
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(
            function () {
                console.log("Changed devoured to" + burgerState);
                location.reload();
            }
        );
    });
});