var getRepos = require('../js/api-call.js').getRepos;

$(document).ready(function() {
  $('#getrepos').click(function() {
    var username = $('#username').val();
    $('#username').val("");
    getRepos(username);
    // $('.showRepos').text("hello");
  });
});
