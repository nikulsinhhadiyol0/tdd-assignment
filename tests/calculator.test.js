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

test("handles new lines as delimiters in addition to commas", () => {
    expect(add("1\n2,3")).toBe(6);
});

test("supports custom delimiters specified at the start", () => {
    expect(add("//;\n1;2")).toBe(3);
});

test("throws an exception for negative numbers", () => {
    expect(() => add("1,-2,3,-4")).toThrow("Negative numbers not allowed: -2, -4");
});