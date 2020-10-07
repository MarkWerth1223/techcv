// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.github.com/users/MarkWerth1223/repos', true)

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  var statusHTML = '';
  $.each(data, function(i, status) {
    statusHTML += '<div>';
    statusHTML += '<p>' +'.repname' + '</p>';
    statusHTML += '<p>' +'.repolink' + '</p>';
    statusHTML += '</div>';
  });
  $('tbody').html(statusHTML);
}

// Send request
request.send();