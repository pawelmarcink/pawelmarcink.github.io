/* encoding="UTF-8" */
(function() {  
  $('#search').css( {display: 'block'} );                  
  var $divs = $('#gallery div');          
  var $search = $('#filter-search');      
  var cache = [];    
  var tag="wszystko";

  var $buttons = $('#buttons'); 
  var tagged = {};                      

  $divs.each(function() {
    var div=this; 
    var tags = $(this).data('tags');  
    if (tags) { 
       tags.split(',').forEach(function(tagName) {
          if (tagged[tagName] == null) {
             tagged[tagName] = [];
          }
        tagged[tagName].push(div);
        });
    }
               
    cache.push({                          
      element: this,                      
      alt: this.lastElementChild.alt.trim().toLowerCase(),
      data:  this.dataset.tags
    });
  });

  function filter1() {                     
    var query = this.value.trim().toLowerCase();  
    cache.forEach(function(div) {         
      var index = 0;  
      var index2= tag=="wszystko" ? 0 : div.data.indexOf(tag);                  
      if (query) {index = div.alt.indexOf(query);}
      div.element.style.display = (index === -1 || index2 === -1) ? 'none' : '';
    });
  }

  if ('oninput' in $search[0]) {          
    $search.on('input', filter1);          
  } else {                                
    $search.on('keyup', filter1);          
  }   
  
    $('<button/>', {                                 
    text: 'Wyświetl wszystko',                     
    class: 'active',                               
    click: function() {                            
      $(this)                                      
        .addClass('active')                        
        .siblings()                                
        .removeClass('active');                    
      $divs.show();
      tag="wszystko";                                
    }
  }).appendTo($buttons);    

   $.each(tagged, function(tagName) {               
    $('<button/>', {                               
      text: tagName + ' (' + tagged[tagName].length + ')', 
      click: function() {                          
        $(this)                                    
          .addClass('active')                      
          .siblings()                              
          .removeClass('active');                  
        $divs                                    
          .hide()                                  
          .filter(tagged[tagName])                 
          .show();                         
          $search[0].value="";
          tag=tagName;
      }
    }).appendTo($buttons);                         
  });        

}());
