'use strict';


// var storeSales = document.getElementById('stores');



function Store(storeName, minCustomersPerHour, maxCustomersPerHour, averageCookiesPerCustomer, customersEachHourArray, cookiesSoldEachHourArray, totalCookiesTheDay) {
  this.storeName = storeName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.customersEachHourArray = customersEachHourArray;
  this.cookiesSoldEachHourArray = cookiesSoldEachHourArray;
  this.totalCookiesTheDay = 0;

  // Store.push(this);
}

console.log(Store);

function NumberCustomers() {
  this.NumberCustomers = function() {
    for(var i = 0 ; i < hoursArray.length ; i++) {
      var randomCustomer = getRandom(this.minCustomersPerHour, this.maxCustomersPerHour);
      this.customersEachHourArray.push(randomCustomer);
    }
  };

  NumberCustomers.push(this);
}

console.log(NumberCustomers);

// calculateCustomers: function() {
//   for(var i = 0 ; i < hoursArray.length ; i++) {
//     var randomCustomer = getRandom(this.minCustomersPerHour, this.maxCustomersPerHour);
//     this.customersEachHourArray.push(randomCustomer);
//   }
// };

function CalculateCookies() {
  for(var i = 0 ; i < this.customersEachHourArray.length ; i++){
    var cookies = Math.round(this.customersEachHourArray[i] * this.averageCookiesPerCustomer);
    this.totalCookiesTheDay += cookies;
    this.cookiesSoldEachHourArray.push(cookies);
  }
  CalculateCookies.push(this);
}

console.log(CalculateCookies);

// calculateCookies: function() {
//   for(var i = 0 ; i < this.customersEachHourArray.length ; i++){
//     var cookies = Math.round(this.customersEachHourArray[i] * this.averageCookiesPerCustomer);
//     this.totalCookiesTheDay += cookies;
//     this.cookiesSoldEachHourArray.push(cookies);
//   }
// };

// render: function() {
//   this.calculateCustomers(),
//   this.calculateCookies();
//   var ulEl = document.createElement('ul');
//   var h2El = document.createElement('h2');
//   h2El.textContent = this.storeName;
//   storeSales.appendChild(h2El);
//   for( var i = 0; i < hoursArray.length; i++ ) {
//     var liEl = document.createElement('li');
//     liEl.textContent = `${hoursArray[i]}: ${this.cookiesSoldEachHourArray[i]} Cookies`;
//     ulEl.appendChild(liEl);
//   }
//   liEl = document.createElement('li');
//   liEl.textContent = `Total: ${this.totalCookiesTheDay} Cookies`;
//   ulEl.appendChild(liEl);
//   storeSales.appendChild(ulEl);
// };

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min +1)) + min;
}


// seattle.render();
// lima.render();
// tokyo.render();
// dubai.render();
// paris.render();

new Store('Seattle', 23, 65, 6.3);
new Store('Lima', 2, 65, 4.6);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
