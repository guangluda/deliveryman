const express = require('express');
const app = express();
const path = require('path');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req,res)=>{
    res.render('Home')
})

app.get('/hello', (req,res)=>{
    res.send('Hello, deliveryman!')
})


app.listen(3000,()=>{
    console.log('Listening on port 3000!')
})