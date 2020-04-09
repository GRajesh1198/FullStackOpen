const express=require('express')
const app=express()
app.use(express.json())

<<<<<<< HEAD
<<<<<<< HEAD
let persons=[
=======
const persons=[
>>>>>>> 2b6df33... 3.1: Phonebook backend step1
=======
let persons=[
>>>>>>> a2cc306... 3.4: Phonebook backend step4
    {
        name:"Arto Hellas",
        number:"040-123456",
        id:1
    },
    {
<<<<<<< HEAD
<<<<<<< HEAD
        name:"Ada-Lovelace",
=======
        name:"Ada :Lovelace",
>>>>>>> 2b6df33... 3.1: Phonebook backend step1
=======
        name:"Ada-Lovelace",
>>>>>>> a2cc306... 3.4: Phonebook backend step4
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
<<<<<<< HEAD
=======
>>>>>>> 7c7fdb8... 3.3: Phonebook backend step3
app.get('/api/persons/:id',(req,res)=>{
    const id=Number(req.params.id)
    const person=persons.find(person=>person.id===id)
    if(person){
        res.json(person)
    }else{
        res.status(404).end()
    }
})
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a2cc306... 3.4: Phonebook backend step4
app.delete('/api/persons/:id',(req,res)=>{
    const id=Number(req.params.id)
    persons=persons.filter(p=>p.id!==id)
    res.status(204).end()
})
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b0ba936... 3.5: Phonebook backend step5
const generateId=(min,max)=>{
    return Math.floor(Math.random()*(max-min)) + min
}
app.post('/api/persons',(req,res)=>{
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    const nameBody=req.body.name
    const numberBody=req.body.number
    if(!nameBody && !numberBody){
        return res.status(400).json({
            error:'Required Property Is Missing'
>>>>>>> b0ba936... 3.5: Phonebook backend step5
=======
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
>>>>>>> d398cf1... 3.6:Phonebook backend step6
        })
    }
    const min=persons.length
    const max=10000
    const newPerson={
        id:generateId(min,max),
<<<<<<< HEAD
<<<<<<< HEAD
        name:body.name,
        number:body.number
=======
        name:nameBody,
        number:numberBody
>>>>>>> b0ba936... 3.5: Phonebook backend step5
=======
        name:body.name,
        number:body.number
>>>>>>> d398cf1... 3.6:Phonebook backend step6
    }
    persons=persons.concat(newPerson)
    res.json(newPerson)

})
<<<<<<< HEAD
=======
>>>>>>> 2b6df33... 3.1: Phonebook backend step1
=======
>>>>>>> 4dcf38b... 3.2:Phonebook backend step2
=======
>>>>>>> 7c7fdb8... 3.3: Phonebook backend step3
=======
>>>>>>> a2cc306... 3.4: Phonebook backend step4
=======
>>>>>>> b0ba936... 3.5: Phonebook backend step5
const PORT=3000
app.listen(PORT)
console.log(`Server running on port ${PORT}`)