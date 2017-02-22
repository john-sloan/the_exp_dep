var sentence_no = 0
var good_sent = true
var this_sent = ''
$(function(){
    sentence_no = parseInt($('#sentence_no').html())
    if (sentence_no != 0) {
        $('.intro-text').hide()
        $('.textbox').show()
        $('.instruction-no').html(sentence_no + 1)
        $('.mery-background').css('background-image', 'url(/static/main_app/mery_imgs/mery_faces/mery_static_' + sentence_no + '.jpg)')
        $('.mery-sprite-1').css('background-image', 'url(/static/main_app/mery_imgs/mery_faces/mery_faces_0' + sentence_no + '.jpg)')
        $('.questionbox').show();
    }
    $('#showQuestionButton').on('click', showQuestion);
    $('.sendTextButton').on('click', start);
    $('.mery-sprite').css('background-position', getPosition(2));
    $('#s31Btn').on('click', showQ32);
    $('#s32Btn').on('click', submitS3qs);
    $('#s51Btn').on('click', submitS5q);
    $('#s61Btn').on('click', submitS6q);
    $(".qForm").submit(function(e){
        e.preventDefault();
    });
    blinkInterval_01 = setInterval(static_blink, 3000);
});

function showQuestion() {
    console.log("type_sentence_no:", parseInt(sentence_no))
    $('.intro-text').fadeOut(500);
    $('.questionbox').fadeIn(500);
    setTimeout(showTextBox, 1000);
}

function showTextBox() {
    $('.textbox').fadeIn(500);
}

function getRows(selector) {
    var height = $(selector).height();
    if (height < 30) {
        rows = 1
    }
    else if (height > 30 && height < 60) {
        rows = 2
    }
    else if (height > 60 && height < 80) {
        rows = 3
    }
    else {
        rows = 4
    }
    return rows;
}

function getPosition(f) {
    var framePos = (f - 1) * -320;
    return '0px '.concat(framePos, 'px');
}


var cyclesSinceBlink = 0
var framerate = 100
var line_to_line_framerate = 130
var pauseAtEndOfEachLine = 200
var pauseAtBeginningOfEachLine = 100
var neu_blink = 1
var neu_open = 2
var frame = 2 
var eye_00f = 12
var eye_01 = 13
var eye_02 = 14
var eye_02f = 18
var eye_10 = 19
var eye_10f = 22
var eye_11 = 23
var eye_12 = 24
var eye_12f = 28
var eye_12_1 = 29
var eye_12_2 = 30
var eye_12_3 = 33
var eye_20 = 34
var eye_20f = 38
var eye_21 = 39
var eye_22 = 40
var eye_22f = 44
var eye_22_1 = 45
var eye_22_2 = 46
var eye_22_3 = 49
var eye_30 = 50
var eye_30f = 55
var eye_31 = 56
var eye_32 = 57
var eye_32f = 61
var eye_32_1 = 62
var eye_32_2 = 63
var eye_32_3 = 66
var eye_02f_copy = 67
var smile_open = 76
var smile_blink = 77
var big_smile_open = 99
var confused = 100


function static_blink() {
    cyclesSinceBlink += 1
    var x = Math.random() * 3;
    console.log("yoyo", x);
    if (x < 1 || cyclesSinceBlink > 2) {
        cyclesSinceBlink = 0;
        $('.mery-sprite').css('background-position', getPosition(neu_blink))
        setTimeout(function(){$('.mery-sprite').css('background-position', getPosition(neu_open))}, 100)
    }
}

function start() {
    frame = 2
    this_sent = $('#myTextBox').val()
    send_ajax(this_sent)
    $('.textbox').fadeOut(1000);
};
    
