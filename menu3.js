/* encoding="UTF-8" */
$(function() {
$('#foot').prepend('<button id="ch_menu" class="up" type="button">Zmień menu</button>');
if(window.innerWidth>=660 && window.innerHeight>=660)$("#cont").css("left","15em");

var $but=$('#ch_menu');

$but.on('click',function(){
    $but.toggleClass("up");
    $("#sitenav, #sidebar").toggle();
    if($but.hasClass("up"))
    {        
      $("#main").css("top", "270px");
      $("#main").css("left", "4px");  
    }
    else
    {
      $("#main").css("top", "240px");
      $("#main").css("left", "15em");
    }
})

$(window).on('resize',function(){
if(window.innerWidth<660 || window.innerHeight<660)
{
 $("#cont").css("left","1px");
 $("#sidebar").hide();
 $("#sitenav").show();
 $("#main").css("left", "4px");
 if(window.innerWidth>=660 && window.innerHeight>=460) $("#main").css("top", "270px");
 else $("#main").css("top", "112px");

}
else
{
 $("#cont").css("left","15em");
 if($but.hasClass("up"))
    {        
      $("#main").css("top", "270px");
      $("#main").css("left", "4px");  
    }
    else
    {
      $("#main").css("top", "240px");
      $("#main").css("left", "15em");
      $("#sidebar").show();
      $("#sitenav").hide();
    }
}
})

})
