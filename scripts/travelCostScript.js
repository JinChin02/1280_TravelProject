// JavaScript for travel cost estimator

// function to toggle tabs
function toggleTabs(event) {
  event.preventDefault();
  var tabs_current = document.querySelectorAll(".current");
  tabs_current.forEach((element) => {
    element.className = element.className.replace("current", "");
  });
  var anchor = event.target;
  var list = anchor.parentElement;
  list.className += " current";
  document.getElementById(anchor.href.slice(-5)).className += " current";
}

// add event listener to tab nav
let tab_nav = document.getElementById("tab_nav");
tab_nav.addEventListener("click", toggleTabs, false);

// function to check that a user has selected flight
function checkForFlight(flightNameC) {
    let flights = document.getElementsByName(flightNameC);
    let selectedValue = 0;
    for (let flight of flights) {
        if (flight.checked) {
            selectedValue = flight.value;
            break;
        }
    }
    if (selectedValue == 0) {
        throw "You have not selected any flight.";
    }
}

// function to check that a user has selected accomodation
function checkForAccomodation(accomodationNameC) {
    let accomodations = document.getElementsByName(accomodationNameC);
    let selectedValue = 0;
    for (let accomodation of accomodations) {
        if (accomodation.checked) {
            selectedValue = accomodation.value;
            break;
        }
    }
    if (selectedValue == 0) {
        throw "You have not selected any accomodation.";
    }
  }

  // function to check that a user has entered people number
function checkForPeopleInput(peopleIdC) {
    let peopleInput = document.getElementById(peopleIdC);
    if (peopleInput.value == "" || isNaN(peopleInput.value)) {
      throw "Please enter the number of people in your group.";
    }
}

  // function to check that a user has entered days number
  function checkForDaysInput(dayIdC) {
    let daysInput = document.getElementById(dayIdC);
    if (daysInput.value == "" || isNaN(daysInput.value)) {
      throw "Please enter the number of days.";
    }
}

// function to estimate travel cost
function estimateTravelCost(flightName,accomodationName,attractionName,peopleId,dayId) {
  try {
    checkForFlight(flightName);
    checkForAccomodation(accomodationName);
    checkForPeopleInput(peopleId);
    checkForDaysInput(dayId)
    var total = 0;
    var flight = 0;
    var accomodation = 0;
    var attractions = 0;
    let peopleInput = document.getElementById(peopleId);
    var people = parseInt(peopleInput.value);
    let daysInput = document.getElementById(dayId);
    var days = parseInt(daysInput.value);

    var flightChoices = document.getElementsByName(flightName);
    for (let i = 0; i < flightChoices.length; i++) {
      if (flightChoices[i].checked) {
        flight = parseInt(flightChoices[i].value) * people;
      }
    }

    var accomodationChoices = document.getElementsByName(accomodationName);
    for (let i = 0; i < accomodationChoices.length; i++) {
      if (accomodationChoices[i].checked) {
        accomodation = parseInt(accomodationChoices[i].value) * people * days;
      }
    }

    var attractionsChoices = document.getElementsByName(attractionName);
    for (let i = 0; i < attractionsChoices.length; i++) {
      if (attractionsChoices[i].checked) {
        attractions += attractionsChoices[i].value * people;
      }
    }

    var total = flight + accomodation + attractions;
    var output =
      "Flight cost: $" +
      flight.toFixed(2) +
      "<br>" +
      "Accomodations cost: $" +
      accomodation.toFixed(2) +
      "<br>" +
      "Attractions cost: $" +
      attractions.toFixed(2) +
      "<hr>" +
      "Total cost: $" +
      total.toFixed(2);
    document.getElementById("travelCost").innerHTML = output;
    document.getElementById("output").style.display = "block";
    alert( "Total cost: $" + total.toFixed(2) + " (Check down below for details)");
  } catch (error) {
    alert(error);
  }
}

var btn = document.getElementById("btnSubmit");
btn.onclick = function () {
  estimateTravelCost("flight", "accomodation", "attraction", "people", "days");
};

var btn = document.getElementById("btnSubmit2");
btn.onclick = function () {
  estimateTravelCost(
    "flight2",
    "accomodation2",
    "attraction2",
    "people2",
    "days2"
  );
};

var btn = document.getElementById("btnSubmit3");
btn.onclick = function () {
  estimateTravelCost(
    "flight3",
    "accomodation3",
    "attraction3",
    "people3",
    "days3"
  );
};

var btn = document.getElementById("btnSubmit4");
btn.onclick = function () {
  estimateTravelCost(
    "flight4",
    "accomodation4",
    "attraction4",
    "people4",
    "days4"
  );
};

var btn = document.getElementById("btnSubmit5");
btn.onclick = function () {
  estimateTravelCost(
    "flight5",
    "accomodation5",
    "attraction5",
    "people5",
    "days5"
  );
};

var btn = document.getElementById("btnSubmit6");
btn.onclick = function () {
  estimateTravelCost(
    "flight6",
    "accomodation6",
    "attraction6",
    "people6",
    "days6"
  );
};
