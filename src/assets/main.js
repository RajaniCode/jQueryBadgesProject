$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/RajaniCode.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      // your code will go here
      console.log(response);  
      response.courses.completed.forEach(function(element) {	
        // console.log(element);
        // console.log(element.badge);
        // console.log(element.title);		
        // console.log(element.url);
        $("#badges").append("<div class='course'><h3>" + element.title + "</h3><img src='" + element.badge + "'><a class='btn btn-primary' target='_blank' href=" + element.url + ">See Course</a></div>");		 
      });
    }
  });

});