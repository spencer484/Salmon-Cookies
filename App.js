'use strict';


var storeHoursArr = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allLocations = [];
var parent = document.getElementById('table');



function Location(locationName, minCustomers, maxCustomers, averageCookieSale,) {
  this.location = locationName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageCookieSale = averageCookieSale;
  this.customersEachHour = [];
  this.cookiesSoldEachHour = [];
  this.totalCookiesForTheDay = 0;
  allLocations.push(this);
}

Location.prototype.calculateCustomersEachHour = function () {
  for (var i = 0; i < storeHoursArr.length; i++) {
    var customers = getRandomNumber(this.minCustomers, this.maxCustomers);
    this.customersEachHour.push(customers)
  }
}

Location.prototype.calculateCookiesSoldEachHour = function () {
  for (var i = 0; i < this.customersEachHour.length; i++) {
    var cookiesSoldForOneHour = Math.ceil(this.averageCookieSale * this.customersEachHour[i]);
    this.cookiesSoldEachHour.push(cookiesSoldForOneHour);
    this.totalCookiesForTheDay = this.totalCookiesForTheDay + cookiesSoldForOneHour;
  }
}

Location.prototype.render = function () {
  var tableRow = document.createElement('tr');
  for (var i = 0; i < storeHoursArr.length; i++) {
    var tableData = document.createElement('td');
    tableData.textContent = this.cookiesSoldEachHour[i];
    tableRow.appendChild(tableData);
  }

  var totalDailySales = document.createElement('td');
  totalDailySales.textContent = this.totalCookiesForTheDay;
  tableRow.appendChild(totalDailySales);

  parent.appendChild(tableRow);
}


var seattle = new Location(23, 65, 6.3, 'Seattle');
var tokyo = new Location(3, 24, 1.2, 'Tokyo');
var dubai = new Location(11, 38, 3.7, 'Dubai');
var paris = new Location(20, 38, 2.3, 'Paris');



function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateHeader() {
  var tableRow = document.createElement('tr');
  // parentElement.appendChild(tableRow);
  // var tableHead = document.createElement('th');
  // tableHead.textContent = 'Location';
  // tableRow.appendChild(tableHead);

  for (var i = 0; i < storeHoursArr.length; i++) {
    var tableHead = document.createElement('td');
    tableHead.textContent = storeHoursArr[i];
    tableRow.appendChild(tableHead);
  }

  var tableHead = document.createElement('td');
  tableHead.textContent = 'Daily Location Total';
  tableRow.appendChild(tableHead);
  table.appendChild(tableRow);
}

generateHeader();


for (var i = 0; i < allLocations.length; i++) {
  allLocations[i].calculateCustomersEachHour();
  allLocations[i].calculateCookiesSoldEachHour();
  allLocations[i].render();
}

// // ______________________________________________

// var personForm = document.getElementById('form');
// var allPeopleArray = [];

// function Person(name, story, animal) {
//   this.name = name;
//   this.story = story;
//   this.animal = animal;

//   allPeopleArray.push(this);
// }

// function handleSubmit(event) {
//   event.preventDefault();

//   var userName = event.target.userName.value;
//   var story = event.target.story.value;
//   var animal = event.target.animal.value;

//   new Person(userName, story, animal);

// }

// personForm.addEventListener('submit', handleSubmit);