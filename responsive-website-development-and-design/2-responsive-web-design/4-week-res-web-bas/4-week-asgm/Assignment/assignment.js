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

$(document).ready(function () {
    var source = $("#category-template").html();
    category_template = Handlebars.compile(source);

    source = $("#animals-template").html();
    animals_template = Handlebars.compile(source);

    source = $("#description-template").html();
    description_template = Handlebars.compile(source);

    showNav(category_template, animals_data);

    $("#Reptiles").click(function () {

        var index = $(this).data("id");
        current_category = animals_data.category[index];

        $(".nav-tabs .active").removeClass("active");

        $("#Reptiles").addClass("active");

        showTemplate(animals_template, current_category);

        $(".btn").click(function(){
            console.log("click");
            console.log(current_animal);

            var index = $(this).data("id");

            current_animal = current_category.animals[index];

            showTemplate(description_template, current_animal);

            $('.carousel').carousel({
                interval: 2000
            });
        });
    });
    $("#Mammals").click(function () {

        var index = $(this).data("id");
        current_category = animals_data.category[index];

        $(".nav-tabs .active").removeClass("active");

        $("#Mammals").addClass("active");

        showTemplate(animals_template, current_category);

        $(".btn").click(function(){
            console.log("click");
            console.log(current_animal);

            var index = $(this).data("id");

            current_animal = current_category.animals[index];

            showTemplate(description_template, current_animal);

            $('.carousel').carousel({
                interval: 2000
            });
        });
    });
    $("#Birds").click(function () {

        var index = $(this).data("id");
        current_category = animals_data.category[index];

        $(".nav-tabs .active").removeClass("active");

        $("#Birds").addClass("active");

        showTemplate(animals_template, current_category);

        $(".btn").click(function(){
            console.log("click");
            console.log(current_animal);

            var index = $(this).data("id");

            current_animal = current_category.animals[index];

            showTemplate(description_template, current_animal);

            $('.carousel').carousel({
                interval: 2000
            });
        });
    });

    $("#Reptiles").click();




});