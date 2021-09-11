
$(document).ready(function() {
  $(".design").click(function() {
    $(".d_showing").toggle();
    $(".d_hidden").toggle();
  });

  $(".development").click(function() {
    $(".dev_showing").toggle();
    $(".dev_hidden").toggle();
  });

  $(".product_management").click(function() {
    $(".product_showing").toggle();
    $(".product_hidden").toggle();
  })
});