const mongoose=require('mongoose')

if(process.argv.length < 3){
    console.log("Password must be given as a argument")
    process.exec(1)
}

const password=process.argv[2]

const url=`mongodb+srv://fullstack:${password}@cluster0-rbfh9.mongodb.net/Phonebook?retryWrites=true&w=majority`
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})

const personSchema=new mongoose.Schema({
    name:String,
    number:String
})

const Person=mongoose.model('Person',personSchema)
const person=new Person({
    name:process.argv[3],
    number:process.argv[4]
})
if(!process.argv[3] || !process.argv[4]){
    Person.find({}).then(result=>{
        console.log("Phonebook :")
        result.forEach(person=>{
            console.log(`${person.name} ${person.number}`)
        })
        mongoose.connection.close()
    })
    
}else {
    person.save().then(result=>{
        console.log(`added ${result.name} number ${result.number}`)
        mongoose.connection.close()
    })
    
}