/* API key:

9887a4684d44ab8428308aee2e17bbe0
*/

  
 $(document).ready(function() {

$('#get-quote').on('click', function() {

  $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?", function(data) {
  
      var html = data[0].content + "-" + data[0].title;
     
      
   $("#quote-content").html(html); 
      
    currentQuote = $('#quote-content'); 


$('#tweet').on('click', function() {
var text = $(currentQuote).text();   window.open('https://twitter.com/intent/tweet?&text=' + text);
  });
      
        });

    });

});

    
  
 
