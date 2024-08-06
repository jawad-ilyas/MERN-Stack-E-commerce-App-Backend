import express from "express"
import dotenv from "dotenv"

const app = express();
dotenv.config({
    path: './.env'
})
// * simple express api functions 
// app.get("/products", (req,res) => {
//     res.send("we are listening your products routes ")
// })
app.listen(process.env.PORT, () => {
    console.log(`server is listening on this port http://localhost:${process.env.PORT}`)
})