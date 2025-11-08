const fs=require('fs');
fs.writeFile('hello.txt', "this is sample text", (err)=>{
    if(err) console.log(err);
    else console.log("Success");
})
fs.readFile('hello.txt', 'utf-8', (err, data)=>{
    if(err) console.log(err);
    else console.log(data);
})