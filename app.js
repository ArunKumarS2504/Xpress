var express =require('express');
const app = express();

const pug = require('pug')
app.set('view engine' ,'pug')

app.get('/',(req,res)=>{
    res.render('index',
    {title:'Pug with X', message :'hello mapla'})
})

app.listen(8888);