function delay_for_check_ajax() {
    $('.sentenceBox').html($('#myTextBox').val()).fadeIn(1000);
    setTimeout(delayBeforeToRead, 1000);


    var rows = 1
    function delayBeforeToRead() {
        rows = getRows('.sentenceBox');
        console.log("number of rows:", rows)
        clearInterval(blinkInterval_01);
        toReadInterval = setInterval(toRead, framerate);
    }

    function toRead() {
        console.log("toRead")
        frame += 1
        if (frame <= eye_00f) {
            $('.mery-sprite').css('background-position', getPosition(frame))
        }
        else if (frame > eye_00f) {
            clearInterval(toReadInterval)
            if (rows > 1) {
                setTimeout(eye_10_fun, 50)
            }
            else {
                setTimeout(line_0, pauseAtBeginningOfEachLine)
            }
        }
    }

    function eye_10_fun() {
        $('.mery-sprite').css('background-position', getPosition(eye_10))
        if (rows > 2) {
            setTimeout(eye_20_fun, 50)
        }
        else {
            frame = eye_10
            to_eye_10f_interval = setInterval(eye_10f_fun, framerate)
        }
    }

    function eye_10f_fun() {
        frame += 1
        if (frame <= eye_10f) {
            $('.mery-sprite').css('background-position', getPosition(frame))
        }
        else {
            clearInterval(to_eye_10f_interval)
            setTimeout(line_1, 800)
        }
    }

    function eye_20_fun() {
        $('.mery-sprite').css('background-position', getPosition(eye_20))
        if (rows > 3) {
            setTimeout(eye_30_fun, 50)
        }
        else {
            frame = eye_20
            to_eye_20f_interval = setInterval(eye_20f_fun, framerate)
        }
    }

    function eye_20f_fun() {
        frame += 1
        if (frame <= eye_20f) {
            $('.mery-sprite').css('background-position', getPosition(frame))
        }
        else {
            clearInterval(to_eye_20f_interval)
            setTimeout(line_2, 800)
        }
    }

    function eye_30_fun() {
        $('.mery-sprite').css('background-position', getPosition(eye_30))
        frame = eye_30
        to_eye_30f_interval = setInterval(eye_30f_fun, framerate)
    }

    function eye_30f_fun() {
        frame += 1
        if (frame <= eye_30f) {
            $('.mery-sprite').css('background-position', getPosition(frame))
        }
        else {
            clearInterval(to_eye_30f_interval)
            setTimeout(line_3, 800)
        }
    }
    function line_3() {
        $('.mery-sprite').css('background-position', getPosition(eye_31))
        setTimeout(eye_32_fun, 200)

        function eye_32_fun() {
            $('.mery-sprite').css('background-position', getPosition(eye_32))
            frame = eye_32
            eye_32f_interval = setInterval(eye_32f_fun, framerate)
        }

        function eye_32f_fun() {
            frame += 1
            if (frame <= eye_32f) {
                $('.mery-sprite').css('background-position', getPosition(frame))
            }
            else {
                clearInterval(eye_32f_interval)
                setTimeout(eye_32_1_fun, pauseAtEndOfEachLine + 100)
            }
        }

        function eye_32_1_fun() {
            $('.mery-sprite').css('background-position', getPosition(eye_32_1))
            setTimeout(eye_32_2_fun, 50)
        }

        function eye_32_2_fun() {
            $('.mery-sprite').css('background-position', getPosition(eye_32_2))
            frame = eye_32_2
            eye_32_3_interval = setInterval(eye_32_3_fun, line_to_line_framerate)
        }

        function eye_32_3_fun() {
            frame += 1
            if (frame <= eye_32_3) {
                $('.mery-sprite').css('background-position', getPosition(frame))
            }
            else {
                clearInterval(eye_32_3_interval)
                setTimeout(line_2, pauseAtBeginningOfEachLine - 100)
            }
        }
    }

    function eye_20f_fun() {
            frame += 1
            if (frame <= eye_20f) {
                $('.mery-sprite').css('background-position', getPosition(frame))
            }
            else {
                clearInterval(to_eye_20f_interval)
                setTimeout(line_2, 800)
            }
        }
    function line_2() {

        $('.mery-sprite').css('background-position', getPosition(eye_21))
        setTimeout(eye_22_fun, 200)

        function eye_22_fun() {
            $('.mery-sprite').css('background-position', getPosition(eye_22))
            frame = eye_22
            eye_22f_interval = setInterval(eye_22f_fun, 100)
        }

        function eye_22f_fun() {
            frame += 1
            if (frame <= eye_22f) {
                $('.mery-sprite').css('background-position', getPosition(frame))
            }
            else {
                clearInterval(eye_22f_interval)
                setTimeout(eye_22_1_fun, pauseAtEndOfEachLine - 100)
            }
        }

        function eye_22_1_fun() {
            $('.mery-sprite').css('background-position', getPosition(eye_22_1))
            setTimeout(eye_22_2_fun, 50)
        }

        function eye_22_2_fun() {
            $('.mery-sprite').css('background-position', getPosition(eye_22_2))
            frame = eye_22_2
            eye_22_3_interval = setInterval(eye_22_3_fun, line_to_line_framerate)
        }

        function eye_22_3_fun() {
            frame += 1
            if (frame <= eye_22_3) {
                $('.mery-sprite').css('background-position', getPosition(frame))
            }
            else {
                clearInterval(eye_22_3_interval)
                setTimeout(line_1, pauseAtBeginningOfEachLine)
            }
        }
    }

    function eye_10f_fun() {
        console.log('in 10f_fun')
        frame += 1
        if (frame <= eye_10f) {
            $('.mery-sprite').css('background-position', getPosition(frame))
        }
        else {
            clearInterval(to_eye_10f_interval)
            setTimeout(line_1, 800)
        }
    }
    function line_1 () {

        $('.mery-sprite').css('background-position', getPosition(eye_11))
        setTimeout(eye_12_fun, 200)

        function eye_12_fun() {
            $('.mery-sprite').css('background-position', getPosition(eye_12))
            frame = eye_12
            eye_12f_interval = setInterval(eye_12f_fun, 100)
        }

        function eye_12f_fun() {
            frame += 1
            if (frame <= eye_12f) {
                $('.mery-sprite').css('background-position', getPosition(frame))
            }
            else {
                clearInterval(eye_12f_interval)
                setTimeout(eye_12_1_fun, pauseAtEndOfEachLine)
            }
        }

        function eye_12_1_fun() {
            $('.mery-sprite').css('background-position', getPosition(eye_12_1))
            setTimeout(eye_12_2_fun, 50)
        }

        function eye_12_2_fun() {
            $('.mery-sprite').css('background-position', getPosition(eye_12_2))
            frame = eye_12_2
            eye_12_3_interval = setInterval(eye_12_3_fun, line_to_line_framerate)
        }

        function eye_12_3_fun() {
            frame += 1
            if (frame <= eye_12_3) {
                $('.mery-sprite').css('background-position', getPosition(frame))
            }
            else {
                clearInterval(eye_12_3_interval)
                setTimeout(line_0, pauseAtBeginningOfEachLine)
            }
        }
    }


    function line_0() {
        console.log("toline_0")
        $('.mery-sprite').css('background-position', getPosition(eye_01))
        setTimeout(eye_02_fun, 200)

        function eye_02_fun() {
            $('.mery-sprite').css('background-position', getPosition(eye_02))
            frame = eye_02
            eye_02f_interval = setInterval(eye_02f_fun, 100)
        }

        function eye_02f_fun() {
            frame += 1
            if (frame <= eye_02f) {
                $('.mery-sprite').css('background-position', getPosition(frame))
            }
            else {
                clearInterval(eye_02f_interval)
                setTimeout(pauseBeforeFromRead,pauseAtEndOfEachLine)
            }
        }

        function pauseBeforeFromRead() {
            if (sentence_no == 0) {
                $('.mery-background').css('background-image', 'url(/static/main_app/mery_imgs/mery_faces/mery_static_1.jpg)')
            }
            else if (sentence_no == 1) {
                $('.mery-background').css('background-image', 'url(/static/main_app/mery_imgs/mery_faces/mery_static_2.jpg)')
            }
            else if (sentence_no == 2) {
                $('.mery-background').css('background-image', 'url(/static/main_app/mery_imgs/mery_faces/mery_static_3.jpg)')
                $('#quote').html(this_sent)
            }
            else if (sentence_no == 3) {
                $('.mery-background').css('background-image', 'url(/static/main_app/mery_imgs/mery_faces/mery_static_0.jpg)')
            }
            else if (sentence_no == 4) {
                $('.mery-background').css('background-image', 'url(/static/main_app/mery_imgs/mery_faces/mery_static_5.jpg)')
            }
            frame = eye_02f_copy
            fromReadInterval = setInterval(fromRead, framerate)
        }

        if (sentence_no == 0) {
            function fromRead() {
                frame +=1
                if (frame <= smile_open) {
                    $('.mery-sprite').css('background-position', getPosition(frame))
                }
                else {
                    clearInterval(fromReadInterval)
                    console.log('in pauseBeforepauseBeofreBeginAgain0')
                    pauseBeforeBeginAgain();
                }
            }
        }
        else if (sentence_no == 1) {
            function fromRead() {
                frame +=1
                if (frame <= big_smile_open) {
                    $('.mery-sprite').css('background-position', getPosition(frame))
                }
                else {
                    clearInterval(fromReadInterval)
                    console.log('in pauseBeforepauseBeofreBeginAgain')
                    pauseBeforeBeginAgain();
                }
            }
        }
        else if (sentence_no == 2) {
            function fromRead() {
                frame +=1
                if (frame <= confused) {
                    $('.mery-sprite').css('background-position', getPosition(frame))
                }
                else {
                    clearInterval(fromReadInterval)
                    console.log('in pauseBeforepauseBeofreBeginAgain')
                    pauseBeforeBeginAgain();
                }
            }
        }
        else if (sentence_no == 3) {
            function fromRead() {
                frame +=1
                if (frame <= smile_open) {
                    $('.mery-sprite').css('background-position', getPosition(frame))
                }
                else {
                    clearInterval(fromReadInterval)
                    console.log('in pauseBeforepauseBeofreBeginAgain')
                    pauseBeforeBeginAgain();
                }
            }
        }
        else if (sentence_no == 4) {
            function fromRead() {
                frame +=1
                if (frame <= smile_open) {
                    $('.mery-sprite').css('background-position', getPosition(frame))
                }
                else {
                    clearInterval(fromReadInterval)
                    console.log('in pauseBeforepauseBeofreBeginAgain')
                    pauseBeforeBeginAgain();
                }
            }
        }
        else if (sentence_no == 5) {
            function fromRead() {
                frame +=1
                if (frame <= smile_open) {
                    $('.mery-sprite').css('background-position', getPosition(frame))
                }
                else {
                    clearInterval(fromReadInterval)
                    console.log('in pauseBeforepauseBeofreBeginAgain')
                    pauseBeforeBeginAgain();
                }
            }
        }
    }
};

