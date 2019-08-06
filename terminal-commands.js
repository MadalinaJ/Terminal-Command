const fs=require('fs');
module.exports.ls=()=>{
    fs.readdir('./', (err,files)=>{
        const filesToString=files.reduce((acc,file)=>{
            return `${acc} ${file}`;
        }, '');
        console.log(filesToString);
    })
}

module.exports.touch=()=>{
    fs.writeFile('term.txt', 'terminal commands', 'utf8', (err) => {
        if (err) throw err;
      
        console.log('new txt file created');
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