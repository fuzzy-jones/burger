$(function() {

    $("#devburger").on("click", function(event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");
    
        var newDevourBurger = {
            devoured: newDevour
        };
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourBurger
        }).then(
            function() {
            console.log("changed devour to", newDevoured);
            // Reload the page to get the updated list
            location.reload();
            }
        );
    });


    $("#addburger").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        
        var newBurger = {
            burger_name: $("#burg").val().trim()
            devoured: false
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
            console.log("added new burger");
            // Reload the page to get the updated list
            location.reload();
            }
        );
    });

});

