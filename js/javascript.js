$(".AltoContraste").click(function() {
    $("html, body").toggleClass("contraste");
    console.log("Ativa o contraste");
});

$(".FonteMaior").click(function() {
    // $("html, body").toggleClass("contraste");
    // $('.changeMe').css("font-size", $(this).val() + "px");
    $("html, body").css("font-size", "50px");
    console.log("Fonte Maior");
});

$(".FonteMenor").click(function() {
    $("html, body").css("font-size", "25px");
    console.log("Fonte Menor");
});