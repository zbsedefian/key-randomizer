//use for key circle
var currentIndexKey = 0;
var totalDivKey = $(".key").length;
//hide non-currently-indexed key circles
$(".key:not(:eq("+ currentIndexKey +"))").hide();

//use for string circle
var currentIndexString = 0;
var totalDivString = $(".string").length;
//hide non-currently-indexed string circles
$(".string:not(:eq("+ currentIndexString +"))").hide();
//$('#first').hide();

//use for chord circle
var currentIndexChord = 0;
var totalDivChord = $(".chord").length;
//hide non-currently-indexed chord circles
$(".chord:not(:eq("+ currentIndexChord +"))").hide();
$('#maj7').hide();

//use for fingering circle
var currentIndexFingering = 0;
var totalDivFingering = $(".fingering").length;
//hide non-currently-indexed fingering circles
$(".fingering:not(:eq("+ currentIndexFingering +"))").hide();
$('#211').hide();

//creates a variable for the timer so it can be cleared / reset
var timer;

//use to convert ms to s
var time; 
//use for Wait option
var waitingTime;

//when set time is clicked, starts interval
$('#setTime').click(function(){
    whichStrings();
    clearInterval(timer);
//convert s to ms
    time = $('#time').val() * 1000;
    waitingTime = time - 1 * 1000;
//short message on set time click
    $('.buttons').append("<p class='message'>Interval has been set to " + time / 1000 + " seconds.</p>");
    $('.message').fadeOut(2000);
//setting interval for all
    timer = setInterval(function(){
//key alternator
        currentIndexKey = (currentIndexKey + Math.floor(Math.random() * 12)) % totalDivKey;
        $(".key").hide();
        $(".key").eq(currentIndexKey).show();
        
        if($('#play-key').is(":checked")) {
            if($('#wait-for-time-button').is(":checked")){
                setTimeout(function () {
                    playKey();
                }, waitingTime);
            } else if ($('#wait-for-time-button').is(':not(:checked)')) {
                playKey(); 
            }
        }
        
        if($('#beep').is(":checked")) {
            $(".beep-sound")[0].play();
        }
        
        if($('#show-string').is(":checked")){
            currentIndexString = (currentIndexString + Math.floor(Math.random() * 12)) % totalDivString;
            $(".string").hide();
            $(".string").eq(currentIndexString).show();
        }
        
        if($('#show-chord').is(":checked")){
            currentIndexChord = (currentIndexChord + Math.floor(Math.random() * 12)) % totalDivChord;
            $(".chord").hide();
            $(".chord").eq(currentIndexChord).show();
        }
        
        if($('#show-fingering').is(":checked")){
            currentIndexFingering = (currentIndexFingering + Math.floor(Math.random() * 12)) % totalDivFingering;
            $(".fingering").hide();
            $(".fingering").eq(currentIndexFingering).show();
        }
    },time);
});

//listen for checkbox clicking
$('input:checkbox').change(
    function(){

//showing various circles
        if ($('#show-string').is(':checked')) {
            $(".string-main").fadeIn(500);
            $(".string").eq(currentIndexString).fadeIn(500);
            $('.string-options').fadeIn(500);
        } else {
            $(".string-main").fadeOut(700);
            $('.string-options').fadeOut(700);
        }

        if($('#show-chord').is(":checked")){
            $(".chord-main").fadeIn(500);
            $(".chord").eq(currentIndexChord).show();
        } else {
            $(".chord-main").fadeOut(700);
        }
        
        if ($('#show-fingering').is(':checked')) {
            $(".fingering-main").fadeIn(500);
            $(".fingering").eq(currentIndexFingering).fadeIn(500);
        } else {
            $(".fingering-main").fadeOut(700);
        }
});

//if stop is clicked
$('#stopTime').click(function(){ clearInterval(timer); });

//if What is this? is clicked
$('#about-text').click(function(){ $('.pop-up').fadeIn(100); });

//if the red X is clicked, pop up closes
$('#red-x').click(function(){ $('.pop-up').hide(); });
$('#red-x-2').click(function(){ $('.pop-up-2').hide(); });

$('#more-info').click(function(){ 
    $('.pop-up').hide();
    $('.pop-up-2').show();
});

$('#back').click(function(){ 
    $('.pop-up-2').hide();
    $('.pop-up').show();
});

//use in whichString to determine which of the strings should be shown
var $first = '<div id="first" class="string"><p class="string-name">1</p></div>'
var $second = '<div id="second" class="string"><p class="string-name">2</p></div>'
var $third = '<div id="third" class="string"><p class="string-name">3</p></div>'
var $fourth = '<div id="fourth" class="string"><p class="string-name">4</p></div>'
var $fifth = '<div id="fifth" class="string"><p class="string-name">5</p></div>'
var $sixth = '<div id="sixth" class="string"><p class="string-name">6</p></div>'

//calculates total number of divs and index for string
function calculateStringValues(){
    totalDivString = $(".string").length;
    currentIndexString = (currentIndexString + Math.floor(Math.random() * 12)) % totalDivString;
}

//chooses which guitar strings to show
function whichStrings(){
    if ($('#one-string').is(':checked') && $('#first').length === 0 ){
        $('.string-main').append($first);
        calculateStringValues();
    } else if ($('#one-string').is(':not(:checked)')) {
        $('#first').remove();
        calculateStringValues();
    }

    if ($('#two-string').is(':checked') && $('#second').length === 0 ){
        $('.string-main').append($second);
        calculateStringValues();
    } else if($('#two-string').is(':not(:checked)')){
        $('#second').remove();
        calculateStringValues();
    }

    if ($('#three-string').is(':checked') && $('#third').length === 0 ){
        $('.string-main').append($third);
        calculateStringValues();
    } else if($('#three-string').is(':not(:checked)')){
        $('#third').remove();
        calculateStringValues();
    }

     if ($('#four-string').is(':checked') && $('#fourth').length === 0 ){
        $('.string-main').append($fourth);
        calculateStringValues();
    } else if($('#four-string').is(':not(:checked)')){
        $('#fourth').remove();
        calculateStringValues();
    }

    if ($('#five-string').is(':checked') && $('#fifth').length === 0 ){
        $('.string-main').append($fifth);
        calculateStringValues();
    } else if($('#five-string').is(':not(:checked)')){
        $('#fifth').remove();
        calculateStringValues();
    }

    if ($('#six-string').is(':checked') && $('#sixth').length === 0 ){
        $('.string-main').append($sixth);
        calculateStringValues();
    } else if($('#six-string').is(':not(:checked)')){
        $('#sixth').remove();
        calculateStringValues();
    }
}

//chooses which sound to play when Play Key is checked
function playKey(){
    switch(currentIndexKey){
        case 0:
            $("#C-sound")[0].play();
            break;
        case 1: 
            $("#F-sound")[0].play();
            break;
        case 2:
            $("#Bb-sound")[0].play();
            break;
        case 3:
            $("#Eb-sound")[0].play();
            break;
        case 4:
            $("#Ab-sound")[0].play();
            break;
        case 5:
            $("#Db-sound")[0].play();
            break;
        case 6:
            $("#Gb-sound")[0].play();
            break;
        case 7:
            $("#B-sound")[0].play();
            break;
        case 8:
            $("#E-sound")[0].play();
            break;
        case 9:
            $("#A-sound")[0].play();
            break;
        case 10:
            $("#D-sound")[0].play();
            break;
        case 11:
            $("#G-sound")[0].play();
            break;
    }          
}