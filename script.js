if(window.location.hash) {
  //hash should be order-1, with the 1 corresponding to the value to set the order flavor to
  var hash = window.location.hash.substr(1);
  if(parseInt(hash.split("-")[1])) {
    console.log('test');
    scrollToOrder = true;
    $("select[name='order-flavor'] option[value="+hash.split("-")[1]+"]").attr('selected', 'selected');
  }
}

$(document).ready(function() {

  //set constant dimensions to contact-right to avoid weird animations
  // $("#contact-right, .form-lower").css("width", $("#contact-right").width()+"px");
  $("#contact-right").css("height", $("#contact-right").height()+"px");

  if(window.location.hash) {
    //hash should be order-1, with the 1 corresponding to the value to set the order flavor to
    var hash = window.location.hash.substr(1);
    if(parseInt(hash.split("-")[1])) {
      console.log('test');
      $("select[name='order-flavor'] option[value="+hash.split("-")[1]+"]").attr('selected', 'selected');
    }
  }

  $("select[name='email-type']").change(function() {
    clearTimeout(emailChangeTimeout);
    currentEmail = $(this).val();
    $(".form-lower").addClass("invisible");
    emailChangeTimeout2 = setTimeout(function() {
      $(".form-lower").addClass("hidden");
    }, 250);
    emailChangeTimeout = setTimeout(function() {
      $("#"+currentEmail+"-outer").removeClass("invisible");
      $("#"+currentEmail+"-outer").removeClass("hidden");
    }, 500);
  });

  $("#hamburger-outer").click(function() {
    $("#hamburger-outer, #header-right").toggleClass("expanded");
  });

  var headerTransparent = true;

  var updateHeader = function() {
    if(headerTransparent && window.scrollY > 100) {
      headerTransparent = false;
      $(".header-fixed").removeClass("transparent");
    }
    if(!headerTransparent && window.scrollY <= 100) {
      headerTransparent = true;
      $(".header-fixed").addClass("transparent");
    }
  }
  updateHeader();

  $(window).scroll(function() {
    updateHeader();
    if(window.scrollX > 0) {
      window.scrollTo(0, $(window).scrollTop());
    }
    $("#hamburger-outer, #header-right").removeClass("expanded");
  });

  $(window).resize(function() {
    $("#hamburger-outer, #header-right").removeClass("expanded");
  });

  // if on the order page, scroll down to the form
  if($("#contact-upper").length !== 0 && scrollToOrder) {
    $('html, body').animate({
      scrollTop: $("#contact-upper").offset().top - 140
    }, 500);
  }
});
