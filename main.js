var currentDate = new Date();
var christmasDate = new Date(2021, 11, 25); //months: january = 0, february = 1, .., december: 11)
var newYearDate = new Date(2022, 0, 01);
var valentinesDayDate = new Date(2022, 1, 14);

function countDaysUntil(date) {
  return (date - currentDate) / (24 * 3600 * 1000);
}

function showDaysUntil(date, dayString) {
  $("#days-until-list").append(
    "<li>" +
      parseInt(countDaysUntil(date) + 1).toString() +
      " days until " +
      dayString +
      "</li>"
  );
}

function showAllDays() {
  showDaysUntil(christmasDate, "Christmas");
  showDaysUntil(newYearDate, "New Year");
  showDaysUntil(valentinesDayDate, "Valentines Day");
}

$("#show-days-button").click(showAllDays);
