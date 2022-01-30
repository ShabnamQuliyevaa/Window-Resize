$(function() {

    let h1 = document.querySelector('h1');

    // $('h1').innerHTML = islemir?


    h1.innerHTML = `Width: ${$(window).width()} px<br>Height: ${$(window).height()} px`;


    $(window).resize(function() {


        let width = $(window).width();
        let height = $(window).height();

        h1.innerHTML = `Width: ${width} px<br>Height: ${height} px`;

    })

});