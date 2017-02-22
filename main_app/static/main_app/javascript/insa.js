$(function() {
    setTimeout(startChangeMery, 1000);
    $('#showTextBoxButton').on('click', showTextBox)
    $('#sendTextButton').on('click', showSentenceBox)
    $('#goToNextPage').on('click', delayBeforeLinkToConsent)
});

function delayBeforeLinkToConsent() {
    $('#backgroundDiv').fadeOut(700)
    setTimeout(linkToConsent, 700)
}

function linkToConsent() {
    window.location = "/consent"
}

var framerate = 100
var frame = 0;
var blinkSmilePos = 33;
var smilePos = 34;
var readStart = 40;
var readFinal = 46;
var openSmilePos = 53;
var blinkOpenSmilePos = 54;

function getPosition(f) {
    var framePos = f * -320
    return '0px '.concat(framePos, 'px')
}

function startChangeMery() {
    console.log('startChangeMery');
    startTheTimer = setInterval(changeMery, framerate)
}


function changeMery() {
    if (frame < smilePos) {
        $('.mery-sprite').css('background-position', getPosition(frame));
    }
    else if (frame == smilePos) {
        $('.mery-sprite').css('background-position', getPosition(frame));
        clearInterval(startTheTimer);
        $('#sendTextButton').show();
        startTheBlinkTimer = setInterval(blinkMery, 2000);
    };
    frame += 1;
}

function blinkMery() {
    x = Math.random() * 4;
    if (x < 1) {
        $('.mery-sprite').css('background-position', getPosition(blinkSmilePos));
        setTimeout(function(){$('.mery-sprite').css('background-position', getPosition(smilePos))}, framerate);
    }
}

function showTextBox() {
    $('.insa-text').fadeOut(500);
    $('.textbox').fadeIn(500);
}

function showSentenceBox() {
    $('.textbox').fadeOut(500);
    $('.sentenceBox').html($('#myTextBox').val())
    clearInterval(startTheBlinkTimer);
    setTimeout(pauseBeforeBeforeToRead, 1000);
}

function pauseBeforeBeforeToRead() {
    $('.sentenceBox').fadeIn(500);
    setTimeout(pauseBeforeToRead, 1000);
}

function pauseBeforeToRead() {
    startTheToReadTimer = setInterval(toRead, framerate);
}

function toRead() {
    if (frame < readStart) {
        $('.mery-sprite').css('background-position', getPosition(frame));
    }
    else if (frame == readStart) {
        $('.mery-sprite').css('background-position', getPosition(frame));
        clearInterval(startTheToReadTimer);
        setTimeout(eyeMove1, 800);
    };
    frame += 1
}

function eyeMove1() {
    $('.mery-sprite').css('background-position', getPosition(frame))
    frame += 1
    setTimeout(eyeMove2, 150);
}

function eyeMove2() {
    $('.mery-sprite').css('background-position', getPosition(frame))
    frame += 2
    setTimeout(eyeMoveMiddle, 500);
}

function eyeMoveMiddle() {
    $('.mery-sprite').css('background-position', getPosition(frame))
    frame -= 1
    setTimeout(eyeMove3, 100);
}

function eyeMove3() {
    $('.mery-sprite').css('background-position', getPosition(frame))
    frame += 1
    setTimeout(eyeMove4, 600);
}

function eyeMove4() {
    $('.mery-sprite').css('background-position', getPosition(frame))
    frame += 1
    setTimeout(eyeMove5, 150);
}

function eyeMove5() {
    $('.mery-sprite').css('background-position', getPosition(frame))
    frame += 1
    setTimeout(eyeMove6, 500);
}

function eyeMove6() {
    $('.mery-sprite').css('background-position', getPosition(frame))
    frame += 1
    fromReadTimer = setInterval(fromRead, 100);
}

function fromRead() {
    console.log('frame: ', frame)
    if (frame < openSmilePos) {
        $('.mery-sprite').css('background-position', getPosition(frame));
    }
    else if (frame == openSmilePos) {
        $('.mery-sprite').css('background-position', getPosition(frame));
        clearInterval(fromReadTimer);
        showExplanationText();
        startTheOpenSmileTimer = setInterval(openSmileBlink, 2000);
    };
    frame += 1
}

function openSmileBlink() {
    console.log('frame: ', frame)
    x = Math.random() * 4;
    if (x < 1) {
        $('.mery-sprite').css('background-position', getPosition(blinkOpenSmilePos));
        setTimeout(function(){$('.mery-sprite').css('background-position', getPosition(openSmilePos))}, framerate);
    }
}

function showExplanationText() {
    setTimeout(function() {$('.explanationText').fadeIn(500)}, 1000);
}



















