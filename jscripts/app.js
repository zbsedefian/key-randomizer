function go(){
var currentIndex = 0;
$(".box:not(:eq("+ currentIndex +"))").hide();

var totalDiv = $(".box").length;

setInterval(function(){
     currentIndex = (currentIndex + Math.floor(Math.random() * 6)) % totalDiv;

     $(".box").hide();
     $(".box").eq(currentIndex).show();
    
},3000);

}