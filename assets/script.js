// Get the current date
const currentDate = new Date();

// Get references to the HTML element
const currentDateElement = document.getElementById("currentDate");

// Format the date as desired (for example, "August 11, 2023")
const formattedDate = currentDate.toLocaleDateString("en-US", { 
    year: "numeric", 
    month: "long", 
    day: "numeric" 
});

// Set the formatted date as the content of the HTML element
currentDateElement.textContent = formattedDate;


   
  
  $(".time-div").each(function() {
    var timeDiv = $(this).attr("id").split("-")[1];

    if (currentHour == timeDiv) {
        $(this).addClass("present");
        $(this).children(".description").addClass("present");
      } 
    
    else if (currentHour < timeDiv) {
        $(this).removeClass("present");
        $(this).addClass("future");
      } 
      else if (currentHour > timeDiv) {
        $(this).removeClass("future");
        $(this).addClass("past");
    }
  
    // Button function to clear local storage and clear contents
    $("#clearFieldsBtn").click(function (event) {
      event.preventDefault;
      $("textarea").val("");
      localStorage.clear();
    });
  
    //grabs hour from each time slot and compares it to actual time
    $(".time-div").each(function () {
      var timeDiv = $(this).attr("id").split("-")[1];
      
      if (currentHour == timeDiv) {
        $(this).addClass("present");
        $(this).children(".description").addClass("white-text");
      } else if (currentHour < timeDiv) {
        $(this).removeClass("present");
        $(this).addClass("future");
      } else if (currentHour > timeDiv) {
        $(this).removeClass("future");
        $(this).addClass("past");
      }
    });
  
    //grabs values from time and value divs and saves them to local storage
    $(".saveBtn").click(function (event) {
      event.preventDefault();
      var value = $(this).siblings(".time-block").val();
      var time = $(this).parent().attr("id").split("-")[1];
      localStorage.setItem(time, value);
    }); 
  
    //retrieves items from local storage and sets them in proper places
    $("#hour-09 .time-block").val(localStorage.getItem("09"));
    $("#hour-10 .time-block").val(localStorage.getItem("10"));
    $("#hour-11 .time-block").val(localStorage.getItem("11"));
    $("#hour-12 .time-block").val(localStorage.getItem("12"));
    $("#hour-13 .time-block").val(localStorage.getItem("13"));
    $("#hour-14 .time-block").val(localStorage.getItem("14"));
    $("#hour-15 .time-block").val(localStorage.getItem("15"));
    $("#hour-16 .time-block").val(localStorage.getItem("16"));
    $("#hour-17 .time-block").val(localStorage.getItem("17"));

    $("#clearFieldsBtn").click(function(event) {
      event.preventDefault;
      $("textArea").val("");
      localStorage.clear();

  })})