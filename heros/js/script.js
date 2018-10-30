$( document ).ready(function() {
  
  //by default hide the article section and loading image
  $(".articleSection").hide();
  $(".loadingImage").hide();

  //on change of the selected value enable the function
  $(".selectedValue").change(function() {

    //on change show he loading GIF image
    $(".loadingImage").show();
    //on change of the selected value remove any existing articles
    $(".articleSection").empty();

    //variable to represent the selected value
    let selection = $(".selectedValue :selected").val();

    //take the selected value and use it in the url to select section/topic
    let url = ('https://api.nytimes.com/svc/topstories/v2/'+selection+'.json');
    url += '?' + $.param({
      'api-key': "6da6e906cd58411a996053a8cf5ab46b"
    });

    //make an ajax call to get the requested url
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {

      //after the ajax call has been received show the article section
      $(".articleSection").show();

      //show the article section when the results are loaded & adjust height of header/navigation
      if ($(window).width() > 1240){	
        $("header").css("height", "150px");
        $(".logoDropDownContainer").css("align-items", "flex-start");
        $(".logoDropDownContainer").css("height", "50%");
      }

      //create a media query for tablet view
      //need to do this in javascript because the page changes on select
      if ($(window).width() < 1240){	
        $("header").css("height", "150px");
        $(".dropDownMenu").css("margin-left", "10%");
        }

      // create a media query for mobile view  
      if ($(window).width() < 600){	
        $("header").css("height", "350px");
        $(".logoDropDownContainer").css("height", "100%");
        $(".logoDropDownContainer").css("align-items", "center");
        $(".dropDownMenu").css("margin-left", "0%");
        $(".logoDropDownContainer").css("margin-top","10%");
        $(".logoDropDownContainer").css("margin-bottom", "15%");
        $(".logo").css("height", "60%");
        }		
      
      //for each result take the results and deliver the index value (key) and of that index
      //value deliver a value of the requested array
      $.each(result.results, function(key, value) {
        $(".loadingImage").hide();
        
        //if the multimedia value is less than or equal to 5 replace the index value with a variable
        if (value.multimedia.length <= 5) {
          mediaValue = value.multimedia.length -1;
        }

        //if the array in the returned json file has a length less than 0 then skip to next article
        if (value.multimedia.length > 0){

          //create a div with the link, headline and image of article requested
          $(".articleSection").append("<div class='article'>"+'<a target="_blank" href="'+ value.short_url+'">'+'<img src="'+value.multimedia[mediaValue].url+'">'+"<h1>"+value.abstract+"</h1>"+'</a>'+"</div>");
        }
      });
    }).fail(function(err) {
      throw err;
    });
    });  
});
