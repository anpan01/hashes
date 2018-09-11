//function ready
var urlwin = window.location.href.toString();
var exp = RegExp(/[\?|\&]\w+\=([^&\n]*)/, 'g');
var values;
var valArray = [];

$(function() {
  console.log(window.location.href);
  if (urlwin.indexOf('?') > 0) {
    console.log('there is a query string');
    while((values = exp.exec(urlwin)) != null) {
      //switch statement for any other symbol+number parsing
      if (values[1].includes('%20')) {
        console.log('space found');
        console.log(values[1]);
        valArray.push(values[1].replace('%20', ' '));
      } else {
        valArray.push(values[1]);
      }     
    }
  }
  //console.log(valArray);
  $('#pet_name').val(valArray[0]);
  $('#type').val(valArray[1]);
  $('#age').val(valArray[2]);

  $('#test').on('click', function() {
    window.location.href += "?pet_name=" + $('#pet_name').val() + "&type=" + $('#type').prop('checked')  + "&age=" + $('#age').val(); 
  });
});