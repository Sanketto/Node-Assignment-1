const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const port = 8080
app.use(express.urlencoded({ extended: true }));
const studentArray = require('./InitialData');
const { json } = require('express');

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
module.exports = app;
// your code goes here
function getId(){
    let prevId = 0;
    return function id(){
        if(prevId == 0){
            prevId = studentArray[studentArray.length-1].id + 1;
             return prevId;
        }
        else{
        return ++prevId;
        }
    }
    
}
const getNewId = getId()
app.get('/api/student', (req, res)=>{
    res.send(studentArray.map(item=> item))
})

app.get('/api/student/:id', (req, res)=>{
    const {id} = req.params;
    let isFound = false
    for (let item of studentArray) {
        if(item.id == id){
            isFound = true;
            res.send(200)
             res.send(item)
             break;
        }
        isFound = false
    }
    if(!isFound){
        res.status(404)
        res.send({"error": `student of id ${id} not found`})
    }
})

app.post('/api/student', (req, res)=>{
    const {name, currClass, division} = req.body;
    if((/[A-Za-z]+/.test(name) && name.length>0) && parseInt(currClass)>0 && /[A-Za-z]$/.test(division)){
        let data = {
            id: getNewId(),
            name: name,
            currClass: parseInt(currClass),
            division: division 
        }
        studentArray.push(data)
        res.status(200)
        res.send({"id": data.id})
    }
    else{
        res.status(400)
        res.send()
    }
})

app.delete('/api/student/:id', (req,res)=>{
    const {id} = req.params;
    let isDeleted = false;
    let student;
    for(let i=0; i<studentArray.length; i++)
    {
        if(studentArray[i].id == id){
            student = studentArray.splice(i,1)
            isDeleted = true;
            break
        }
    }
    if(isDeleted){
        res.status(200)
        res.send({
            status: 'Success',
            result: student
        })
    }
    else{
        res.status(404)
        res.send({
            message: `Student of ${id} is not found`
        })
    }
    
})
   
app.listen(port, () => console.log(`App listening on port ${port}!`))

