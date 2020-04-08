const express=require('express')
const app=express()
app.use(express.json())

<<<<<<< HEAD
let persons=[
=======
const persons=[
>>>>>>> 2b6df33... 3.1: Phonebook backend step1
    {
        name:"Arto Hellas",
        number:"040-123456",
        id:1
    },
    {
<<<<<<< HEAD
        name:"Ada-Lovelace",
=======
        name:"Ada :Lovelace",
>>>>>>> 2b6df33... 3.1: Phonebook backend step1
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4dcf38b... 3.2:Phonebook backend step2
app.get('/info',(req,res)=>{
    res.send(`
        <p>Phonebook has info for ${persons.length} ${persons.length===1 ? 'person' : 'people'}</p>
        <p>${new Date()}
    `)
})
<<<<<<< HEAD
app.get('/api/persons/:id',(req,res)=>{
    const id=Number(req.params.id)
    const person=persons.find(person=>person.id===id)
    if(person){
        res.json(person)
    }else{
        res.status(404).end()
    }
})
app.delete('/api/persons/:id',(req,res)=>{
    const id=Number(req.params.id)
    persons=persons.filter(p=>p.id!==id)
    res.status(204).end()
})
const generateId=(min,max)=>{
    return Math.floor(Math.random()*(max-min)) + min
}
app.post('/api/persons',(req,res)=>{
    const body=req.body
    if(!body.name){
        return res.status(400).json({
            error:'Required Name Property Is Missing'
        })
    }
    if(!body.number){
        return res.status(400).json({
            error:'Required Number Property Is Missing'
        })
    }
    if(persons.find(person=>person.name.toLowerCase()===body.name.toLowerCase())){
        return res.status(400).json({
            error:'name must be unique'
        })
    }
    const min=persons.length
    const max=10000
    const newPerson={
        id:generateId(min,max),
        name:body.name,
        number:body.number
    }
    persons=persons.concat(newPerson)
    res.json(newPerson)

})
=======
>>>>>>> 2b6df33... 3.1: Phonebook backend step1
=======
>>>>>>> 4dcf38b... 3.2:Phonebook backend step2
const PORT=3000
app.listen(PORT)
console.log(`Server running on port ${PORT}`)