'use strict';

var storeHoursArr = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']


var seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieBuy: 6.3,
  totalCookiesForTheDay: 0,
  // an array of customers each hour
  customersEachHour: [],

  // an array of cookies sold each hour
  cookiesSoldEachHour: [],

  // function to generate my customers each hour
  calculateCustomersEachHour: function () {
    // the job of this method is to populate the customersEachHour array
    // use the min minCust and the maxCust in a random number function to generate a random number
    // push that random number to the array
    for (var i = 0; i < storeHoursArr.length; i++) {
      var customers = getRandomNumber(this.minCust, this.maxCust);
      this.customersEachHour.push(customers)
    }
  },

  // function to generate our cookiesSoldEachHour array
  calculateCookiesSoldEachHour: function () {
    // loop through my customersEachHour array and multiply each value by the average cookie sale
    // push that number into my cookiesSoldEachHour array
    for (var i = 0; i < this.customersEachHour.length; i++) {
      var cookiesSoldForOneHour = Math.ceil(this.avgCookieBuy * this.customersEachHour[i]);
      this.cookiesSoldEachHour.push(cookiesSoldForOneHour);
      this.totalCookiesForTheDay = this.totalCookiesForTheDay + cookiesSoldForOneHour;
    }
  },

  // function that renders our cookiesSoldEachHour to the page
  render: function () {
    // grab an id for the store name
    var seattleStoreName = document.getElementById('seattle-name');
    // fill it with the name of the store
    seattleStoreName.textContent = this.location;

    // grab an id on the DOM
    var parentElement = document.getElementById('seattle');
    // loop over cookiesSoldEachHour
    for (var i = 0; i < this.cookiesSoldEachHour.length; i++) {
      // create an li
      var listItem = document.createElement('li');
      // fill it with content
      listItem.textContent = `${storeHoursArr[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
      // append it to the DOM
      parentElement.appendChild(listItem);
    }

    listItem = document.createElement('li');
    listItem.textContent = `Total: ${this.totalCookiesForTheDay}`;
    parentElement.appendChild(listItem);
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

seattle.calculateCustomersEachHour();
seattle.calculateCookiesSoldEachHour();
seattle.render();






//-----------------------------------------------------------------------------------------

var parentElement = document.getElementById('table');
var allPets = [];


function Pet(name, type, color, age) {
  this.PetName = name;
  this.type = type;
  this.color = color;
  this.age = age;

  // push the object instance into the allPets array
  allPets.push(this);
}

Pet.prototype.renderTableList = function () {
  // create a tr
  var tableRow = document.createElement('tr');
  parentElement.appendChild(tableRow);
  //create a td
  var tableData = document.createElement('td');
  tableData.textContent = this.type;
  tableRow.appendChild(tableData);

  var tableData = document.createElement('td');
  tableData.textContent = this.color;
  tableRow.appendChild(tableData);

  var tableData = document.createElement('td');
  tableData.textContent = this.age;
  tableRow.appendChild(tableData);
}

new Pet('fluffy', 'cat', 'white', 1);
new Pet('Tom', 'cat', 'orange', 2);
new Pet('Spot', 'dog', 'brown', 6);

function generateHeader() {

  var tableRow = document.createElement('tr');
  parentElement.appendChild(tableRow);
  var tableHead = document.createElement('th');
  tableHead.textContent = "Name"
  tableRow.appendChild(tableHead);

  var tableHead = document.createElement('th');
  tableHead.textContent = "Type"
  tableRow.appendChild(tableHead);

  var tableHead = document.createElement('th');
  tableHead.textContent = "Color"
  tableRow.appendChild(tableHead);

  var tableHead = document.createElement('th');
  tableHead.textContent = "Age"
  tableRow.appendChild(tableHead);
}
generateHeader();

for (var i = 0; i < allPets.length; i++) {
  allPets[i].renderTableList;
}
