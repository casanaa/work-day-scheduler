
$(function () {;
    buttonElement.addEventListener("click"), function(event)  
    {event.preventDefault();
    console.log(event)
    var message = 
        event, document,querySelector,description,valueOf
    };

    messages.push(message);
    console.log(messages);
    messages.textContent = JSON.stringify(message);
    localStorage.setItem("myMessages", JSON.stringify(message));
  
    function renderMessage() {
      var lastMessage = JSON.parse(localStorage.getItem("myMessages"));
        if (lastMessage !== null) {
          document.querySelector(".description").textContent = lastMessage
          console.log(lastMessage)

