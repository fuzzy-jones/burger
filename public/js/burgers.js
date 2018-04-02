$(function() {

    $("#devburger").on("click", function(event) {
        event.preventDefault();
        
        var id = $(this).data("burgerid");
        var name = $(this).data("burgername");
        
    
        var newDevourBurger = {
            id: id,
            burger_name: name,
            devoured: 0
        };
        
        console.log(newDevourBurger)
        // send the put request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourBurger
        }).then(
            function() {
            // console.log("changed devour to", newDevour);
            // Reload the page to get the updated list
            location.reload();
            }
        );
    });


    $("#addburger").on("submit", function(event) {
        event.preventDefault();
        
        var newBurger = {
            burger_name: $("#burg").val().trim(),
            devoured: 1
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

