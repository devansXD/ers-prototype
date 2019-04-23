$(document).ready(function(){
  $("select#autoselect").onFocus(function(){
    $("span").addClass("nhsuk-tag__highlight");
  });
});
