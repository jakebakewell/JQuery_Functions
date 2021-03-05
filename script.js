$('#naruto').click(function () {
    $(this).slideUp();
});

$('#header h1').click(function () {
    $('#p_one').slideDown();
});

$('#about').click(function () {
    $('#minato').toggle();
});

$('#abilities h3').hover(function () {
    $('#abilities ul li').hide();
});

$('#rasengan').hover(function () {
    $('#abilities ul li').show();
});

$('#nav_bar').click(function () {
    $('#header h1').slideToggle(1000);
});

$('#minato').click(function () {
    $('#abilities h3').fadeOut();
});

$('#naruto').hover(function () {
    $('#abilities h3').fadeIn();
    $('#sasuke').fadeOut();
    $('#naruto').before("No Sasuke");
});