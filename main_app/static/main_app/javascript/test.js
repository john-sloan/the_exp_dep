var q = 1;
$(function(){
    console.log('im here')
    $('#startBtn').on('click', startQuestions);
    $('.qBtn').on('click', nextQuestion);
    $('#goNextBtn').on('click', goNextBtn);
});

function startQuestions() {
    $('#intro').fadeOut(500);
    setTimeout(showNextQuestion, 500);
}

function nextQuestion() {
    w = '#question' + String(q)
    input = '#form' + String(q)
    $('#allAnswers').append($('input[name=ans]:checked', input).val())
    $(w).fadeOut(500);
    q += 1;
    setTimeout(showNextQuestion, 500);
};

function showNextQuestion() {
    x = '#question' + String(q)
    console.log('this is q:', x)
    $(x).fadeIn(500);
};

function goNextBtn() {
    $('#backgroundDiv').fadeOut(700);
    setTimeout(goGoNextBtn, 700);
};

function goGoNextBtn() {
    $.ajax({
        type:"GET",
        url:"/test_submission",
        data: {
            "answers": $('#allAnswers').html()
        },
        success: function(json) {
            window.location = "/faces_intro"
        },
    });
};