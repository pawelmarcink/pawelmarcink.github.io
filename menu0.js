/* encoding="UTF-8" */
$(function () {
           var i=0;
           $(window).resize(function(){
           if($("#hd").css("height")<"112px")
           {
           $("#sidebar").hide();
           $("#sitenav").show();
           i=0;
           $("#main").css("left", "4px");
           $("#main").css("top", "112px");
           }
           else
           {
           if(i%2==0){
           $("#main").css("top", "280px");
           }
           else {
           $("#main").css("top", "240px");
           if($("#main").css("height")<"380px")
           {
            $("#sidebar").hide();
           $("#sitenav").show();
           i=0;
           $("#main").css("left", "4px");
           }
           } 
           }
           });
           
           $("#ch_menu").click(function (event) {
           i=i+1;
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
