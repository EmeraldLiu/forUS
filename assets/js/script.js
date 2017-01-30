//navigation//
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
