// Take the contents of the sonnet div and place it in a variable
// Find and output the starting position of the word "orphans"
// Output the number of characters in the sonnet
// Replace the first occurance of the string "winter" with "yuletide"
// Replace all occurances of the string "the" with "a large"
// Set the content of the sonnet div with the new string

var sonnetDiv = document.getElementById("sonnet").innerHTML;
// console.log("original sonnet: ", sonnetDiv);

var startingPosition = sonnetDiv.indexOf("orphans");
console.log("starting position of orphans: ", startingPosition);

// console.log("length of div: ", sonnetDiv.length);

var sonnetDiv1 = sonnetDiv.replace("winter", "yuletide");
// console.log("Just winter replaced: ", sonnetDiv1);
var sonnetDiv2 = sonnetDiv1.replace(/the /gi, "a large ");
// console.log("winter and the replaced: ", sonnetDiv2);

document.getElementById("sonnet").innerHTML = sonnetDiv2

