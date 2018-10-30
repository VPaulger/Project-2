Poject Info
- created a news app called Instanews. purpose of the app is to gather 12 of New York Times top articles from each category and display in a convenient web application.

Project Scope
- in order to gather articles, needed to make an ajax call using an api key and return a json file to populate the application with
- used jquery language to accomplish this task
- installing gulp and using the features was a requirement for workflow and progression as a web developer
- required scss for styling and ES6 for scripting

Styling
- web app was optomized for mobile, tablet and desktop view

Toubleshooting & Difficulties
- site is resposive for mobile, tablet and desktop view. however; if you are viewing site on desktop and adjust browser screen size to tablet or mobile and then back to desktop there are some styling issues. need to create media query/function which removes existing styling and replaces with original styling. attempted to incorporate
- had difficulty populating all 12 articles on the page as the console returned an error of cannot find "url" of undefined. found that this was because certail url paths did not contain the requested data. in order to overcome this had to set a property which measued the length of the returned array of the json file. after calculating the array length; if the requested index of an array did not exist then use the previous index array data.
- was challenging to determine the syntax for populating the page via jquery. after some careful thought and referencing to previous course exercises was able to determine the correct method to populate using a .append.
- styling a responsive site was also challenging as the header of the page had 3 designs before the user makes a selection as well as 3 designs after the selection. this styling required a combination of css and jquery. was required to create media queries in CSS for before user selection and create media queries in jQuery as the header changes in shape after the selection is made.
- was a very unfamiliar process to make an ajax call using an api key. with the help of tutorials and my peers, began to undestand exactly what was being done and can now succesfully make an ajax call and can disect the desired data.
- at first did not know what gulp was or how to use it. with the help of a lesson in class and an indepth Youtube tutorial was able to implement gulp. now have a solid undestanding of how to use and read gulp
- last difficulty was a rather simple problem with no found solution. was unable to ensure that all images pulled from json file were able to fill the available space for each article. most images fill the entire article space while others did not appear correctly if forced to fill the entire space. decided to overlook this last detail as all of the image are high quality and effictively illustrate the article.
- also tried to style the select button with a up and down arrows on the right side and blue background behind the arrows. tried to implement a css:after property to replace the text, rotate the text 90 degrees and change background color of the button. was not able to accomplish this task. also tried to use jquery methods but did not make a strong attempt.

Conclusion
- overall project was a success and completed all learning objectives
- was able to harness the power of an ajax call and navigate a returned json file to receive desired content/date
- deepened my undestanding of jquery and the potential of the language
- learned how to use gulp and can now develop websites more quickly and efficiently
