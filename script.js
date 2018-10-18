$( document ).ready(function() {
  
  //on change of the selected value enable the function
  $("#articleSection").hide();
  $("#selectedValue").change(function() {
    //variable to represent the selected value
    var selection = $( "#selectedValue :selected" ).val();
    console.log( "ready!" );

    //take the selected value and use it in the url to select section/topic
    var url = ('https://api.nytimes.com/svc/topstories/v2/'+selection+'.json');
    url += '?' + $.param({
      'api-key': "6da6e906cd58411a996053a8cf5ab46b"
    });
    //make an ajax call to get the requested url
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
      //show the article section when the results are loaded
      $("header").css( "height", "15vh" );
      $("#articleSection").show();

      var x = 0;
      console.log(result);
      //create a div with the headline of article requested
      $.each(result, function() {
        $("#articleSection").append("<div class=\"article\">"+'<img src="'+result.results[x].multimedia[4].url+'">'+"<h1>"+result.results[x].abstract+"</h1>"+"</div>");
        //$('.article').append('<img src="'+result.results[x].multimedia[4].url+'">');
        x++;
      });
    }).fail(function(err) {
      throw err;
    });
    });  
});
