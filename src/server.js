const express = require('express');


const app = express();
const PORT = 5000;

app.get('/api/homescreen',(req,res)=>{
    return res.json(
        {
            title: 'Name',
        },
        {
            title: 'Email id',
        },
        {
            title: 'Mobile No. ',
        }
    )
});

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})