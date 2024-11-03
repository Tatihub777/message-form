
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(express.static(__dirname));
const mongoose = require('mongoose');
app.use(bodyParser.urlencoded({extended:true}));

mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://tatius79mongo:Ksi888SulfuR@cluster0.6l2in.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0');
const messageSchema = {
    name: String,
    email: String,
    message: String
}
const Message = mongoose.model('MyMessages', messageSchema);
app.get('/', (req,res)=> {
    res.sendFile(__dirname + "/index.html")
})
app.post('/', (req, res) => {
    let newMessage = new Message({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    })
    newMessage.save()
    res.sendFile(__dirname + "/answer.html")
})
app.listen(8000, ()=>{
    console.log('Server listening on port 8000')
})