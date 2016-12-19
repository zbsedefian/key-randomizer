//use for key circle
var currentIndexKey = 0;
var totalDivKey = $(".key").length;

//use for string circle
var currentIndexString = 0;
var totalDivString = $(".string").length;

//use for chord circle
var currentIndexChord = 0;
var totalDivChord = $(".chord").length;

//use for fingering circle
var currentIndexFingering = 0;
var totalDivFingering = $(".fingering").length;

//use to convert ms to s
var timer;
var time;

//key toggle
$(".key:not(:eq("+ currentIndexKey +"))").hide();

//string toggle
$(".string:not(:eq("+ currentIndexString +"))").hide();
$('#first').hide();

//chord toggle
$(".chord:not(:eq("+ currentIndexChord +"))").hide();
$('#maj7').hide();

//fingering toggle
$(".fingering:not(:eq("+ currentIndexFingering +"))").hide();
$('#211').hide();

//when set time is clicked, starts and restarts interval
$('#setTime').click(function(){
//    whichStrings();
    clearInterval(timer);
//convert s to ms
    time = $('#time').val() * 1000;
//short message on set time click
    $('.buttons').append("<p class='message'>Interval has been set to " + time / 1000 + " seconds.</p>");
    $('.message').fadeOut(2000);
//setting interval for all
    timer = setInterval(function(){
//key alternator
        currentIndexKey = (currentIndexKey + Math.floor(Math.random() * 12)) % totalDivKey;
        $(".key").hide();
        $(".key").eq(currentIndexKey).show();
        
        if($('#beep').is(":checked")) {
            $(".beep-sound")[0].play();
        }
        
        if($('#show-string').is(":checked")){
            $('.string-label').show();
            totalDivString = $(".string").length;
            currentIndexString = (currentIndexString + Math.floor(Math.random() * 12)) % totalDivString;
            $(".string").hide();
            $(".string").eq(currentIndexString).show();
        }
        
        if($('#show-chord').is(":checked")){
            $('.chord-label').show();
            currentIndexChord = (currentIndexChord + Math.floor(Math.random() * 12)) % totalDivChord;
            $(".chord").hide();
            $(".chord").eq(currentIndexChord).show();
        }
        
        if($('#show-fingering').is(":checked")){
            $('.fingering-label').show();
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
            $('.string-label').fadeIn(500);
            $(".string").eq(currentIndexString).fadeIn(500);
            $('.string-options').fadeIn(500);
        } else {
            $(".string-main").fadeOut(700);
            $('.string-options').fadeOut(700);
        }

        if($('#show-chord').is(":checked")){
            $(".chord-main").fadeIn(500);
            $('.chord-label').fadeIn(500);
            $(".chord").eq(currentIndexChord).show();
        } else {
            $(".chord-main").fadeOut(700);
        }
        
        if ($('#show-fingering').is(':checked')) {
            $(".fingering-main").fadeIn(500);
            $('.fingering-label').fadeIn(500);
            $(".fingering").eq(currentIndexFingering).fadeIn(500);
        } else {
            $(".fingering-main").fadeOut(700);
        }
});

function whichStrings(){
//choosing which guitar strings to show
        var $first = '<div id="first" class="string"><p class="string-name">1</p></div>'
        var $second = '<div id="second" class="string"><p class="string-name">2</p></div>'
        var $third = $('#third').get();
        var $fourth = $('#fourth').get();
        var $fifth = $('#fifth').get();
        var $sixth = $('#sixth').get();
        
        if ($('#one-string').is(':checked') && $("#second").css('display', 'none')  && $("#second").length){
            currentIndexString = (currentIndexString + Math.floor(Math.random() * 12)) % totalDivString;
            $('.string-main').append($first);
            console.log('1 should be added');
        } else if ($('#one-string').is(':not(:checked)')) {
            currentIndexString = (currentIndexString + Math.floor(Math.random() * 12)) % totalDivString;
            $('#first').remove();
            console.log('1 should be removed');
        }
        
        if ($('#two-string').is(':checked') && $("#second").css('display', 'none') && $("#second").length){
            $('.string-main').append($second);
             console.log('2 should be added');
        } else if($('#two-string').is(':not(:checked)')){
            currentIndexString = (currentIndexString + Math.floor(Math.random() * 12)) % totalDivString;
            $('#second').remove();
            console.log('2 should be removed');
        }
        
        if ($('#three-string').is(':checked')){
            $('.string-main').add($third);
        } else {
            currentIndexString = (currentIndexString + Math.floor(Math.random() * 12)) % totalDivString;
            $('#third').remove();
        }
        
         if ($('#four-string').is(':checked')){
            $('.string-main').add($fourth);
        } else {
            currentIndexString = (currentIndexString + Math.floor(Math.random() * 12)) % totalDivString;
            $('#fourth').remove();
        }
        
        if ($('#five-string').is(':checked')){
            $('.string-main').add($fifth);
        } else {
            currentIndexString = (currentIndexString + Math.floor(Math.random() * 12)) % totalDivString;
            $('#fifth').remove();
        }
        
        if ($('#six-string').is(':checked')){
            $('.string-main').add($sixth);
        } else {
            currentIndexString = (currentIndexString + Math.floor(Math.random() * 12)) % totalDivString;
            $('#sixth').remove();
        }
}

//if stop is clicked
$('#stopTime').click(function(){clearInterval(timer)});

//if What is this? is clicked
$('#about-text').click(function(){$('.about-message').show()});

//if Okay. is clicked
$('#okay').click(function(){$('.about-message').hide()});