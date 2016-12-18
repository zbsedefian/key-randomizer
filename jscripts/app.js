//use for key circle
var currentIndex = 0;
var totalDiv = $(".key").length;

//use for string circle
var currentIndexString = 0;
var totalDivString = $(".string").length;

//use for chord circle
var currentIndexChord = 0;
var totalDivChord = $(".chord").length;

//use to convert ms to s
var timer;
var time;

//key toggle
$(".key:not(:eq("+ currentIndex +"))").hide();

//string toggle
$(".string:not(:eq("+ currentIndexString +"))").hide();
$('#first').hide();

//chord toggle
$(".chord:not(:eq("+ currentIndexChord +"))").hide();
$('#maj7').hide();

//when set time is clicked, starts and restarts interval
$('#setTime').click(function(){
//    $(".string").hide();
//    $(".chord").hide();
    clearInterval(timer);
    time = $('#time').val() * 1000;
    $('.buttons').append("<p class='message'>Interval has been set to " + time / 1000 + " seconds.</p>");
    $('.message').fadeOut(2000);
    timer = setInterval(function(){
        
        currentIndex = (currentIndex + Math.floor(Math.random() * 12)) % totalDiv;
        $(".key").hide();
        $(".key").eq(currentIndex).show();
        
        if($('#beep').is(":checked")) {
            $(".beep-sound")[0].play();
        }
        
        if($('#show-string').is(":checked")){
            $('.string-label').show();
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
        
    },time);
});

//listen for checkbox clicking
$('input:checkbox').change(
            function(){
                if ($('#show-string').is(':checked')) {
                    $(".string-main").show();
                    $('.string-label').show();
                    currentIndexString = (currentIndexString + Math.floor(Math.random() * 12)) % totalDivString;
                    $(".string").hide();
                    $(".string").eq(currentIndexString).show();
                } else {
                    $(".string-main").hide();
                }
                
                if($('#show-chord').is(":checked")){
                    $(".chord-main").show();
                    $('.chord-label').show();
                    currentIndexChord = (currentIndexChord + Math.floor(Math.random() * 12)) % totalDivChord;
                    $(".chord").hide();
                    $(".chord").eq(currentIndexChord).show();
                } else {
                    $(".chord-main").hide();
                }
            });

//if stop is clicked
$('#stopTime').click(function(){clearInterval(timer)});