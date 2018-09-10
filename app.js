//function ready
$(function() {
  var urlwin = window.location.href.toString();
  console.log(window.location.href);
  var exp = RegExp(/\?\w+\=(\w+|)/, 'g');
  var values;
  var valArray = [];
  while((values = exp.exec(urlwin)) != null) {
    console.log(values)
    valArray.push(values[1]);
  }

  console.log(valArray);


  $('#test').on('click', function() {
    window.location.href += "?pet_name=" + $('#pet_name').val() + "?type=" + $('#type').prop('checked')  + "?age=" + $('#age').val(); 
  });
});