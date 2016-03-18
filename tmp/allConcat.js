var getRepos = require('../js/api-call.js').getRepos;

$(document).ready(function() {
  $('#getrepos').click(function() {
    var username = $('#username').val();
    $('#username').val("");
    var repos = getRepos(username);
    console.log(repos);
    $('.showRepos').text("Hello " + username);
  });
});
