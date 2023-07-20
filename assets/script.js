{
var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
{
today = mm+'-'+dd+'-'+yyyy;
console.log(today);}

}


$(function () {
    buttonElement.addEventListener("click", function(event) {
    {event.preventDefault();
    console.log(event)
    var message = 
        event, document,querySelector,description,valueOf
    }

    messages.push(message);
    console.log(messages);
    messages.textContent = JSON.stringify(message);
    localStorage.setItem("myMessages", JSON.stringify(message));
  
    function renderMessage() {
      var lastMessage = JSON.parse(localStorage.getItem("myMessages"));
        if (lastMessage !== null) {
          document.querySelector(".description").textContent = lastMessage
          console.log(lastMessage)
}}



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
    })})
