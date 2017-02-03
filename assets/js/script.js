//Navigation//
  $(document).ready(function() {

    var $toggleButton = $('.toggle-button'),
        $menuWrap = $('.menu-wrap'),
        $sidebarArrow = $('.sidebar-menu-arrow');

    // Hamburger button

    $toggleButton.on('click', function() {
      $(this).toggleClass('button-open');
      $menuWrap.toggleClass('menu-show');
    });

    // Sidebar navigation arrows

    $sidebarArrow.click(function() {
      $(this).next().slideToggle(300);
    });

  });

//Back to Top //
$(document).ready(function(){
  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 500,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    //grab the "back to top" link
    $back_to_top = $('.cd-top');

  //hide or show the "back to top" link
  $(window).scroll(function(){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
  });

  //smooth scroll to top
  $back_to_top.on('click', function(event){
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0 ,
      }, scroll_top_duration
    );
  });

});

// President page //
$(document).ready(function(){

  $('div.presInfo').each(function() {
    var $presInfo = $(this);

    /*$("img.presPic", $presInfo).click(function(e) {
      e.preventDefault();
      $currentInfo = $("div.info-container", $presInfo);
      $currentInfo.toggle();
      $("div.info-container").not($currentInfo).hide();
      return false;
    });*/
    $("img.presPic", $presInfo).click(function(e) {
      e.preventDefault();
      $currentInfo = $("div.info-container", $presInfo);
      $currentInfo.slideToggle(1300);
      $("div.info-container").not($currentInfo).hide();
      return false;
    });

});
    
  $('html').click(function(){
    $("div.info-container").hide();
  });
     
});
