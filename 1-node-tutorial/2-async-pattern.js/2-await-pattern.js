import {readFile, writeFile} from 'fs';

// util ik automatic promise return krta hai humey function bana kr promise return krne ki zaroorat nh manually 
import util from 'util';
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)


// path ka use krky hum kisi bhi file ko read krskty hain na ke ik singke file
// const getText = (path) => {
//     return new Promise((resolve, reject) =>{
//         readFile(path, 'utf-8', (err, data) => {
//             if(err){
//                 reject(err);
//             } else{
//                resolve(data)
//             }
            
//         })
//     })
// }

//  without async await ke liyey then and catch ka use karey gai output ke liyey 
// getText('./content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))


// without util 
// const start = async () =>{
//     try{
//         const first = await getText('./content/first.txt');
//         const second = await getText('./content/second.txt');
//         console.log(first, second)
//     }catch(error){
//         console.log('Error Message')
//     }
// }
    

// start();


//  yeh util ka use krky return kr rha hai output 
const start = async () =>{
    try{
        const first = await readFilePromise('./content/first.txt', 'utf-8');
        const second = await readFilePromise('./content/second.txt', 'utf-8');
        await writeFilePromise(
            './content/result-mind-gernade.txt',
            `This is AWESOME: ${first} ${second}`)
        console.log(first, second)
    }catch(error){
        console.log('Error Message')
    }
}
    

start();


