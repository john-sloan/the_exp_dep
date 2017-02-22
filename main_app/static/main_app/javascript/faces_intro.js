$(function() {
    $('.body-section').show(1000);
    initialBlinkTimer = setInterval(blinkNeuMery, 1500);
    $('#showQuestionButton').on('click', showQuestion)
    $('#sendTextButton1').on('click', showSentenceBox)
    $('#showSentence2Button').on('click', showSentence2)
    $('#sendTextButton2').on('click', showSentenceBox2)
    $('#toFacesBtn').on('click', delayBeforeLinkToFaces)
});

function delayBeforeLinkToFaces() {
    $('#backgroundDiv').fadeOut(700)
    setTimeout(linkToFaces, 700)
}

function linkToFaces() {
    window.location = "/faces"
}

var framerate = 100
var frame = 2;
var blinkNeuPos = 1;
var openNeuPos = 2;
var readStart = 8;
var finReadHeadMove1 = 14;
var finReadHeadMove2 = 18;
var blinkSmilePos = 29;
var openSmilePos = 30;
var eye21 = 38;
var eye22 = 39;
var finishedToRead22 = 43;
var openSmilePos2 = 50;
var blinkSmilePos2 = 51;

function getPosition(f) {
    var framePos = f * -320
    return '0px '.concat(framePos, 'px')
}

function blinkNeuMery() {
    x = Math.random() * 3;
    if (x < 1) {
        $('.mery-sprite').css('background-position', getPosition(blinkNeuPos));
        setTimeout(function(){$('.mery-sprite').css('background-position', getPosition(openNeuPos))}, framerate);
    }
}

function showQuestion() {
    $('.intro-text').fadeOut(700);
    $('.questionbox').fadeIn(700);
    setTimeout(showTextBox, 1000);
}

function showTextBox() {
    $('.textbox').fadeIn(1000);
}

function showSentenceBox() {
    console.log($('#myTextBox').val())
    if ($('#myTextBox').val() == "My best friend is probably the boy who moved in next door to me when I was about 6 years old.") {
        $('.textbox').fadeOut(700);
        $('.sentenceBox').html($('#myTextBox').val())
        setTimeout(pauseBeforeShowSentenceBox, 700)
        clearInterval(initialBlinkTimer);
        setTimeout(pauseBeforeToRead, 1500)
    }
    else {
        alert("please write exactly:\n\nMy best friend is probably the boy who moved in next door to me when I was about 6 years old.\n\nDon't forget the full stop at the end '.'")
    }
}

function pauseBeforeShowSentenceBox() {
    $('.sentenceBox').fadeIn(700);
}

function pauseBeforeToRead() {
    toReadTimer = setInterval(toRead, framerate)
}

function toRead() {
    if (frame < readStart) {
        $('.mery-sprite').css('background-position', getPosition(frame));
    }
    else if (frame == readStart) {
        $('.mery-sprite').css('background-position', getPosition(frame));
        clearInterval(toReadTimer);
        setTimeout(eyeMove1, 800);
    };
    frame += 1
}

function eyeMove1() {
    $('.mery-sprite').css('background-position', getPosition(frame))
    frame += 1
    setTimeout(eyeMove2, 100);
}

function eyeMove2() {
    readHeadMove1 = setInterval(eyeMove3, framerate);
};

function eyeMove3() {
    if (frame < finReadHeadMove1) {
        $('.mery-sprite').css('background-position', getPosition(frame));
    }
    else if (frame == finReadHeadMove1) {
        $('.mery-sprite').css('background-position', getPosition(frame));
        clearInterval(readHeadMove1);
        setTimeout(eyeMove5, 500);
    };
    frame += 1
}

function eyeMove5() {
    $('.mery-sprite').css('background-position', getPosition(frame))
    frame += 1
    readHeadMove2 = setInterval(eyeMove6, framerate);
}

function eyeMove6() {
    if (frame < finReadHeadMove2) {
        $('.mery-sprite').css('background-position', getPosition(frame));
    }
    else if (frame == finReadHeadMove2) {
        $('.mery-sprite').css('background-position', getPosition(frame));
        clearInterval(readHeadMove2);
        setTimeout(eyeMove7, 400);
    };
    frame += 1
}

