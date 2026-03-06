import { menu, drinks } from "./menu.js";

export function processOrder(message) {

  const text = message.toLowerCase();

  if (text.includes("pizza")) {
    return "Great choice! What size pizza would you like? (small / medium / large)";
  }

  if (text.includes("burger")) {
    return "Nice! Would you like a single or double burger?";
  }


  for (let item in menu) {
    for (let topping of menu[item].toppings) {
      if (text.includes(topping)) {
        return "Added " + topping + "! Would you like a drink with that?";
      }
    }
  }

  
  for (let drink of drinks) {
    if (text.includes(drink)) {
      return "Added a " + drink + " to your order! Your order will be ready soon.";
    }
  }

  return "Welcome! You can order pizza or burger.";
}