const rolls = {
  Original: {
    basePrice: 2.49,
    imageFile: "original-cinnamon-roll.jpg",
  },
  Apple: {
    basePrice: 3.49,
    imageFile: "apple-cinnamon-roll.jpg",
  },
  Raisin: {
    basePrice: 2.99,
    imageFile: "raisin-cinnamon-roll.jpg",
  },
  Walnut: {
    basePrice: 3.49,
    imageFile: "walnut-cinnamon-roll.jpg",
  },
  "Double-Chocolate": {
    basePrice: 3.99,
    imageFile: "double-chocolate-cinnamon-roll.jpg",
  },
  Strawberry: {
    basePrice: 3.99,
    imageFile: "strawberry-cinnamon-roll.jpg",
  },
};

/**
 * Updates the UI to display a particular car's info.
 * @param roll A car object containing a model and a description.
 */

let price = 0;
let amount = 1;

function displayPrice() {
  totalPrice.innerText = "$" + ((2.49 + price) * amount).toFixed(2);
}

function onSelectValueChangeGlazing() {
  // In this function, `this` corresponds to the select
  // element. So `this.value` will contain the value of the
  // selected option as a string.
  console.log("You selected " + this.value);

  // We need to convert the string value to an integer
  let rollIndex = parseInt(this.value);

  // Now retrieve the object at the index specified by the select's value
  let rollToDisplay = allRolls[rollIndex];

  price = rollToDisplay.price;

  // Update the UI
  displayPrice();
}

function onSelectValueChangeAmount() {
  // In this function, `this` corresponds to the select
  // element. So `this.value` will contain the value of the
  // selected option as a string.
  console.log("You selected " + this.value);

  // We need to convert the string value to an integer
  let sizeIndex = parseInt(this.value);

  // Now retrieve the object at the index specified by the select's value
  let sizeToDisplay = allSizes[sizeIndex];

  amount = sizeToDisplay.size;

  // Update the UI
  displayPrice();
}

let cart = [];
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll") || "Original";
let rollBasePrice = rolls[rollType].basePrice;

function updateDetail() {
  let detailItemName = (document.querySelector("#detail-item-name").innerHTML =
    rollType + "Cinnamon Roll");
  let detailItemImage = (document.querySelector("#detail-item-image").src =
    "assets/" + rollType + "-cinnamon-roll.jpg");
}

class Roll {
  constructor(rollType, rollGlazing, amount, rollBasePrice) {
    this.type = rollType;
    this.galzing = rollGlazing;
    this.size = amount;
    this.basePrice = rollBasePrice;
  }
}

let a = new Roll("Original", "Sugar Milk", 1, 2.49);
let b = new Roll("Walnut", "Vanilla Milk", 12, 39.9);
let c = new Roll("Raisin", "Sugar Milk", 3, 8.97);
let d = new Roll("Apple", "Original", 3, 10.47);

cart.push(a, b, c, d);

function addToCart() {
  let newRoll = new Roll(rollType, rollGlazing, amount, rollBasePrice);

  cart.push(newRoll);
}

function displayCart() {
  for (let i = 0; i < cart.length; i++) {
    let template = document.getElementById("template-item");

    console.log(template);

    let templateContent = template.content;

    document.body.appendChild(templateContent);
  }
}

displayCart();
