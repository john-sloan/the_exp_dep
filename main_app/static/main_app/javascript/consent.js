$(function() {
    $('#yesBtn').on('click', allChecked);
    $('#noBtn').on('click', byeBye);
    $('.x-box').on('click', disappearDisagree);
});

function delayBeforeLinkToDemographics() {
    $('#backgroundDiv').fadeOut(700)
    setTimeout(linkToDemographics, 700)
}

function linkToDemographics() {
    window.location = "/demographics"
}

function allChecked() {
    if ($('.consent_check').not(':checked').length > 0) {
        $('.warning-div').slideDown(1000);
    }
    else {
        $.ajax({
        type:"GET",
        url:"/log_in",
        success: function(data) {
            delayBeforeLinkToDemographics();
            },
        })
    }
}

function byeBye() {
    $('.whole-background').fadeIn(500);
    $('.why-not').fadeIn(500);
    $('#why-not-text').focus();
}

function disappearDisagree () {
    $('.whole-background').hide();
    $('.why-not').hide();
}

