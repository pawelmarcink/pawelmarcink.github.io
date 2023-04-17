/* encoding="UTF-8" */
$(function() {
  $("#part div").hide();
  $("#part h1,h2,h3").click(function(event) {
    event.preventDefault();
    $(this).next("div").toggle();
    updateExpandAllLink();
  }); 
});