function pauseBeforeBeginAgain() {
    console.log('in pauseBeforeBeginAgain')
    setTimeout(beginAgain, 1000)
}

function beginAgain() {
    console.log('in beginAgain')
    sentence_no += 1
    card_sent_no = sentence_no + 1
    $('#myTextBox').val('')
    $('.instruction-no').html(card_sent_no)
    $('.mery-sprite-1').css('opacity', 0)
    // send_ajax()
    if (sentence_no == 6) {
        $('.pop-up').fadeIn(700)
        $('.pop-up-box-5').fadeIn(700)
        $('.mery-sprite-1').css('background-image', 'url(/static/main_app/mery_imgs/mery_faces/mery_faces_00.jpg)')
        blinkInterval_01 = setInterval(static_blink, 3000)
        $('.sentenceBox').fadeOut(700);
        $('.questionbox').fadeOut(700);
    }
    else {
        if (sentence_no == 1) {
            $('.mery-sprite-1').css('background-image', 'url(/static/main_app/mery_imgs/mery_faces/mery_faces_01.jpg)')
        }
        else if (sentence_no == 2) {
            $('.mery-sprite-1').css('background-image', 'url(/static/main_app/mery_imgs/mery_faces/mery_faces_02.jpg)')
        }
        else if (sentence_no == 3) {
            $('.pop-up').fadeIn(700)
            $('.pop-up-box-2').fadeIn(700)
            $('#s3q1').fadeIn(700)
            $('.mery-sprite-1').css('background-image', 'url(/static/main_app/mery_imgs/mery_faces/mery_faces_03.jpg)')
        }
        else if (sentence_no == 4) {
            $('.mery-sprite-1').css('background-image', 'url(/static/main_app/mery_imgs/mery_faces/mery_faces_04.jpg)')
        }
        else if (sentence_no == 5) {
            $('.pop-up').fadeIn(700)
            $('.pop-up-box-4').fadeIn(700)
            $('.mery-sprite-1').css('background-image', 'url(/static/main_app/mery_imgs/mery_faces/mery_faces_05.jpg)')
        }
        $('.mery-sprite').css('background-position', getPosition(2));
        setTimeout(function(){$('.mery-sprite-1').css('opacity', 1)}, 2000)
        blinkInterval_01 = setInterval(static_blink, 3000)
        $('.sentenceBox').fadeOut(700);
        $('.textbox').fadeIn(700);
        $('#myTextBox').focus();
    }
}

