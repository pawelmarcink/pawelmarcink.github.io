/* encoding="UTF-8" */
$(function() {
var h,w,h_v;
var propArray  = [];  

function init()
{
         h=Math.min($(window).height()-16,1712);
         w=Math.min($(window).width()-16,2288);
         $('.slider').height(h);
         $('.slider').width(w);
         h_v=h-30;
         $('.slide-viewer').height(h_v);

         $('.slide').each(function(){
            var $this   = $(this); 
            var $img=$this.find('img');
            var prop=$img.width()/$img.height();
            propArray.push(prop);
            var w_s=prop*h_v;
            if(w_s<=w){$this.width(w_s);$this.height(h_v);$img.width(w_s);$img.height(h_v);$this.css( {left: (w-w_s)/2} );}
            else {var h_s=w/prop;$this.width(w);$this.height(h_s);$img.width(w);$img.height(h_s);$this.css( {left: 0} );}
         });
}



$(window).on('resize',function(){
   init();
});

$(window).on('load',function(){
   init();
   $('.slide').css( {display: 'none',position: 'absolute'} );
   $('.slide').eq(0).css( {display: 'block'} );
   show_slides();
});

function show_slides()
{
$('.slider').each(function() {              // Dla każdej grupy slajdów.
  var $this   = $(this);                    // Pobranie bieżącej grupy slajdów.
  var $group  = $this.find('.slide-group'); // Pobranie elementu o klasie slide-group (kontener).
  var $slides = $this.find('.slide');       // Obiekt jQuery przechowujący wszystkie slajdy.
  var buttonArray  = [];                    // Utworzenie tablicy na przyciski nawigacyjne.
  var currentIndex = 0;                     // Numer indeksu bieżącego slajdu.
  var timeout;                              // Zmienna do przechowywania licznika czasu.

  function move(newIndex) {          // Przejście ze starego do nowego slajdu.
    var animateLeft, slideLeft, $newSlide;      // Deklaracja zmiennych.

    advance();                       // Podczas przejścia slajdów należy ponownie wywołać funkcję advance().

    // Jeżeli wyświetlany jest bieżący slajd lub odtwarzana jest animacja slajdu, to nie podejmujemy żadnych działań.
    if ($group.is(':animated') || currentIndex === newIndex) {  
      return;
    }

    buttonArray[currentIndex].removeClass('active'); // Usunięcie klasy z elementu.
    buttonArray[newIndex].addClass('active');        // Dodanie klasy do nowego elementu.

    var prop=propArray[newIndex];
    var w_s=prop*h_v;

    if (newIndex > currentIndex) {   // Jeżeli nowy element > bieżący.
      slideLeft = (3*w-w_s)/2;            // Umieszczenie nowego slajdu po prawej stronie.
      animateLeft = '-100%';         // Animacja bieżącej grupy w lewą stronę.
    } else {                         // W przeciwnym razie.
      slideLeft = -(3*w-w_s)/2;           // Umieszczenie nowego slajdu po lewej stronie.
      animateLeft = '100%';          // Animacja bieżącej grupy w prawą stronę.
    }
    $newSlide=$slides.eq(newIndex);
    // Umieszczenie nowego slajdu po lewej (jeśli ma mniejszą wartość indeksu niż bieżący) lub prawej (jeśli ma tę wartość większą).
    $newSlide.css( {left: slideLeft, display: 'block'} );

    $group.animate( {left: animateLeft}, function() {    // Animacja slajdu
      $slides.eq(currentIndex).css( {display: 'none'} ); // i ukrycie poprzedniego.     
      //$slides.eq(newIndex).css( {left: 0} ); // Ustawienie położenia dla nowego slajdu.
      if(w_s<=w){$newSlide.css( {left: (w-w_s)/2} );}
      else {$newSlide.css( {left: 0} );}      

      $group.css( {left: 0} );               // Ustawienie położenia grupy slajdów.
      currentIndex = newIndex;               // Ustawienie zmiennej currentIndex wartości nowego obrazu.
    });
  }

  function advance() {                     // Ustawienie czasu wyświetlania slajdu.
    clearTimeout(timeout);                 // Wyzerowanie licznika czasu w zmiennej timeout.
    timeout = setTimeout(function() {      // Ustawienie nowego licznika.
      if (currentIndex < ($slides.length - 1)) { // Jeżeli to nie jest ostatni slajd.
        move(currentIndex + 1);            // Przejście do następnego slajdu.
      } else {                             // W przeciwnym razie.
        move(0);                           // Przejście do pierwszego slajdu.
      }
    }, 5000);                              // Czas oczekiwania wyrażony w milisekundach
  }

  $.each($slides, function(index) {
    // Utworzenie elementu <button> dla przycisku.
    var $button = $('<button type="button" class="slide-btn">&bull;</button>');
    if (index === currentIndex) {    // Jeżeli indeks wskazuje na element bieżący.
      $button.addClass('active');    // Dodanie klasy active.
    }
    $button.on('click', function() { // Utworzenie procedury obsługi zdarzeń dla przycisku.
      move(index);                   // Wywołanie funkcji move().
    }).appendTo('.slide-buttons');   // Dodanie do elementu zawierającego przyciski.
    buttonArray.push($button);       // Dodanie przycisków do tablicy.
  });
  
  document.onkeydown = checkKey;
  function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
         if (currentIndex > 0) { move(currentIndex - 1);} 
         else {move($slides.length - 1);}}
    else if (e.keyCode == '40') {
        if (currentIndex < ($slides.length - 1)) { move(currentIndex + 1);} 
        else {move(0);}}
    else if (e.keyCode == '37') {
         if (currentIndex > 0) { move(currentIndex - 1);} 
         else {move($slides.length - 1);}}
    else if (e.keyCode == '39') {
         if (currentIndex < ($slides.length - 1)) { move(currentIndex + 1);} 
         else {move(0);}}
  }

  advance();                          // Skrypt jest już skonfigurowany, można wywołać funkcję advance().
});
}


})
