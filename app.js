//function ready
$(function() {
  var url = window.location.href.toString();
  console.log(window.location.href);
  var values = [];

  for (i = 0; i < url.length; i ++){
    if (url.includes('?')) {
      var exp = RegExp(/\?\w+\=(\w+|)/);
      var valArray = exp.exec(url);
      
      values.push(valArray[1]);
    }
  }

  console.log(values);


  $('#test').on('click', function() {
    window.location.href += "?pet_name=" + $('#pet_name').val() + "?type=" + $('#type').prop('checked')  + "?age=" + $('#age').val(); 
  });
});