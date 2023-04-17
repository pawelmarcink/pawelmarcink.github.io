/* encoding="UTF-8" */
$(function () {
           var i=0;
           $(window).resize(function(){
           i=0;
           location.reload();
           });
           
           $("#ch_menu").click(function (event) {
           i=i+1;
           console.log(i);
           $("#sitenav, #sidebar").toggle();
           if(i%2==1)
           {          
                      $("#main").css("top", "240px");
                      $("#main").css("left", "15em");
           }
           else
           {
                      $("#main").css("top", "280px");
                      $("#main").css("left", "4px");
           }
           });
});
