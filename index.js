// 1. Declare global variable
var customerName = "bob";

// 2. Function that uppercases global variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Declare bestCustomer 
var bestCustomer;

function setBestCustomer() {
  bestCustomer = "not bob";
}

// 4. Overwrite bestCustomer
function overwriteBestCustomer(newFavorite) {
  bestCustomer = newFavorite;
}

// 5. Declare constant leastFavoriteCustomer
const leastFavoriteCustomer = "initial value";

function changeLeastFavoriteCustomer() {
 
  leastFavoriteCustomer = "new value"; // This will throw an error when called
}


module.exports = {
  customerName,
  upperCaseCustomerName,
  bestCustomer,
  setBestCustomer,
  overwriteBestCustomer,
  leastFavoriteCustomer,
  changeLeastFavoriteCustomer
};
