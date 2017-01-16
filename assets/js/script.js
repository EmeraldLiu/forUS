

$(document).ready(function(){

  $('div.presInfo').each(function() {
    var $presInfo = $(this);

    $("img.presPic", $presInfo).click(function(e) {
      e.preventDefault();
      $currentInfo = $("div.info-container", $presInfo);
      $currentInfo.toggle();
      $("div.info-container").not($currentInfo).hide();
      return false;
    });

});
    
  $('html').click(function(){
    $("div.info-container").hide();
  });
     
});
