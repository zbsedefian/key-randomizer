var time;

var currentIndex = 0;
$(".box:not(:eq("+ currentIndex +"))").hide();

var totalDiv = $(".box").length;

var timer;

$('#setTime').click(function(){
    clearInterval(timer);
    time = $('#time').val();
    console.log(time);
    timer = setInterval(function(){
        currentIndex = (currentIndex + Math.floor(Math.random() * 12)) % totalDiv;

        $(".box").hide();
        $(".box").eq(currentIndex).show();
    },time);
});


//setInterval(function(){
//     currentIndex = (currentIndex + Math.floor(Math.random() * 6)) % totalDiv;
//
//     $(".box").hide();
//     $(".box").eq(currentIndex).show();
//},time);


