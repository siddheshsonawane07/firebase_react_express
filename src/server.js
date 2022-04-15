const express = require('express');
const cors = require('cors');
const middleware = require('./middleware')

const app = express();
const PORT = 5000;

app.use(cors());

//global middleware
app.use(middleware.decodeToken);

app.get('/api/homescreen',(req,res)=>{

    return res.json({
        homescreen: [
            {
                title: 'Name',
            },
            {
                title: 'Email id',
            },
            {
                title: 'Mobile No. ',
            }
    ]})
});

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})