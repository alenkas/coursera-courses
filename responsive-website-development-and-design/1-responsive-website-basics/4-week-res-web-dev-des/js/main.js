$(function() {
    function changeContent(templ) {
        // Hide previous content before loading new one
        $("#content").children("div").css("display", "none");
        // Make requested content visible to user
        templ.style.display = "block";
        $("#content").append(templ);
    }

    $(".nav-pills").find("a").click(function() {
        //clickedMenuItem(this);
        //Get element by data-link attribute
        var link = $(this).data("link");
        // When any link in menu nav is clicked open its content
        // Get template by id
        var template = document.getElementById(link + "_templ");
        // Pass template html data to function so that it is shown
        // to user
        changeContent(template);
    });

    // Simulate that first link in menu to be clicked on load
    $(".nav-pills").find("li:first-child a").trigger("click");

    // Get element by its id
    var select_questions = document.getElementById("questions");
    var create_option;
    // for each item in the array create an option with its unique
    // id and unique text
    for (var i = 0; i < data.length; i++) {
        create_option = document.createElement("option");
        // set unique id for each item
        create_option.setAttribute("value", data[i].id);
        // set unique text for each item
        create_option.text = data[i].question;
        // append aeach item to its parent - select - so that they are
        // visible on the page
        select_questions.appendChild(create_option);
    }

    // Each time user select any option from questions list this 
    // function is called
    $("#questions").change(function() {
        var $my_answer = $("#my-answer");
        // get value from selected option and turn it into number 
        // (by default it is a string)
        var $option_value = parseInt($("#questions").find("option:selected").val());
        // Works the same way as if statement - if user chose question one
        // then show this answer
        switch ($option_value) {
            case 0:
                $my_answer.html(data[$option_value].answer);
                break;
            case 1:
                $my_answer.html(data[$option_value].answer);
                break;
            case 2:
                $my_answer.html(data[$option_value].answer);
                break;
            case 3:
                $my_answer.html(data[$option_value].answer);
                break;
        }
    });

});