function eyeMove7() {
    $('.mery-sprite').css('background-position', getPosition(frame))
    frame += 1
    setTimeout(eyeMove8, 200);
}

function eyeMove8() {
    $('.mery-sprite').css('background-position', getPosition(frame))
    frame += 1
    readHeadMove3 = setInterval(eyeMove9, framerate);
}

function eyeMove9() {
    if (frame < openSmilePos) {
        $('.mery-sprite').css('background-position', getPosition(frame));
    }
    else if (frame == openSmilePos) {
        $('.mery-sprite').css('background-position', getPosition(frame));
        clearInterval(readHeadMove3);
        showExplanationText()
        smileBlinkTimer = setInterval(blinkSmileMery, 1500);
    };
    frame += 1
}

function blinkSmileMery() {
    console.log('in blinkSmileMery')
    x = Math.random() * 3;
    if (x < 1) {
        console.log('should be blinking')
        $('.mery-sprite').css('background-position', getPosition(blinkSmilePos));
        setTimeout(function(){$('.mery-sprite').css('background-position', getPosition(openSmilePos))}, framerate);
    }
}

function showExplanationText() {
    setTimeout(function() {$('.explanationText').fadeIn(500)}, 1000);
}

function showSentence2() {
    $('.sentenceBox').fadeOut(500);
    $('.explanationText').fadeOut(500);
    setTimeout(showTextbox2, 1000);
}

function showTextbox2() {
    $('.textbox2').fadeIn(500);
}

function showSentenceBox2() {
    if ($('#myTextBox2').val() == "He is tall and kind.") {
        // frame = 1;
        // $('.mery-sprite').css("background-image", "url(/static/main_app/mery_imgs/mery_practice/mery_prac_sprite_2.jpg)")
        console.log("image url is: ", $('.mery-sprite').css('background-image'))
        $('.remove').css('color', '#b3cafc');
        $('.textbox2').fadeOut(400);
        $('.sentenceBox').html($('#myTextBox2').val());
        setTimeout(pauseBeforeShowSentenceBox2, 700)
        clearInterval(smileBlinkTimer);
        setTimeout(pauseBeforeToRead2, 1500)
    }
    else {
        alert("please write exactly:\n\nHe is tall and kind.")
    }
}

function pauseBeforeShowSentenceBox2() {
    $('.sentenceBox').fadeIn(700);
}

function pauseBeforeToRead2() {
    toReadTimer2 = setInterval(toeye21, framerate)
}

function toeye21() {
    if (frame < eye21) {
        $('.mery-sprite').css('background-position', getPosition(frame));
    }
    else if (frame == eye21) {
        $('.mery-sprite').css('background-position', getPosition(frame));
        clearInterval(toReadTimer2);
        setTimeout(funeye22, 900);
    };
    frame += 1
}

function funeye22() {
    console.log(frame)
    $('.mery-sprite').css('background-position', getPosition(frame));
    finishToReadTimer3  = setInterval(finishedToRead3, 150);
}

function finishedToRead3() {
    if (frame < finishedToRead22) {
        $('.mery-sprite').css('background-position', getPosition(frame));
    }
    else if (frame == finishedToRead22) {
        $('.mery-sprite').css('background-position', getPosition(frame));
        clearInterval(finishToReadTimer3);
        fromReadTimer2 = setInterval(fromRead2, 100);
        console.log('finished to read', frame)
    };
    frame += 1
}

function fromRead2() {
    console.log('from read', frame)
    if (frame < openSmilePos2) {
        $('.mery-sprite').css('background-position', getPosition(frame));
    }
    else if (frame == openSmilePos2) {
        $('.mery-sprite').css('background-position', getPosition(frame));
        clearInterval(fromReadTimer2);
        showExplanationText2()
        smileBlinkTimer2 = setInterval(blinkSmileMery2, 1500);
    };
    frame += 1
}

function blinkSmileMery2() {
    console.log(frame)
    x = Math.random() * 3;
    if (x < 1) {
        $('.mery-sprite').css('background-position', getPosition(blinkSmilePos2));
        setTimeout(function(){$('.mery-sprite').css('background-position', getPosition(openSmilePos2))}, framerate);
    }
}

function showExplanationText2() {
    setTimeout(function() {$('.explanationText2').fadeIn(500)}, 1000);
}




