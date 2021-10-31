var checkTime = function(hourEl) {
    // get date from hour element
    var time = $(hourEl).children(".hour").text().trim();
  
    // convert to moment object with X AM formatting 
    var timeConverted = moment(time, "ha");
    console.log(timeConverted);
  
    // remove any old classes from element
    $(hourEl).removeClass("past present future");
  
    // apply new class if task is in the past
    if (moment().isAfter(timeConverted,"hour")) {
      $(hourEl).addClass("past");
    } // apply new class if task is in the present
    else if (moment().isSame(timeConverted,"hour")) {
     $(hourEl).addClass("present");
    }
    else{
        // apply new class if task is in the future
        $(hourEl).addClass("future");
    }
    
  };
// saving and loading, only runs when document is ready
  $(document).ready (function () {
      //load text content for every text block in data-store array
    $("*[data-store]").each(function () {
      $(this).val(localStorage.getItem("item-" + $(this).attr("data-store")));
    });

    //initial time block check
    $(".time-block").each(function(index, el) {
        checkTime(el);
      });


$("*[data-button]").on("click", function(){
        localStorage.setItem ("item-" + $(this).siblings("*[data-store]").attr("data-store"), $(this).siblings("*[data-store]").val());
        console.log("saved");
    });

  });


//update time blocks every hour
setInterval(function () {
  $(".time-block").each(function(index, el) {
    checkTime(el);
  });
}, (1000 * 60) * 60);
