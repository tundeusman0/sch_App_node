import express from "express";
import bodyParser from "body-parser";
// import ejs from "ejs";

const path = require('path')


const app = express();
const port = process.env.PORT || 3000

const viewPath = path.join(__dirname, '/../views')
const publicPath = path.join(__dirname, '/../public')

// set view engine
app.set('view engine', 'ejs')
app.set('views', viewPath)
// public files
app.use(express.static(publicPath))


// bodyParser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json for form behaviour
app.use(bodyParser.json({
    type: function (req) {
        return req.get('content-type').indexOf('multipart/form-data') !== 0;
    },
}));

app.get('/',(req,res)=>{
    res.render("index")
})


app.listen(port,()=>{
    console.log(`app started at port ${port}`)
})