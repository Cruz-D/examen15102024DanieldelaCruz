$(document).ready(function () {


    /*******************************/
    /*Script 1*/
    $("p").addClass("borde");

    /*******************************/
    /*Script 2*/
    $("li .azul").removeClass("azul").addClass("verde");

    /*******************************/
    /*Script 3*/
    $("p").removeClass("borde");

    /*******************************/
    /*Script 4*/
    $("p").on('click', function () {

        if (!$(this).hasClass("borde")) {

            $(this).addClass("borde");

        } else {

            $(this).removeClass("borde");

        }

    });

    /*******************************/
    /*Script 5*/
    $("ul li:not([data-hours])").selectable();

    /*******************************/
    /*Script 6*/
    $("li:empty").text("Programacion en Shell");

    /*******************************/
    /*Script 7*/

    $("p:primero").text("modulos de primero");

});