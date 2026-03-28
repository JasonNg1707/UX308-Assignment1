import { handleInput, clearInput } from '../Order.js';

describe("Tests all stages of a food order", function () {

    beforeEach(function () {
        clearInput();
    });

    // STEP 1: Welcome
    it("test welcome", function () {
        const aResults = handleInput("hello");
        expect(aResults[0]).toContain("Welcome to EatSpot");
    });

    // STEP 2: Choose item
    it("test choosing pizza", function () {
        handleInput("hello");
        const aResults = handleInput("pizza");
        expect(aResults[0]).toContain("pizza");
    });

    it("test choosing burger (2nd item)", function () {
        handleInput("hello");
        const aResults = handleInput("burger");
        expect(aResults[0]).toContain("burger");
    });

    it("test choosing tacos (3rd item)", function () {
        handleInput("hello");
        const aResults = handleInput("tacos");
        expect(aResults[0]).toContain("tacos");
    });

    // STEP 3: Choose size
    it("test choosing size", function () {
        handleInput("hello");
        handleInput("pizza");
        const aResults = handleInput("medium");
        expect(aResults[0]).toContain("topping");
    });

    // STEP 4: Choose topping
    it("test choosing topping", function () {
        handleInput("hello");
        handleInput("pizza");
        handleInput("medium");
        const aResults = handleInput("pepperoni");
        expect(aResults[0]).toContain("Added pepperoni");
    });

    // STEP 5: Upsell drink
    it("test adding drink (upsell)", function () {
        handleInput("hello");
        handleInput("pizza");
        handleInput("medium");
        handleInput("pepperoni");
        const aResults = handleInput("coke");
        expect(aResults[0]).toContain("Added a coke");
    });

    // STEP 6: Complete order
    it("test order completion", function () {
        handleInput("hello");
        handleInput("pizza");
        handleInput("medium");
        handleInput("pepperoni");
        const aResults = handleInput("no");
        expect(aResults[0]).toContain("Your order is complete");
    });

});