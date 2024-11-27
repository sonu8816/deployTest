const express= require('express');
const app = express();


app.get('/sonu',(req,res)=>{
    res.json({
        name:'sonu',
        age:20
    })
})

app.listen(3000,()=>{
    console.log('server is running on port 3000');
})