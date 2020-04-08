const express=require('express')
const app=express()
app.use(express.json())

const persons=[
    {
        name:"Arto Hellas",
        number:"040-123456",
        id:1
    },
    {
        name:"Ada :Lovelace",
        number:39-44-53253523,
        id:2,
    },
    {
        name:"Dan Aberav",
        number:021-6345673,
        id:3,
    },
    {
        name:"Mary Poppendick",
        number:91-628183440,
        id:4
    }
    
]
app.get('/',(req,res)=>{
    res.send("Go to Route /api/persons to access the data")
})
app.get('/api/persons',(req,res)=>{
    res.json(persons)
})
const PORT=3000
app.listen(PORT)
console.log(`Server running on port ${PORT}`)