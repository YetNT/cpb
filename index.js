/*
The math is fairly simple. For example say you want to represent the progress bar at 75% or just 75. We will represent percentage as a number from 0 to 100. The math is:

(percentage / 100) * totalWidthOfProgressBar

So if we want 75% of the bar full and the width of the progress bar was 100 units wide then then the math would be:

(75 / 100) * 100 = 75 units

If the progress bar's width was 200 units then the math would be:

(75 / 100) * 200 = 150 units

And 150 would be 75% of 200

This is one way but I am sure there are more ways to calculate this. Some progressBar objects have functions that will automatically calculate this for you. Take a look at the documentation of the progress bar you are using. Good luck and happy coding.

*/
// var percentage = 78 
// var MAX = 10 

function bar(percentage, MAX, a, b) { // (Percent of the bar you want full (out of 100), Amount of units in the bar)

  if (typeof percentage !== "number" || (typeof MAX !== "number" && MAX >= 100)) {
    console.error("error")
    return;
  }

  var units = (percentage / 100) * MAX // Amount of units that will be shaded (Do Not Edit)
  var bar = []
  let empty = null, filled = null;
  
  for ( i = 0; i < MAX; i++) {

    if (a == undefined && b == undefined) {
      empty = "empty", filled = "filled"
    } else {
      empty = a, filled = b
    }
    
    if ( i < units) {
      bar.push(filled)
    } else {
      bar.push(empty)
    }
  }
  return bar

}

module.exports.bar = bar;
