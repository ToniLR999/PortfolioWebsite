$("body").children().css("font-family","Monospace");
$("body").children().css("font-size","15px");
$(".nav-link").hover(
  function(){
    $(this).addClass("animated bounceIn");
  },
  function(){
    $(this).removeClass("animated bounceIn");
  }
);