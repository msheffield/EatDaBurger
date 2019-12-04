$(function () {
    $(".eat-or-uneat").on("click", function (event) {
        var id = $(this).data("id");
        var devouredState = $(this).data("burgerstate");

        var newBurgerState = {
            devoured: devouredState
        };


        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(
            function () {
                console.log("Changed devoured to" + devouredState);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#new-burger").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        console.log("new burger:", newBurger);

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created a new burger");
                location.reload();
            }
        );
    });
});