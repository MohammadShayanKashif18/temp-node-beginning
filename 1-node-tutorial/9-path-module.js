import path from 'path';

console.log(path.sep)

const filePath = path.join('/content/','subfolder','test.txt')
console.log(filePath)

// // BASENAME sirf kisi bhi file path se file ka name aur extension return krta hai 
const base = path.basename(filePath)
console.log(base)

// // //  dirname ko use krne ke liyey yeh krna parey ga humey 
import { fileURLToPath } from 'url';

// // Current file ka path
const __filename = fileURLToPath(import.meta.url);

// // Current directory ka path
const __dirname = path.dirname(__filename);

console.log("Filename:", __filename);
console.log("Dirname:", __dirname);


const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)