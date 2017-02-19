//Immediately Invoked Function Expression (IIFE)
(function(){
  var global = {
    init: function(){
      this.quote();
    },
    quote: function(){
      $(".smail .imgHolder").on("click", function(e){
        $(".ned .quote").animate({
          width: 0
        });
        $(".smail .quote").animate({
          width: 100
        })
        $(this).parent().animate({
          left: 430
        })
        // $(this).siblings(".quote").show("slide", {direction: "left"}).css({"display":"inline-block"});
      });
      $(".jayadev .imgHolder").on("click", function(e){
        $(".ned .quote").animate({
          width: 0
        });
        $(".smail .quote").animate({
          width: 0
        })
        $(".jayadev .quote").animate({
          width: 100
        })
        $(this).parent().animate({
          right: 50
        })
        // $(this).siblings(".quote").show("slide", {direction: "left"}).css({"display":"inline-block"});
      })
    }
  }
  $(document).ready(function(){
    global.init();
  });
})();
