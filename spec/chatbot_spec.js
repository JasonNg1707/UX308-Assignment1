import { processOrder } from "../chatbot.js";

describe("SMS Chatbot Orders", function () {

  it("orders pizza", function () {
    const reply = processOrder("I want pizza");
    expect(reply).toContain("size pizza");
  });

  it("orders burger", function () {
    const reply = processOrder("Can I get a burger");
    expect(reply).toContain("burger");
  });

  it("adds topping", function () {
    const reply = processOrder("pepperoni");
    expect(reply).toContain("Added pepperoni");
  });

  it("adds drink upsell", function () {
    const reply = processOrder("coke");
    expect(reply).toContain("Added a coke");
  });

});