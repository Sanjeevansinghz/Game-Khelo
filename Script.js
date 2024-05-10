function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
  
    // Pad single digit minutes and seconds with leading zero
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
  
    // Determine whether it's AM or PM
    var period = (hours < 12) ? "AM" : "PM";
  
    // Convert to 12-hour clock format
    hours = (hours > 12) ? hours - 12 : hours;
  
    // Add the time to the page
    document.getElementById('clock').innerHTML = hours + ":" + minutes + ":" + seconds + " " + period;
  
    // Update every second
    setTimeout(updateTime, 1000);
  }
  
  // Call the function to display the time
  updateTime();
  