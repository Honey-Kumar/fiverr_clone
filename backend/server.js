const express = require("express");
const cors = require("cors");
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const PORT = process.env.PORT
app.get('/', (req, res) => {
    res.send('<h1>Fiverr.com</h1>')
})
app.use(express.json())
app.use(cors({
    origin: [process.env.URL],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true
}));
app.listen(PORT, console.log(`server is running on PORT : ${PORT}`));