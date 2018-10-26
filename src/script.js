$( document ).ready(function() {
  
  //on change of the selected value enable the function
  $("#articleSection").hide();
  $("#selectedValue").change(function() {

    //on change of the selected value remove any existing articles
    $("#articleSection").empty();

    //variable to represent the selected value
    var selection = $("#selectedValue :selected").val();
    console.log("ready!");

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
      $("header").css("height", "150px");
      $("#logoDropDownContainer").css("align-items", "flex-start");
      $("#logoDropDownContainer").css("height", "50%");
 
      $("#articleSection").show();
      //create a media query for tablet view
      //need to do this in javascript because the page changes on select
      if ($(window).width() <= 1240){	
        $("#dropDownMenu").css({"margin-left":"10%"});
        }

      // create a media query for mobile view  
      if ($(window).width() <= 600){	
        $("header").css("height", "350px");
        $("#logoDropDownContainer").css("height", "100%");
        $("#logoDropDownContainer").css("align-items", "center");
        $("#dropDownMenu").css({"margin-left":"0%"});
        $("#logoDropDownContainer").css({"margin-top":"10%"});
        $("#logoDropDownContainer").css({"margin-bottom":"15%"});
        $("#logo").css("height", "60%");
        }		
      
      //for each result take the result of results and and run the function and take the value 
      //of the multimedia array element vv
      //*****make a detailed note of the parameters of the code below vv */
      $.each(result.results, function(key, value) {

        //if the array in the returned json file has a length less than 0 then skip to next article
        if (value.multimedia.length > 0){

        //create a div with the headline of article requested
        $("#articleSection").append("<div class='article'>"+'<a target="_blank" href="'+ value.short_url+'">'+'<img src="'+value.multimedia[4].url+'">'+"<h1>"+value.abstract+"</h1>"+'</a>'+"</div>");
      
        }
      });
    }).fail(function(err) {
      throw err;
    });
    });  
});
