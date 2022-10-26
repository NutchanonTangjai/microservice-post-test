const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
 
 
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
// API Config
const { posts , addPosts , findPost , updateData , deletePost } = require('./api/posts-api.js');
app.get('/posts' , posts);
app.post('/create' , addPosts);
app.get('/find/:name' , findPost)
app.put('/update/:id' , updateData)
app.delete('/delete/:id' , deletePost)
 
const PORT = process.env.PORT || 4060;
 
app.get("/" , (req,res) => {
    res.send("Server is running");
})
 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
