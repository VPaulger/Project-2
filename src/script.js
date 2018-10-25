$( document ).ready(function() {
  
  //on change of the selected value enable the function
  $("#articleSection").hide();
  $("#selectedValue").change(function() {

    //on change of the selected value remove any existing articles
    $( "#articleSection" ).empty();

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

      //show the article section when the results are loaded & adjust height of header/navigation
      $("header").css( "height", "20vh" );
      $("#articleSection").show();
      if ($(window).width() <= 1240){	
        $("#dropDownMenu").css( { "margin-left" : "10%" } );
        console.log("applying margin-left to style");
        }	

      //*****make a detailed note of the parameters of the code below vv */
      $.each(result.results, function(key, value) {

        //if the array in the returned json file has a length less than 0 then skip to next article
        if (value.multimedia.length > 0){

        //create a div with the headline of article requested
        $("#articleSection").append("<div class='article'>"+'<img src="'+value.multimedia[4].url+'">'+"<h1>"+value.abstract+"</h1>"+"</div>");
        }
      });
    }).fail(function(err) {
      throw err;
    });
    });  
});
