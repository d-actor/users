$(document).ready( function(){

  $.ajax({
    url: 'http://json-server.devpointlabs.com/api/v1/users',
    method: 'GET',
    dataType: 'JSON'
  }).done( function(users){
    console.log(users)
  }).fail( function(users){
    console.log('fail')
  })

});
