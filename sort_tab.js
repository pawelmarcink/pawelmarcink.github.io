/* encoding="UTF-8" */
var compare = {                           // Zadeklarowanie obiektu compare.
  name: function(a, b) {                  // Dodanie metody o nazwie name().
    a = a.replace(/^the /i, '');          // Usunięcie słowa The z początku parametru.
    b = b.replace(/^the /i, '');          // Usunięcie słowa The z początku parametru.

    if (a < b) {                          // Jeżeli wartość a jest mniejsza od b.
      return -1;                          // Wartość zwrotna wynosi -1.
    } else {                              // W przeciwnym razie.
      return a > b ? 1 : 0;               // Jeżeli a jest większe niż b, zwróć 1, LUB
    }                                     // jeśli są takie same, zwróć 0.
  },

  num: function(a, b) {                  // Dodanie metody o nazwie date().
    return a - b;                         // Wartość zwrotna wynosi: a minus b.
  }
};

$('.sortable').each(function() {
  var $table = $(this);                     // Tabela do sortowania.
  var $tbody = $table.find('tbody');        // Zawartość tabeli.
  var $controls = $table.find('th');        // Nagłówki tabeli.
  var rows = $tbody.find('tr').toArray();   // Tablica przechowująca wiersze.

  $controls.on('click', function() {        // Kiedy użytkownik kliknie nagłówek.
    var $header = $(this);                  // Pobranie nagłówka.
    var order = $header.data('sort');       // Pobranie wartości atrybutu data-sort.
    var column;                             // Zadeklarowanie zmiennej o nazwie column.

    // Jeżeli wybrany element ma atrybut class o wartości ascending lub descending, trzeba odwrócić kolejność wierszy.
    if ($header.is('.ascending') || $header.is('.descending')) {  
      $header.toggleClass('ascending descending');  // Zmiana wartości atrybutu class na przeciwną.
      $tbody.append(rows.reverse());                // Odwrócenie kolejności elementów tablicy.
    } else {                                        // W przeciwnym razie trzeba posortować tablicę.                           
      $header.addClass('ascending');                // Dodanie klasy do nagłówka.
      // Usunięcie klasy z wszystkich pozostałych nagłówków.
      $header.siblings().removeClass('ascending descending'); 
      if (compare.hasOwnProperty(order)) {  // Jeżeli obiekt compare ma wskazaną metodę.
        column = $controls.index(this);         // Wyszukanie numeru indeksu kolumny.

        rows.sort(function(a, b) {               // Wywołanie metody sort() w tablicy rows.
          a = $(a).find('td').eq(column).text(); // Pobranie tekstu kolumny w wierszu a.
          b = $(b).find('td').eq(column).text(); // Pobranie tekstu kolumny w wierszu b.
          return compare[order](a, b);           // Wywołanie metody porównującej.
        });

        $tbody.append(rows);
      }
    }
  });
});
