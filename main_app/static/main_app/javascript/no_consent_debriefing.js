$(function () {
    setInterval(countdownTimer, 1000);
});

var t = 9;
function countdownTimer() {
    if (t == 0) {
        window.location.href = '/';
    }
    else {
    $('.seconds').html(t);
    t -= 1;
    console.log(t);
    };
};