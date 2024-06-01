import { season, temperature } from './name-exports.mjs';
import { isRaining, humidity } from './inline-exports.mjs';
import helloName from './default-export.mjs';
import DEFAULT_SERVER, {
    USERNAME as MY_USERENAME,
    PASSWORD as MY_PASWORD,
} from './mixed-exports.mjs';

console.log(season);
console.log(temperature);

console.log(isRaining);
console.log(humidity);

console.log(helloName('Axl'));

console.log(DEFAULT_SERVER);
console.log(MY_USERENAME, MY_PASWORD);
