const add = require("../src/calculator");

test("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
});

test("returns the number itself for a single input", () => {
    expect(add("1")).toBe(1);
});

test("returns sum of two comma-separated numbers", () => {
    expect(add("1,5")).toBe(6);
});

test("returns sum of multiple comma-separated numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
});