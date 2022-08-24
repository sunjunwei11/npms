const min = (...nums) => {
    return Math.min(...nums);
};

const minNum$1 = min(11, 13, 16);

const word = minNum$1 + 'hello';

const word2 = minNum$1 + 'hello2';

const minNum = min(2, 3, 4);

const add = (...nums) => {
    return nums.reduce((a, b) => a + b, 0);
};

console.log(word + word2 + add(1, 2, 3) + minNum);

export { add };
