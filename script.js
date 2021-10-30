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
    if (moment().isAfter(timeConverted)) {
      $(hourEl).addClass("past");
    } 
    //else if (Math.abs(moment().diff(timeConverted, "days")) <= 2) {
     // $(hourEl).addClass("list-group-item-warning");
   // }
    
  };

setInterval(function () {
  $(".time-block").each(function(index, el) {
    checkTime(el);
  });
}, (1000 * 60) * 60);