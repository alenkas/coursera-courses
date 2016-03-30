// put your javascript code here

var category_template, animals_template, description_template;

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

function readMore() {
    var index = $(this).data("id");
    current_animal = current_category.animals[index];

    showTemplate(description_template, current_animal);

    $(".js-back").click(loadAnimals);

    $('.carousel').carousel({
        interval: 10000
    });
}

function loadAnimals() {
    var index = $(this).data("id");
    current_category = animals_data.category[index];

    $(".nav-tabs .active").removeClass("active");

    $(this).addClass("active");

    showTemplate(animals_template, current_category);

    $(".thumbnail img, .thumbnail .btn").click(readMore);
}



$(document).ready(function() {
    var source = $("#category-template").html();
    category_template = Handlebars.compile(source);

    source = $("#animals-template").html();
    animals_template = Handlebars.compile(source);

    source = $("#description-template").html();
    description_template = Handlebars.compile(source);

    showNav(category_template, animals_data);

    $(".nav-tabs li").click(loadAnimals);
    $(".nav-tabs li:first-child").click();

});