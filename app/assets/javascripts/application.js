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

var quoteArray = ["Tell me and I forget, teach me and I may remember, involve me and I learn.",
  "By failing to prepare, you are preparing to fail.",
  "Genius without education is like silver in the mine.",
  "The best preparation for tomorrow is doing your best today.",
  "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
  "A fool thinks himself to be wise, but a wise man knows himself to be a fool.",
  "Better three hours too soon than a minute too late.",
  "In order to succeed, we must first believe that we can.",
  "Don't watch the clock; do what it does. Keep going.",
  "You are never too old to set another goal or to dream a new dream.",
  "The secret of getting ahead is getting started.",
  "Progress is impossible without change, and those who cannot change their minds cannot change anything.",
  "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.",
  "Coming together is a beginning; keeping together is progress; working together is success.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking. Don't let the noise of others' opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition.",
  "My favorite things in life don't cost any money. It's really clear that the most precious resource we all have is time."
];

var authorArray = ["Benjamin Franklin",
  "Benjamin Franklin",
  "Benjamin Franklin",
  "H. Jackson Brown, Jr",
  "Dr. Seuss",
  "William Shakespeare",
  "William Shakespeare",
  "Nikos Kazantzakis",
  "Sam Levenson",
  "C. S. Lewis",
  "Mark Twain",
  "George Bernard Shaw",
  "Barack Obama",
  "Henry Ford",
  "Winston Churchill",
  "Steve Jobs",
  "Steve Jobs"
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
