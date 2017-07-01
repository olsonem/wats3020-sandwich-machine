/* JavaScript for WATS 3020 Sandwich Machine Assignment */

// Gather data from the user 
let breadOrder = prompt ('What type of bread (white, wheat, flatbread)?');

let meatOrder = prompt ('What kind of meat (Seperate meats with a comma if you would like more than one.)');

let toppingsOrder = prompt ('Please list the toppings you would like (Seperate toppings with a comma)');

let condimentsOrder = prompt ('Please list any condiments you would like (Seperate condiments with a comma)');

// Calculate values for the user's order.

let prices = {
    sandwich: 5, 
    meat: 1, 
    topping: 0.5, 
    condiment: 0.25 
};

// Convert order information from Strings to Arrays.

let meatArray = meatOrder.split(',');
let toppingArray = toppingsOrder.split(',');
let condimentArray = condimentsOrder.split(',');

// Calculate cost for meat, toppings, and condiments.


let meatCost = meatArray.length * prices.meat;
let toppingCost = toppingArray.length * prices.topping;
let condimentCost = condimentArray.length * prices.condiment;

if (toppingArray.length > 1) { 
  let freeTopping = prompt ("You've added two toppings, so you qualify for a free third topping! What would you like to add to your sandwich?")
  };

// Combines the costs of each part of the sandwich to get the subtotal.
let subtotal = prices.sandwich + meatCost + toppingCost + condimentCost;

// Calculates the tax owed using the waStateTaxRate.
let waStateTaxRate = 0.065;
let orderTax = subtotal * waStateTaxRate;

// Calculates `totalPrice` by adding `subtotal` and `orderTax`.
let totalPrice = orderTax + subtotal;

let tipTen = totalPrice * 0.10;
let tipFifteen = totalPrice * 0.15;
let tipTwenty = totalPrice  * 0.20;


// Template literal providingn all of the info the user gave us to confirm the order.
// Also providing the cost information so the user understands their bill.

let receiptTemplate = `
    <p>SANDWICH ORDER</p>
    <p>Bread: ${breadOrder}</p>
    <p>Meat: ${meatOrder}</p>
    <p>Toppings: ${toppingsOrder}</p>
    <p>Condiments: ${condimentsOrder}</p>
    <p>---------------------</p>
    <p class="text-right">Sandwich: $${prices.sandwich.toFixed(2)}</p>
    <p class="text-right">Meat: $${meatCost.toFixed(2)}</p>
    <p class="text-right">Toppings: $${toppingCost.toFixed(2)}</p>
    <p class="text-right">Condiments: $${condimentCost.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Subtotal: $${subtotal.toFixed(2)}</p>
    <p class="text-right">Tax: $${orderTax.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Total: $${totalPrice.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p> Suggested Tips: </p>
    <p> 10% = $${tipTen.toFixed(2)}, 15% = $${tipFifteen.toFixed(2)} 20% = $${tipTwenty.toFixed(2)}</p>

`

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let receiptText = document.querySelector("#receipt-text");
receiptText.innerHTML = receiptTemplate;
