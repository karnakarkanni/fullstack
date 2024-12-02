var express=require("express");
var mysql=require("mysql2");
var app=express();
var cors=require("cors");
app.use(cors())
app.use(express.json());
var db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"api1"
})
db.connect((err)=>{
    if(err){
        console.log("connect to the server fail")
    }
    else{
        console.log("connected to mysql")
    }
})
app.get("/indoor",(req,res)=>{
    db.query("SELECT * FROM indoor",(err,data)=>{
        if(err){
            console.log("fetching the data from sql is error")
            res.status(500).send("Error fetching data");
        }else{
            res.json(data)
        }
    })
})
app.post("/indoor",(req, res) => {
    const {id,venue,address,type,baseprice} = req.body;
    const query = `INSERT INTO indoor(id,venue,address,type,baseprice) VALUES (?,?,?,?,?)`;
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
app.delete("/indoor/:id", (req, res) => {
    const id = req.params.id; 
    const query = `DELETE FROM indoor WHERE id = ?`;
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

// app.put("/indoor/:id", (req, res) => {
//     const id = req.params.id;
//     const { venue, address, type, baseprice } = req.body;
//     if (!venue || !address || !type || !baseprice) {
//         return res.status(400).send("All fields are required");
//     }

//     const query = `UPDATE indoor SET venue = ?, address = ?, type = ?, baseprice = ? WHERE id = ?`;

//     db.query(query, [venue, address, type, baseprice,id], (err, result) => {
//         if (err) {
//             console.error("Error updating data:", err);
//             res.status(500).send("Error updating data");
//         } else {
//             console.log(result);
//             res.status(200).send("Updated successfully");
//         }
//     });
// });




app.listen(3203,()=>{
    console.log("Server running on http://localhost:3203");
})









