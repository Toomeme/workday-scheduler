//var hourEl = document.getElementsByClassName("hour");

var checkTime = function(hourEl) {
    // get date from task element
    var time = $(hourEl).children(".hour").text().trim();
  
    // convert to moment object at 5:00pm
    var timeConverted = moment(time, "ha");
    console.log(timeConverted);
  
    // remove any old classes from element
    $(hourEl).removeClass("past present future");
  
    // apply new class if task is near/over due date
    if (moment().isAfter(timeConverted,"hour")) {
      $(hourEl).addClass("past");
    } 
    else if (moment().isSame(timeConverted)) {
     $(hourEl).addClass("present");
    }
    else{
        $(hourEl).addClass("future");
    }
    
  };

setInterval(function () {
  $(".time-block").each(function(index, el) {
    checkTime(el);
  });
}, (1000 * 60) * 60);