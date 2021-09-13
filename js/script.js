
$(document).ready(function() {
  $(".design").click(function() {
    $("#d_showing").toggle();
    $(".d_hidden").toggle();
  });

  $(".development").click(function() {
    $("#dev_showing").toggle();
    $(".dev_hidden").toggle();
  });

  $(".product_management").click(function() {
    $("#product_showing").toggle();
    $(".product_hidden").toggle();
  });

  function submitForm() {
    var form = document.getElementById("message").addEventListener("click", function(event) {
    var name = $("input#name").val();
    alert( name + " we have received your message. Thank you for reaching out to us." );
    event.preventDefault();
  });
  }
  
  $(".image1").hover(function() {
    $(this).find(".project1").fadeIn(300);
  }, function() {
    $(this).find(".project1").fadeOut(100);
  });
  
  $(".image2").hover(function() {
    $(this).find(".project2").fadeIn(300);
  }, function() {
    $(this).find(".project2").fadeOut(100);
  });
  
  $(".image3").hover(function() {
    $(this).find(".project3").fadeIn(300);
  }, function() {
    $(this).find(".project3").fadeOut(100);
  });
  
  $(".image4").hover(function() {
    $(this).find(".project4").fadeIn(300);
  }, function() {
    $(this).find(".project4").fadeOut(100);
  });
  
  $(".image5").hover(function() {
    $(this).find(".project5").fadeIn(300);
  }, function() {
    $(this).find(".project5").fadeOut(100);
  });
  
  $(".image6").hover(function() {
    $(this).find(".project6").fadeIn(300);
  }, function() {
    $(this).find(".project6").fadeOut(100);
  });
  
  $(".image7").hover(function() {
    $(this).find(".project7").fadeIn(300);
  }, function() {
    $(this).find(".project7").fadeOut(100);
  });
  
  $(".image8").hover(function() {
    $(this).find(".project8").fadeIn(300);
  }, function() {
    $(this).find(".project8").fadeOut(100);
  }); 
});

function submitForm (){
  var name = $("input#name").val();
  alert(name+ " we have received your message. Thank you for reaching out to us.");
}