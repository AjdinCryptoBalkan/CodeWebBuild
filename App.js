const express = require('express');

const app = express();
const port = process.env.PORT || 5000

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.sendfile('mindex.html')
})
app.get('/concant',(req,res)=>{
    res.sendfile('index.html')
})
app.listen(port,()=>{
    console.log('Localhost:5000');
})