const path = require('path');
const fs = require('fs');

fs.readdir(__dirname, function(err, files){
  if(err){
    throw new Error(err);
  }
  else{
    console.log(files);
  }
});