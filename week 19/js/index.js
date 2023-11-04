console.log ("Your index.js file is loaded correctly!");
$(document).ready(function() {
    // Attach the hover effect to the .img1 element
    $(".img1").hover(
      function() {
        // Mouse over (hover) event
        $(this).css("background-color", "rgba(128, 160, 200, 0.2)");
      },
      function() {
        // Mouse out (no hover) event
        $(this).css("background-color", ""); // Restore the default background
      }
    );
  }); 

  $(document).ready(function() {
    // Animate the headshot to full size
    $(".headshot").css("transform", "scale(1)");
  });