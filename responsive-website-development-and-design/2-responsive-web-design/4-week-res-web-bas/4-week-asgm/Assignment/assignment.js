// put your javascript code here

var category_template, animals_template;

var current_category = animals_data.category[0];
var current_animals = current_category.animals[0];

function showNav(template, data) {
    var html = template(data);
    $("#animals-tab").html(html);
}

function showTemplate(template, data) {
    var html = template(data);
    $("#content").html(html);
}

$(document).ready(function () {
    var source = $("#category-template").html();
    category_template = Handlebars.compile(source);

    source = $("#animals-template").html();
    animals_template = Handlebars.compile(source);

    showNav(category_template, animals_data);

    $("#Reptiles").click(function () {

        var index = $(this).data("id");
        current_category = animals_data.category[index];

        $(".nav-tabs .active").removeClass("active");

        $("#Reptiles").addClass("active");

        showTemplate(animals_template, current_category);
    });
    $("#Mammals").click(function () {

        var index = $(this).data("id");
        current_category = animals_data.category[index];

        $(".nav-tabs .active").removeClass("active");

        $("#Reptiles").addClass("active");

        showTemplate(animals_template, current_category);
        console.log("mammals");
    });
    $("#Birds").click(function () {

        var index = $(this).data("id");
        current_category = animals_data.category[index];

        $(".nav-tabs .active").removeClass("active");

        $("#Reptiles").addClass("active");

        showTemplate(animals_template, current_category);
    });

    $("#Reptiles").click();


});