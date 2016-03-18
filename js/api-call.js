var apiKey = require('./../.env').apiKey;

exports.getRepos = function(searchedUser){
  $.get('https://api.github.com/users/' + searchedUser + '/repos?access_token=' + apiKey).then(function(response){
    return response;
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
