const express = require('express')
const app = express()
const port = process.env.PORT || 5000 ;
const path = require('path')

app.set('view engine' , 'ejs')
app.use(express.static(path.join(__dirname , 'views')))

app.get('/',(req,res) =>{
    res.render('index.ejs')
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`))