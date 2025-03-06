function add(numbers) {
    if (numbers === "") return 0;

    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = parts[0].slice(2);
        numbers = parts[1];
    }

    const nums = numbers
        .replace(/\n/g, ",")
        .split(new RegExp(delimiter))
        .map(Number);
    
    return nums.reduce((sum, num) => sum + num, 0);
}

module.exports = add;