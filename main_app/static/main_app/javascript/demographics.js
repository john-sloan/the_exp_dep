$(function() {
    $('#id_language').on('change', languageFun);
    $('#id_english_level').on('change', englishLevelFun);
});

function languageFun() {
    var lang = this.value;
    if (lang == 'EN') {
        $('.n_n_p_form').slideUp(1500);
        $('#submitDemBtn').removeAttr('disabled');
    }
    else {
        $('.n_n_p_form').slideDown(1500);
    }
}

function englishLevelFun() {
    $('#submitDemBtn').removeAttr('disabled');
}
