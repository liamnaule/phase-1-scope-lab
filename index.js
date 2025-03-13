// Write your solution in this file!
// 1. Declaring a global variable 'customerName' using var and setting it to 'bob'
var customerName = 'bob';

// 2. This function changes the global customerName to uppercase
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// 3. Declaring 'bestCustomer' in global scope and setting it to 'not bob'
function setBestCustomer() {
    bestCustomer = 'not bob'; // I'm not using var, let, or const, so this becomes a global variable
}

// 4. Changing 'bestCustomer' to 'maybe bob'
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// 5. Declaring a constant 'leastFavoriteCustomer' in global scope
const leastFavoriteCustomer = 'someone';

// 6. Trying to change 'leastFavoriteCustomer' (this will cause an error because it's a constant)
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'someone else'; // This should fail since 'const' variables can't be reassigned
}

