// JavaScript for home page
// Sliding Images from Left to Right

$(document).ready(function () {
  
  $("#pictures ul").each(function () {
    
    setInterval(function () {
      $("#pictures ul").animate({ marginLeft: -800 }, 500, function () {
        
        $(this).css({ marginLeft: 0 });

        $(this).find("li:last").after($(this).find("li:first"));

      }); 
    }, 3000); 
  });
});
