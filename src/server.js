import express from "express";
import bodyParser from "body-parser";
import socketIO from "socket.io"


import path from "path";
import http from "http";


const app = express();
const port = process.env.PORT || 3000
const server = http.createServer(app);
// socket.io for omit or broadcast
const io = socketIO(server)

io.on("connection",(socket)=>{
    console.log("new user connected")
    socket.on("disconnect", () => {
        console.log("disconnected from server")
    })
})

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


server.listen(port,()=>{
    console.log(`app started at port ${port}`)
})