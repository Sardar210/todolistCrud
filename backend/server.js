const express = require("express")
const cors = require('cors')
const mongoose = require("mongoose")
const Worklist = require("./Models/workListModel")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors());

// Routes
app.get('/', (req, res) => {
    res.send('I am work list project APIs')
})


app.get('/workList', async(req, res) => {
    try { 
        const workList = await Worklist.find({});
        res.status(200).json(workList);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

app.get('/workList/:id', async(req, res) => {
    try { 
        const {id} = req.params;
        const workList = await Worklist.findById(id);
        res.status(200).json(workList);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/workList/:id', async(req, res) => {
    try { 
        const {id} = req.params;
        const workList = await Worklist.getById(id);
        res.status(200).json(workList);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.post('/workList', async(req, res) => {
       try {
        const workList = await Worklist.create(req.body)
        res.status(200).json(workList);
       } catch (error) {
        console.log(error.message);
         res.status(500).json({message: error.message})
       }
       })

       // Product update
app.put('/workList/:id', async(req,res) => {
        try {
            const {id} = req.params;
            const workList = await Worklist.findByIdAndUpdate(id, req.body);
        // We cannot find product in Database
        if(!workList) {
            return res.status(404).json({message: `cannot find any work List with ID ${id}`})
        }
        
        const updateWorkList = await Worklist.findById(id);
        res.status(200).json(updateWorkList);
        } 
        catch (error) {
            res.status(500).json({message: error.message})
        }
} )  
    // Delete Product
app.delete('/workList/:id', async(req, res) => {
    try {
        
        const {id} = req.params;
        const workList = await Worklist.findById(id);
        if(!workList){
            return res.status(404).json({message:`Cannot find work List by Id ${id}`})
        }
        await Worklist.findByIdAndDelete(id);
        res.status(200).json(workList);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.listen(1001, () => {
    console.log("Server is running on port 1001");
})

mongoose.set('strictQuery', false)
mongoose.connect('Enter your Mongoose address here')
.then(() => {
    console.log('Connected to MongoDB')
}).catch(()=> {
    console.log('Error to connecr Mongoos')
})