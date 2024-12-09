const express=require("express")
const mysql=require("mysql2")
const app=express();
const cors=require("cors")
app.use(cors())
app.use(express.json())
var db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"api1"
})
db.connect((err)=>{
    if(err){
        console.log("connect to the server fail")
    }else{
        console.log("connected to mysql")
    }
})

app.get("/outdoor",(req,res)=>{
    db.query("SELECT * FROM OUTDOOR",(err,data)=>{
        if(err){
            console.log("fetching the data from sql is error")
            res.status(500).send("Error fetching data");
        }else{
            res.json(data)
        }
    })
})

app.post("/outdoor",(req, res) => {
    const {id,venue,address,type,baseprice} = req.body;
    const query = `INSERT INTO outdoor(id,venue,address,type,baseprice) VALUES (?,?,?,?,?)`;
    db.query(query,[id,venue,address,type,baseprice], (err, result) => {
        if (err) {
            console.error("Error inserting data:", err);
            res.status(500).send("Error inserting data");
        } else {
            res.status(200).send("Success");
            
            console.log(result)
        }
    });  
});
app.delete("/outdoor/:id", (req, res) => {
    const id = req.params.id; 
    const query = `DELETE FROM outdoor WHERE id = ?`;
    db.query(query, [id], (err, result) => {
        if (err) {
            console.error("Error deleting data:", err);
            res.status(500).send("Error deleting data");
        } else {
            console.log(result);
            res.status(200).send("Deleted successfully");
        }
    });
});

app.listen(3204,()=>{
    console.log("Server running on http://localhost:3204");
})