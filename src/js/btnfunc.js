$(document).ready(function() {
    var $btnSets = $('#responsive'),
    $btnLinks = $btnSets.find('a');
    $btnLinks.click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.user-menu>div.user-menu-content").removeClass("active");
        $("div.user-menu>div.user-menu-content").eq(index).addClass("active");
    });
});


$(document).ready(function(){
  $(".botonmapa").click(function(){
    $(".mv-gd-widget-20").toggle();
  });
  $(".close").click(function(){
    $("#busqueda").css("display", "block");
    $("#showlocal").css("display", "none");
  });
  $("#imgp").click(function(){
    $(".lds-default").css("display","inherit");
    $( ".local" ).remove();
    $("#lugar").val("");
    busca();
  })
});

var cookieValue = Cookies.get("lugar");
$("#lugar").val(cookieValue);