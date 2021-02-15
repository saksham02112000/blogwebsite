const fs = require('fs');
const http=require('http');
const _=require('lodash');

const server=http.createServer((req,res)=>{
    
    //lodash
    const num=_.random(0,20);
    console.log(num);

    res.setHeader('Content-Type','text/html');
let path='./';
switch(req.url)
{
    case'/': path+='home.html';res.statusCode=200; break;
    
    case '/about': path+='about.html'; res.statusCode=200; break;
    
    case '/about-in': res.statusCode=301; 
        res.setHeader('Location','/about'); 
        res.end();
    default: path+='404.html';
    res.statusCode=404;
}

    fs.readFile(path ,(err,data)=>{
        if(err)
        {
            console.log(err);
            res.end();
        }
        else{
            
            res.end(data);
        }    
    })
});

server.listen(3000, 'localhost',()=>{
    console.log('requst through port 3000');
});