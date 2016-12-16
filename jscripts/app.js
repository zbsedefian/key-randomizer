var currentIndex = 0;
$(".box:not(:eq("+ currentIndex +"))").hide();
var totalDiv = $(".box").length;
var timer;
var time;
$('#setTime').click(function(){
    clearInterval(timer);
    time = $('#time').val();
    timer = setInterval(function(){
        currentIndex = (currentIndex + Math.floor(Math.random() * 12)) % totalDiv;
        $(".box").hide();
        $(".box").eq(currentIndex).show();
    },time);
});