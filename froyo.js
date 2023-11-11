// Requesting the users froyo flavors with a default of vanilla,vanilla,vanilla,strawberry,coffee,coffee
const userInput = prompt("Please input the Froyo Flavors you wish to order", 'vanilla,vanilla,vanilla,strawberry,coffee,coffee');

// creating an array from the users input. 
const froyoInputs = userInput.split(',');

// function to count the flavors and create object.
function countFlavors(flavors) {
    orderObj = {}
    for (i = 0; i < flavors.length; i++) {
        if (orderObj[flavors[i]]) {
            orderObj[flavors[i]]++
        } else {
            orderObj[flavors[i]] = 1;
        }
    }
    return orderObj;
}

// calling the function and passing in the array
const orderTotal = countFlavors(froyoInputs);

// outputting the object to the console. 
console.log(orderTotal);
