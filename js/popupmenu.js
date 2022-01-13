


$(document).ready(function(){
      

  $("#headerIn nav button").click(function(){

    $("#popup").remove();
    $("header").before("<div id='popup'></div>");

    $("h1").clone().appendTo("div#popup");
    $("header button").clone().appendTo("div#popup")

    // $("#headerIn nav button.ham").clone().appendTo("div#popup");

    $("header ul.gnb").clone().appendTo("div#popup");
    $("#popup .gnb").before("<i class='popupSideBg'></i>");


    $("#popup").slideDown(600,"linear");
    $("button i").addClass("x");
    
    $("#popup button").click(function(){
      $("#popup").remove();    
      $("button i").removeClass("x");
    });

    // hover--------------------------------------------
    $('#popup .gnb h2').hover(function(){
      $(this).siblings().css({'opacity':0.3});
      $(this).siblings().find('a').css({'opacity':1});
    },
    function(){
      $(this).siblings().css({'opacity':1});
      $(this).siblings().find('a').css({'opacity':0});  
    });

    // 태블릿일때 기타메뉴 배치
    if($(window).width()<1201 && $(window).width()>768){
      $('#popup .enb').remove();
      $('.enb').clone().insertAfter('#popup h1');
      return false;

    }
  });
  

});

