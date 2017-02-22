$(function() {
    $(".btn-default").on("click", linkToTED);
    $('#goToExp').on("click", delayBeforeLinkToInsa)
});

function linkToTED () {
    window.location = "https://www.youtube.com/watch?v=6boGtBCbclc&index=6&list=PL6IzR3CqaV8E-gZ17a3GgpTXuI-MlNbST"
}

function delayBeforeLinkToInsa() {
    $('#backgroundDiv').fadeOut(700)
    setTimeout(linkToInsa, 700)
}

function linkToInsa() {
    window.location = "/insa"
}

