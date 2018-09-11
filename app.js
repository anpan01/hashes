//function ready
$(function() {
  var urlwin = window.location.href.toString();
  console.log(window.location.href);
  var exp = RegExp(/[\?|\&]\w+\=([^&\n]*)/, 'g');
  var values;
  var valArray = [];
  if (urlwin.indexOf('?') > 0) {
    console.log('there is a query string');
    while((values = exp.exec(urlwin)) != null) {
      //switch statement for any other symbol+number parsing
      if (values[1].includes('%20')) {
        values[1].replace('%20', ' ');
      }
      console.log(values)
      valArray.push(values[1]);
    }
  }
 
  console.log(valArray);

  $('#test').on('click', function() {
    window.location.href += "?pet_name=" + $('#pet_name').val() + "&type=" + $('#type').prop('checked')  + "&age=" + $('#age').val(); 
  });
});