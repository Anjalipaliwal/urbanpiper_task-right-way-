jQuery(function(){

  $( '.menu-btn' ).click(function(){
    $('.responsive-menu').toggleClass('expand');
  });

  $(document).on("click", function(e){
    if( 
      $(e.target).closest(".responsive-menu").length == 0 &&
      $(".responsive-menu").hasClass("expand") &&
      $(e.target).closest(".menu-btn").length == 0
    ){
      $('.responsive-menu').toggleClass('expand');
    }
  });
});
