import { word, word2 } from './hello';
import min from './min';

const minNum = min(2, 3, 4);

const add = (...nums) => {
    return nums.reduce((a, b) => a + b, 0);
}

export {
    add
}

console.log(word + word2 + add(1, 2, 3) + minNum);
