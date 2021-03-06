$(function() {
    function changeContent(templ) {
        var $content = $("#content");
        // Hide previous content before loading new one
        $content.children("div").css("display", "none");
        // Make requested content visible to user
        templ.style.display = "block";
        $content.append(templ);
    }

    $(".nav-pills").find("a").click(function() {
        //clickedMenuItem(this);
        //Get element by data-link attribute
        var link = $(this).data("link");
        // When any link in menu nav is clicked open its content
        // Get template by id
        var template = document.getElementById(link + "_template");
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
        create_option.setAttribute("value", data.indexOf(data[i]));
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
            case $option_value:
                $my_answer.html(data[$option_value].answer);
                break;
            default: 
            	$my_answer.html(data[0].answer);
            	break;
        }
    });

    // This crazy function creates a list of courses in profile template
    // It is not that crazy at it seems, just too much writing
    function load_courses_list(){
    	// var media_list = document.getElementDyId("media-list");
    	var list_element, media_left, media_object, media_body, media_heading, media_description, media_link;

    	for(var i = 0; i < courses.length; i++){
    		list_element = document.createElement("li");
    		list_element.className = "media thumbnail";

    		media_left = document.createElement("div");
    		media_left.className = "media-left";

    		media_object = document.createElement("img");
    		media_object.className = "media-object";
    		media_object.setAttribute("src", courses[i].img_src);
    		media_object.setAttribute("alt", courses[i].name);

    		media_body = document.createElement("div");
    		media_body.className = "media-body media-middle";

    		media_heading = document.createElement("h4");
    		media_heading.className = "media-heading";
    		media_heading.innerHTML = courses[i].name;

    		media_description = document.createElement("span");
    		media_description.innerHTML = courses[i].uni;

    		media_link = document.createElement("a");
    		media_link.setAttribute("href", "#");
    		media_link.setAttribute("data-link", courses[i].url)

    		media_list.appendChild(list_element);
    		list_element.appendChild(media_left);
    		media_left.appendChild(media_object);
    		list_element.appendChild(media_body);
    		media_body.appendChild(media_heading);
    		media_body.appendChild(media_description);
    		media_left.appendChild(media_link);
    	}
    }

    load_courses_list();

    // Simulate .media.thumbnail div to act like a link
    $(".media.thumbnail").click(function(){
    	// Get link data attribute
    	var $link = $(this).find("a").data("link");
    	// Using attribute value open link in new window
    	window.open($link, "_blank");
    });

});
