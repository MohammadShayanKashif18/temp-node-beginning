import {readFile} from 'fs';

console.log('Started a first task')

readFile('../content/first.txt', 'utf-8', (err, result) => {
    if(err) {
        console.log(err)
        return 
    }
    console.log(result)
    console.log('complete first task')
})
console.log('starting new task')
