$(document).ready( function(){
  $('.users-display').click( function(){
    $.ajax({
      url: 'http://json-server.devpointlabs.com/api/v1/users',
      method: 'GET',
      dataType: 'JSON'
    }).done( function(users) {
      users.forEach( function(user){
      var list = $('.user-list')
      var li = '<li data-user-id="' + user.id + '"><strong>' + user.first_name + ' - ' + user.last_name + '</strong>: ' + user.phone_number + '</li>'
      list.append(li)
      });
    });
  });

  $('#create-user').click( function(){
    $.ajax({
      url: 'http://json-server.devpointlabs.com/api/v1/users',
      method: 'POST',
      data: {
        user[first_name] $('#first-name')
        user[last_name] $('#last-name')
        user[phone_number] $('#phone-number')
      }
      dataType: 'JSON'
    }).done( function(){
      console.log("i did it")
      alert('Done son.')
    });
  });

});
