// We need to grab all the elements that we want to manipulate
// set the current active to a variable that can change
// add event listeners to the button to increment and decrement the current active
// add an update function that updates the dom
// the update function loops through our circles and if the index of that circle is less than the current active
// if true we add the active class to it
// if false we remove the active class from circles
// so now our circles are highlighted or not based on this logic
// then we grab all of our active circles
// we need to see how many active circles we have and how many circles overall we have
// we divide the two numbers and multiply it by 100 to get a percentage
// but we need it to go to the right places. initially is goes to 50% 75% and 100%...We need 33% and 66%
// so we take the length of both nodes and minus one. That gives us the right percentage
// then we do our button logic
// we check to see if the current active is equal to one 
// if it is we want the previous button to be disabled
// if current active is equal to the length/end of the node list..4 here.. we want to disable the next button
// if both of those statements are false aka we're in the middle, we want both buttons to be enabled




// Dom shit
const progress = document.querySelector('#progress')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const circles = document.querySelectorAll('.circle')

// this is gonna represent whichever circle is active. 1 is the default here
let currentActive = 1

// Our event listeners on the buttons
// When the next button is clicked we want to run a function that increments the current active is at the time
next.addEventListener('click', () => {
    currentActive++
// we want to keep it within its boundaries so it doesnt go past 4 in this case
// so here we're saying if the currentActive goes past the length of the circles. We can treat the circles like an array
    if(currentActive > circles.length) {
        currentActive = circles.length
    }
// then we want to call our update function
    update()
})

// Here we want to decrement the current Active every time the prev button is clicked
prev.addEventListener('click', () => {
    currentActive--
// We also want to keep it within its boundaries. In this case we dont want to decrement it below one
    if(currentActive < 1) {
        currentActive = 1
    }
// then we want to call our update function
    update()
})

// we want to update the dom with this function
const update = () => {
    // loop our circles which is a node list with our forEach
    // for each circle we're gonna check to see if the index of that circle is less than the current active
    // if true we add the active class to it
    // if false we remove the active class from circles
    // so now our circles are highlighted or not based on this logic
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
// now we want to grab all of the active circles
    const actives = document.querySelectorAll('.active')
// we want to handle our progress bar here
// we look to see how many active circles we have and how many circles in general we have
// then we want to divide the two and multiply it by 100 to get a number we can add a percentage to
// we want to get a percentage for our progress width
// in our css progress class we have a width propert of 0% set as default
// when we multiply by 100 it gives us an actual percentage
// but we need it to go to the right places. initially is goes to 50% 75% and 100%...We need 33% and 66%
// so we take the length of both nodes and minus one. That gives us the right percentage
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

// we check to see if the current active is equal to one 
// if it is we want the previous button to be disabled
// if current active is equal to the length/end of the node list..4 here.. we want to disable the next button
// if both of those statements are false aka we're in the middle, we want both buttons to be enabled
    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
    
}
