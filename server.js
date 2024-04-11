const express = require("express");
const cors = require('cors');
const mysql = require('mysql');


const db=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"root",
  database:"test"
})
// to send from html body
const app = express();
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.json("Hello World")
})

// API ROUTES
app.get("/notes",(req,res)=>{
  const q="SELECT * FROM notes"
  db.query(q,(err,data)=>{
      if(err) return res.json(err)
      return res.json(data)
  })
})

app.listen(8800,()=>{
  console.log("Connect to backend.")
})
 /*  
  app.get('/api/blog-notas', (req, res) => {
    BlogNotas.find()
      .then((blogNotas) => {
        res.status(200).json(blogNotas);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Server error', details: error });
      });
  });
  
  app.get('/api/blog-notas/:id', (req, res) => {
    BlogNotas.findById(req.params.id)
      .then((blogNotas) => {
        if (!blogNotas) {
          return res.status(404).json({ error: 'Vinyl record not found' });
        }
        res.status(200).json(blogNotas);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Server error', details: error });
      });
  });
  
  app.put('/api/blog-notas/:id', (req, res) => {
    BlogNotas.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((blogNotas) => {
        if (!blogNotas) {
          return res.status(404).json({ error: 'Blog de Notas not found' });
        }
        res.status(200).json({ message: 'Blog de Notas updated successfully' });
      })
      .catch((error) => {
        res.status(500).json({ error: 'Server error', details: error });
      });
  });
  
  app.delete('/api/blog-notas/:id', (req, res) => {
    BlogNotas.findByIdAndRemove(req.params.id)
      .then((blogNotas) => {
        if (!blogNotas) {
          return res.status(404).json({ error: 'Blog de Notas not found' });
        }
        res.status(204).json({ message: 'Blog de Notas deleted successfully' });
      })
      .catch((error) => {
        res.status(500).json({ error: 'Server error', details: error });
      });
  });
  
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); */