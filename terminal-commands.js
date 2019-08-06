const fs=require('fs');
module.exports.ls=()=>{
    fs.readdir('./', (err,files)=>{
        const filesToString=files.reduce((acc,file)=>{
            return `${acc} ${file}`;
        }, '');
        console.log(filesToString);
    })
}

module.exports.touch=(file)=>{
    fs.writeFile(file, 'terminal commands', 'utf8', (err) => {
        if (err) throw err;
      
        console.log(file + ' is created');
      });
}


module.exports.mkdir = () => {
    fs.mkdir('newFolder',(err) => {
        if (err) {
           return `Error: ${err}`;
       }
        console.log('This is a new folder');
    })
  };
  
// OR
//module.exports.mkdir = (dir) => {
//    fs.mkdir('./'+ dir,function(err){
//        if (err) {
//            return console.error(err);
//        }
//       console.log('This is a new ' + dir);
//    })
//  };