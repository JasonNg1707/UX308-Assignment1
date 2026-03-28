let currentState = welcoming;

let order = {
  item: "",
  size: "",
  topping: "",
  drink: ""
};

export function handleInput(sInput) {
  return currentState(sInput);
}

export function clearInput() {
  currentState = welcoming;
  order = { item: "", size: "", topping: "", drink: "" };
}

// STEP 1: Welcome
function welcoming() {
  let aReturn = [];
  currentState = choosingItem;

  aReturn.push("Welcome to EatSpot");
  aReturn.push("What would you like to order? (pizza / burger / tacos)");

  return aReturn;
}

// STEP 2: Choose Item
function choosingItem(sInput) {
  let aReturn = [];
  const text = sInput.toLowerCase();

  if (text.includes("pizza")) {
    order.item = "pizza";
    currentState = choosingSize;
    aReturn.push("Great! What size pizza? (small / medium / large)");
  }
  else if (text.includes("burger")) {
    order.item = "burger";
    currentState = choosingSize;
    aReturn.push("Nice! Single or double burger?");
  }
  else if (text.includes("tacos")) {
    order.item = "tacos";
    currentState = choosingSize;
    aReturn.push("Awesome! 2-pack or 3-pack tacos?");
  }
  else {
    aReturn.push("Please choose pizza, burger, or tacos.");
  }

  return aReturn;
}

// STEP 3: Choose Size
function choosingSize(sInput) {
  let aReturn = [];
  order.size = sInput.toLowerCase();
  currentState = choosingTopping;

  if (order.item === "pizza") {
    aReturn.push("What topping? (pepperoni / mushroom / cheese)");
  }
  else if (order.item === "burger") {
    aReturn.push("What topping? (cheese / bacon / lettuce)");
  }
  else if (order.item === "tacos") {
    aReturn.push("What topping? (beef / chicken / salsa)");
  }

  return aReturn;
}

// STEP 4: Choose Topping
function choosingTopping(sInput) {
  let aReturn = [];
  order.topping = sInput.toLowerCase();
  currentState = upsellDrink;

  aReturn.push(`Added ${order.topping} to your ${order.size} ${order.item}.`);
  aReturn.push("Would you like a drink? (coke / sprite / water)");

  return aReturn;
}

// STEP 5: Upsell Drink
function upsellDrink(sInput) {
  let aReturn = [];
  const text = sInput.toLowerCase();

  if (text.includes("coke") || text.includes("sprite") || text.includes("water")) {
    order.drink = text;
    aReturn.push(`Added a ${order.drink}.`);
  }

  aReturn.push("Your order is complete 🎉");
  aReturn.push(`${order.size} ${order.item} with ${order.topping}` + 
               (order.drink ? ` and a ${order.drink}` : ""));

  currentState = welcoming;

  return aReturn;
}