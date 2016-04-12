$(function() {

    function changeContent(templ) {
    	// Hide previous content before loading new one
        $("#content").find("div").css("display", "none");
        // Make requested content visible to user
        templ.style.display = "block";
        $("#content").append(templ);
    }

    $(".nav-pills").find("a").click(function() {
    	// Get element by data-link attribute
        var link = $(this).data("link");
        // When any link in menu nav is clicked open its content
        $(this).click(function() {
        	// Get template by id
            var template = document.getElementById(link + "_templ");
            // Pass template html data to function so that it is shown
            // to user
            changeContent(template);
        });
    });

    // Imitate that first link in menu is clicked on load
    $(".nav-pills").find("li:first-child a").click();    
})