// ajax send sentence
function send_ajax(s) {
    console.log(sentence_no)
    if (sentence_no < 6) {
        $.ajax({
            type:"GET",
            url:"/get_analysed_text",
            data: {
                "sentence": s,
                "sentence_no": sentence_no,
            },
            success: function(json) {
                console.log(json);
                good_sent = json.good_sentence;
                if (good_sent == false) {
                    alert('are you sure "' + this_sent + '" is correct?')
                    $('.textbox').fadeIn(700).focus();
                }
                else {
                    delay_for_check_ajax();
                }
            },
            error: function(xhr, textStatus, errorThrown) {
                alert(xhr.responseText)
            },
        });
    };
};

function showQ32() {
    $('#s3q1').fadeOut(700)
    setTimeout(showQ32_for_real, 1000)
}

function showQ32_for_real() {
    $('#s3q2').fadeIn(700)
}

function submitS3qs() {
    $('.pop-up').fadeOut(1000)
    $('.pop-up-box-2').fadeOut(1000)
    $.ajax({
            type:"GET",
            url:"/get_ans_to_qs",
            data: $('#s3QForm').serialize(),
    });
    $('#myTextBox').focus()
}

function submitS5q() {
    $('.pop-up-box-4').fadeOut(700)
    $('.pop-up').fadeOut(700)
    $.ajax({
            type:"GET",
            url:"/get_ans_to_qs",
            data: $('#s5QForm').serialize(),
    });
    $('#myTextBox').focus()
}

function submitS6q() {
    $('.pop-up-box-5').fadeOut(700)
    $.ajax({
        type:"GET",
        url:"/get_ans_to_qs",
        data: $('#s6QForm').serialize(),
        success: function() {
            console.log('in success')
            $('#backgroundDiv').fadeOut(1000);
            setTimeout(slowToDebriefing, 1500);
        }
    });
}

function slowToDebriefing() {
    window.location= "/debriefing";
}



