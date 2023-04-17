/* encoding="UTF-8" */
window.onload = addButton;
function addButton() {
var Butt;
Butt = document.createElement("button");
Butt.setAttribute("id", "ch_menu");
Butt.setAttribute("type", "button");
Butt.appendChild(document.createTextNode("Zmień menu"));

if(parseFloat($("#hd").css("height"))<112 || parseFloat($("#main").css("height"))<340){
 $("#cont").css("left","1px");
}
else{
$("#cont").css("left","15em");
}



var opt="up";
           Butt.onclick=function () {
           if(opt=="left"){opt="up";}
           else{opt="left";}
           $("#sitenav, #sidebar").toggle();
           if(opt=="left")
           {          
                      $("#main").css("top", "240px");
                      $("#main").css("left", "15em");
           }
           else
           {
                      $("#main").css("top", "280px");
                      $("#main").css("left", "4px");
           }
           };

foo = document.getElementById("foot");
foo.insertBefore(Butt, foo.firstChild);


           $(window).resize(function(){
           if(parseFloat($("#hd").css("height"))<112)
           {
            $("#sidebar").hide();
            $("#sitenav").show();
            opt="up";
            $("#main").css("left", "4px");
            $("#main").css("top", "112px");
           }
           else
           {
            if(opt=="up"){
            $("#main").css("top", "280px");
           }
           else 
           {
                $("#main").css("top", "240px");
                if(parseFloat($("#main").css("height"))<340)
                {
                 $("#sidebar").hide();
                 $("#sitenav").show();
                 opt="up";
                 $("#main").css("left", "4px");
                }
           }}
           if(parseFloat($("#hd").css("height"))<112 || parseFloat($("#main").css("height"))<340){$("#cont").css("left","1px");}
           else{$("#cont").css("left","15em");}
           });
}

