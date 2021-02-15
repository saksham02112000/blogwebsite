const express = require('express');
const lodash = require('lodash');
const morgan=require('morgan');
const Blog= require('./blog');

const mongoose=require('mongoose');


// express app
const app = express();

// connect mongodb
const nodeURL='mongodb+srv://saksham:Saksham123@cluster0.m6t5i.mongodb.net/nodetuts?retryWrites=true&w=majority';
mongoose.connect(nodeURL, { useNewUrlParser: true, useUnifiedTopology:true })
.then ((result)=>app.listen(3000))
.catch((err)=> console.log(err));




// listen for requests


// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');
app.use(express.static('public'));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

app.use(express.urlencoded({extended: true}));
// app.use(morgan('dev'));



app.get('/', (req, res) => {
  res.redirect('/blogs')
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});



app.get('/blogs',(req,res)=>{
  Blog.find()
  .then((result)=>{
    res.render('home',{title:'All Blogs', blogs:result})
  }).catch((err)=>{
    console.log(err);
  })
})

app.post('/blogs',(req,res)=>{

  const blog=Blog(req.body);
  blog.save()
  .then((result)=>{
    res.redirect('/blogs')})
    .catch((err)=>{
      console.log(err);
  })
})
app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});


app.get('/blog/:id',(req,res)=>{
  const id=req.params.id;
  Blog.findById(id)
  .then(result =>{
    res.render('details', { title:'Blog details',blog:result});
  })
  .catch(err=>{
  console.log(err);
  })
})

app.delete('/blogs/:id',(req,res)=>{
const id=req.params.id;
Blog.findByIdAndDelete(id)
.then(result=>{
  res.json({redirect:'/blogs'})
  .catch(err=>{
    console.log(err);
  })
})
})



  

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});