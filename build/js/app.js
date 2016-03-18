(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "228333977d2055cd97f77cb024d98ba47865d0c0";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

exports.getRepos = function(searchedUser) {
  $.get('https://api.github.com/users/' + searchedUser + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    var repos = response;
    console.log(repos);
    return repos;
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"../js/api-call.js":2}]},{},[3]);
