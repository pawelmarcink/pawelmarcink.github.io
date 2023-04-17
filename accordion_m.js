/* encoding="UTF-8" */
$(function() {
$('li div').addClass('accordion-panel');
$('ul.accordion').prepend('<li><button class="accordion-control" id="showOrHide"><h3>Wyświetl wszystko</h3></button></li>');
var $soh=$('#showOrHide');
var $panels=$('.accordion-panel');
$soh.on('click', function() {
$soh.toggleClass("expanded");
if ($soh.hasClass("expanded")) {
            $soh.html("<h3>Ukryj wszystko</h3>");
            $panels.each(function(){
                                    if(!$(this).hasClass("expanded")){$(this).not(':animated').slideToggle().addClass("expanded");}
                                    })
        } else {
            $soh.html("<h3>Wyświetl wszystko</h3>");
            $panels.each(function(){
                                    if($(this).hasClass("expanded")){$(this).not(':animated').slideToggle().removeClass("expanded");}
                                    })
        }
  });

$('.accordion').on('click', '.accordion-control', function(e){ // Po kliknięciu.
  e.preventDefault();                    // Uniemożliwienie domyślnej akcji przycisku.
  $(this)                                // Ustalenie elementu klikniętego przez użytkownika.
    .next('.accordion-panel')            // Wybór odpowiedniego panelu.
    .not(':animated')                    // Jeżeli animacja nie jest aktualnie odtwarzana.
    .slideToggle()                       // Użycie animacji do wyświetlenia lub ukrycia panelu.
    .toggleClass("expanded");   
     if($('div.expanded').length== $('div.accordion-panel').length){
                                  $soh.addClass("expanded");}
     else{
          $soh.removeClass("expanded");}
     if ($soh.hasClass("expanded")) {$soh.html("<h3>Ukryj wszystko</h3>");} 
     else {$soh.html("<h3>Wyświetl wszystko</h3>");}             
});

});
