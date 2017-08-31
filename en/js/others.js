var curPlanet = '';
var attempt = 0;
var oldPlanet = '';
getCap();
$(function () {
    $('.rules-btn1').click(function () {
        $('.rules-container').css('display', 'block');
    });
    $('.close-btn').click(function () {
        $('.rules-container').css('display', 'none');
    });
    $('.planet img').click(function () {
        curPlanet = ($(this).attr('id')).split('-');
        curPlanet = curPlanet[1];
        if (curPlanet != '') {
            $('#planet-' + oldPlanet).attr('src', 'common/PLANETS/' + oldPlanet + '.png');
        }
        $(this).attr('src', 'common/PLANETS/' + curPlanet + '_GLOW.png');
        oldPlanet = curPlanet;
    });
    $('.close-btn-popup').click(function () {
        if (attempt == 1) {
            if (curPlanet != answer) {
                $('#planet-' + oldPlanet).attr('src', 'common/PLANETS/' + oldPlanet + '.png');
            } else {
                updateScore();
                $('.rules-btn1, .submit-btn').css('opacity', '0.5');
                $('.allOut').css('display', 'block');
                $('.next-btn').css('opacity', 1);
                $('.next-btn').addClass('next-btn-roll');
            }
        } else {
            if (curPlanet != answer) {
                /*$('.capAnim').addClass('cap-fix');
                $('#tube-' + mytube).attr('src', 'common/TUBES/' + mytube + '.png');*/
                $('.allOut').css('display', 'block');
            } else {
                updateScore();
            }
            $('.next-btn').css('opacity', 1);
            $('.next-btn').addClass('next-btn-roll');
            $('.rules-btn1, .submit-btn').css('opacity', '0.5');
            $('.allOut').css('display', 'block');
        }
        $('.feedback-popup').css('display', 'none');
        $('.feedback-popup-small').css('display', 'none');
    });
});

function getCap() {
    if (parseInt(localStorage.getItem("planet-score1")) == 1) {
        $('#tube-n').attr('src', 'common/TUBES/n-cap.png')
    }
    if (parseInt(localStorage.getItem("planet-score2")) == 1) {
        $('#tube-h2so4').attr('src', 'common/TUBES/h2so4-cap.png')
    }
    if (parseInt(localStorage.getItem("planet-score3")) == 1) {
        $('#tube-h').attr('src', 'common/TUBES/h-cap.png')
    }
    if (parseInt(localStorage.getItem("planet-score4")) == 1) {
        $('#tube-he').attr('src', 'common/TUBES/he-cap.png')
    }
    if (parseInt(localStorage.getItem("planet-score5")) == 1) {
        $('#tube-na').attr('src', 'common/TUBES/na-cap.png')
    }
    if (parseInt(localStorage.getItem("planet-score6")) == 1) {
        $('#tube-ch4').attr('src', 'common/TUBES/ch4-cap.png')
    }
    if (parseInt(localStorage.getItem("planet-score7")) == 1) {
        $('#tube-fe2o3').attr('src', 'common/TUBES/fe2o3-cap.png')
    }
    if (parseInt(localStorage.getItem("planet-score8")) == 1) {
        $('#tube-nh3').attr('src', 'common/TUBES/nh3-cap.png')
    }
    if (parseInt(localStorage.getItem("planet-score9")) == 1) {
        $('#tube-co2').attr('src', 'common/TUBES/co2-cap.png')
    }
    if (parseInt(localStorage.getItem("planet-score10")) == 1) {
        $('#tube-co').attr('src', 'common/TUBES/co-cap.png')
    }
}
