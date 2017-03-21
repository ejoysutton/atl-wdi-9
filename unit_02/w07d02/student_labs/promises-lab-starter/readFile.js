'use strict';

const fs = require('fs');

let inFile = process.argv[2];

let getTextDataPromise = new Promise(function(resolve, reject){

  fs.readFile(inFile, { encoding: 'utf8' }, function(error, content){    })
    resolve(content);
    reject(error);
  })


getTextDataPromise.then(function(result){
  return result;
})
  .then(function(result){
    var lines = result.split('\n');
    return lines;
  })
  .then(function(lines){
    lines.pop();
    return array;
  })
  .then(function(lines){
    lines.forEach(function(line) {
    console.log('Hello, ' + line + '!');
  });  
  })
  .catch(function(error){
    console.error(error);
  });

// fs.readFile(inFile, { encoding: 'utf8' }, function(error, content) {
//   if (error) {
//     console.error(error);
//   }

//   // 'Billy\nJames\nNick\n' --> ['Billy', 'James', 'Nick']

//   let lines = content.split('\n');

//   // clean up the array by removing the empty line
//   lines.pop();

//   lines.forEach(function(line) {
//     console.log('Hello, ' + line + '!');
//   });
// });
