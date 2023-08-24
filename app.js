const express = require("express")
const cors= require("cors")
const app = express()

const products= [{name:"radio", qty:4},
 {name:"phone", qty:4},
{name:"tv", qty:6},
 {name:"amp", qty:4},
{name:"fridge", qty:4},
{name:"blender", qty:4},
{name:"fan", qty:4},
{name:"ac", qty:4},
{name:"piano", qty:3},
{name:"chair", qty:4},
{name:"tablet", qty:4},
{name:"table", qty:4},
{name:"cooker", qty:4},
{name:"heater", qty:8},
{name:"door", qty:8},
{name:"kettle", qty:8},
{name:"fryer", qty:8},
{name:"cup", qty:8},
{name:"window", qty:8},
{name:"bed", qty:8}]

app.use(cors())
app.get("/products", (req, res)=>{
    const {page,limit}= req.query
    const firstp= (page-1)*limit
    const lastp= (page)*limit
    const arrayl= products.length
const newp = products.slice(firstp, lastp)
    res.status(200).json(newp)
})







const port = process.env.PORT || 4000

app.listen(port, ()=>console.log(`listening on port ${port}`))