
// // readfilesync humey jo bhi txt file main likha hoga woh dekhaiga 

import { readFileSync, writeFileSync} from 'fs';

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first, second)

// // writefilesync humey ik new txt file create krdega folder main 
// // or {flag: 'a'} se line do bar likh kr ajayegi txt file main 

writeFileSync(
    './content/result-sync.txt', 
    `Here is the result : ${first}, ${second}`,
    {flag : 'a'}
)
