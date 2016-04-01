// put your javascript code here

var main_page_template, category_template, animals_template, animal_heading_template, description_template, animal_template, same_category_animals, about_template;

var current_category = animals_data.category[0];
var current_animal = current_category.animals[0];

function showNav(template, data) {
    var html = template(data);
    $("#animals-tab").html(html);
}

function showTemplate(template, data) {
    var html = template(data);
    $("#content").html(html);
}

function animalHeading(template, data) {
    var html = template(data);
    $("#heading").html(html);
}

function showAnimalInfo(template, data) {
    var html = template(data);
    $("#animal").html(html);
}

function showOtherAnimals(template, data) {
    var html = template(data);
    $("#other-animals").html(html);
}

function loadAnotherAnimal(template, data) {
    var html = template(data);
    $("#animal").html(html);
}

function breadcrumbLinks() {
    $(".breadcrumb").find("a").click(function() {
        var clickedLink = $(this).attr("data-link");
        if (clickedLink == "home") {
            $("#main").click();
        } else if (clickedLink == "animals") {
            $("#animals").click();
        }
    });
}

function readMore(event) {
    $("#heading").removeClass("hidden");
    var animal_index = $(this).data("id");
    current_animal = current_category.animals[animal_index];

    $("#animals-tab").addClass("hidden");

    showTemplate(description_template, current_animal);

    showAnimalInfo(animal_template, current_animal);

    showOtherAnimals(same_category_animals, animals_data.category[event.data.param]);

    $(".media").click(function() {
        var animal_index = $(this).data("id");
        current_animal = current_category.animals[animal_index];

        loadAnotherAnimal(animal_template, current_animal);

        $(".js-back").attr("data-id", event.data.param);
        $(".js-back").click(loadAnimalsList);
    });

    breadcrumbLinks();

    $(".js-back").attr("data-id", event.data.param);
    $(".js-back").click(loadAnimalsList);

    $('.carousel').carousel({
        interval: 3000
    });

}

function loadAnimalsList() {

    $("#heading").addClass("hidden");
    $("#animals-tab").removeClass("hidden");
    var category_index = $(this).data("id");
    current_category = animals_data.category[category_index];

    $(".nav-tabs .active").removeClass("active");

    $(".nav-tabs li[data-id=" + category_index + "]").addClass("active");

    animalHeading(animal_heading_template, current_category);
    showTemplate(animals_template, current_category);

    $(".thumbnail img, .thumbnail .btn").click({ param: category_index }, readMore);
}

$(document).ready(function() {
    var source = $("#main-page-template").html();
    main_page_template = Handlebars.compile(source);

    source = $("#category-template").html();
    category_template = Handlebars.compile(source);

    source = $("#animals-template").html();
    animals_template = Handlebars.compile(source);

    source = $("#animal-heading-template").html();
    animal_heading_template = Handlebars.compile(source);

    source = $("#description-template").html();
    description_template = Handlebars.compile(source);

    source = $("#animal-template").html();
    animal_template = Handlebars.compile(source);

    source = $("#same-category-animals").html();
    same_category_animals = Handlebars.compile(source);

    source = $("#about-template").html();
    about_template = Handlebars.compile(source);

    // hide #animals-tab when user click other menu links
    $(".navbar-nav a").click(function(e) {
        if (e.target.id == "animals") {
            $("#animals-tab").removeClass("hidden");
            $("#heading").removeClass("hidden");
        } else {
            $("#animals-tab").addClass("hidden");
            $("#heading").addClass("hidden");
        }
    });

    // Navigation between menu links

    $("#main").click(function() {
        showTemplate(main_page_template);
        breadcrumbLinks();
    });

    $("#animals").click(function() {
        showNav(category_template, animals_data);
        // Navigate between animals categories tabs
        $(".nav-tabs li").click(loadAnimalsList);
        $(".nav-tabs li:first-child").click();
        breadcrumbLinks();
    });

    $("#about").click(function() {
        showTemplate(about_template);
        breadcrumbLinks();
    });

    $("#main").click();

});
