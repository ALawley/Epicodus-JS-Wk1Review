var apiKey = require('./../.env').apiKey;

exports.getRepos = function(searchedUser) {
  var searchAddress = 'https://api.github.com/users/' + searchedUser + '/repos?access_token=' + apiKey;
  $.get(searchAddress).then(function(response){
    console.log(response);
    $(".showRepos").empty();
    for (var i = 0; i < response.length; i++) {
      $(".showRepos").append('<li><a href="' + response[i].url + '">' + response[i].name + '</a> - ' + response[i].description + '</li>')
    }
    // $(".showRepos").html(response.forEach(repo) {
    //     '<li><a href="' + repo.url + '">' + repo.name + '</a> - ' + repo.description + '</li>'>
    //   });
    // $(".showRepos").text("Hello");
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
