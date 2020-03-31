const express = require('express')
const request = require('request-promise-native')
const app = express()

//config my template engine
app.set('view engine','ejs');
//my template engine is on views folder
app.set('views', './src/views');
app.use(express.static('./src/public'));


app.get('/productos',async function(req, res){
    const result= await request.get("http://localhost:3000/api/v1/product")
    const products=JSON.parse(result).data
    res.render('products',{products}) 
})

  
app.listen(3001,function(){

    console.log( "Server is runing in port 3001")
})