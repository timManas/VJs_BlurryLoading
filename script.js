const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0
let interval = setInterval(blurring, 30)

function blurring() {
  load++

  if (load > 99) {
    clearInterval(interval)
  }

  loadText.innerText = `${load}%` // Just sets the loading
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  //  // Blurs Image
  //   bg.style.filter = `blur(${scale(load, 0, 100, 0, 30)}px)` // Does the reverse

  // UnBlur Image
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

/*
Javascript / jQuery - map a range of numbers to another range of numbers
In other programming languages such as processing, 
there is a function which allows you to convert a number that falls within a range of numbers into a number within a different range.

What I want to do is convert the mouse's X coordinate into a range between, say, 0 and 15. 
So the browser's window dimensions, while different for every user, might be, say, 1394px wide, 
and the current X coordinate might be 563px, 
and I want to convert that to the range of 0 to 15.
*/
