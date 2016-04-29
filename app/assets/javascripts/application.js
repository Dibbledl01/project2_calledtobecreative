// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

var quoteArray = ["I am seeking. I am striving. I am in it with all my heart.",
  "Creativity takes courage.",
  "Whether you succeed or not is irrelevant, there is no such thing. Making your unknown known is the important thing.",
  "The best preparation for tomorrow is doing your best today.",
  "If I create from the heart, nearly everything works; if from the head, almost nothing.",
  "Have no fear of perfection, you'll never reach it.",
  "There's no retirement for an artist, it's your way of living so there's no end to it.",
  "Great things are done by a series of small things brought together.",
  "If you ask me what I came to do in this world, I, an artist, will answer you: I am here to live out loud!",
  "Do not fear mistakes - there are none.",
  "If you always do what you always did - you'll always get what you always got.",
  "I invent nothing, I rediscover."
];

var authorArray = ["Vincent van Gogh",
  "Henri Matisse",
  "Georgia O'Keeffe",
  "H. Jackson Brown, Jr",
  "Marc Chagall",
  "Salvador Dali",
  "Henry Moore",
  "Vincent van Gogh",
  "Emile Zola",
  "Miles David",
  "Unknown",
  "Auguste Rodin"
];

$("#quote").html(quoteArray[0]);
$("#author").html("- " + authorArray[0]);
tweetQuote();

function getRandom(max) {
  return Math.floor(Math.random() * (max));
}

function newQuote() {
  var randomInt = getRandom(quoteArray.length - 1);
  $("#quote").html(quoteArray[randomInt]);
  $("#author").html("- " + authorArray[randomInt]);
  tweetQuote();
}

function tweetQuote(){
  var tweet = "https://twitter.com/intent/tweet?text=".concat($("#quote").text()+"  "+$("#author").text());
  $(".twitter-share-button").attr("href",tweet);
}
