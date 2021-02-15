const fs=require('fs');

// fs.readFile('./blog/blog1.txt',(err, data)=> {
//   if(err)
//   {
//     console.log(err);
//   }   
//   console.log(data.toString());
// })

// console.log("hi");

// fs.writeFile('./blog/blog1.txt','hello, world',  ()=>{
//     console.log('file was written');
// });
// if(!fs.existsSync('./assets')){
    
// fs.mkdir('./assets',(err)=>{
//     if(err)
//     {
//         console.log(err);
//     }
//     console.log('folder created');
// })
// }
// else{
//     fs.rmdir('./assets',(err)=>{
//         console.log('folder deleted');
//     })
// }


// if(fs.existsSync('./assets')){
//     fs.unlink('./assets',(err)=>{
//       if(err)
//       {
//           console.log(err);
//       }  
//       console.log('file deleted');
//     })
// }