// titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.
// titleCase("sHoRt AnD sToUt") should return Short And Stout.
// titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout.

// - split the arr and assign it to var words
// - iterate over words.length
// - Replace the charAt[0] to uppercase for words[i]
// - Replace the words[i].substr(1) into lowercase
// - join the capitalized words

function titleCase(str) {
  var words = str.split(" ");
  for (var i = 0; i < words.length; i++) {
    var j = words[i].charAt(0).toUpperCase();
    words[i] = j + words[i].substr(1).toLowerCase();
  }
  console.log(words.join(" "));
}

titleCase("I'm a little tea pot");

// - split the arr and assign it to var char
// - iterate over words.length
// - Replace the charAt[0] to uppercase for words[i]
// - Add words[i].slice(1) after it
// - Push it to an empty arr
// - join the arr

function capitalize(str) {
  var char = str.split(" ");
  var words = [];

  for (var i = 0; i < char.length; i++) {
    words.push(char[i][0].toUpperCase() + char[i].slice(1));
  }
  console.log(words.join(" "));
}

capitalize("this is a test");
