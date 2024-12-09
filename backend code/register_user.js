 var express=require("express");
 var mysql1=require("mysql2")
 var app=express();
 var cors=require("cors")
 app.use(cors())
 app.use(express.json());
 var db=mysql1.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"api1"
 })
 db.connect((err)=>{
    if(err){
        console.log("Error connecting to the database:", err)
    }else{
        console.log("connected to mysql")
    }
 })

 app.get("/register",(req,res)=>{
    db.query("SELECT * FROM registration",(err,data)=>{
        if(err){
            console.log("Error fetching data:", err)
            res.status(500).send("Error fetching data");
        }
        else{
            res.json(data)
        }
    })
 })
 app.post("/register", (req, res) => {
    const {name,email,password,confirm_password} = req.body;
    const query = `INSERT INTO registration (name, email,password,confirm_password) VALUES (?,?,?,?)`;
    db.query(query, [name,email,password,confirm_password], (err, result) => {
        if (err) {
            console.error("Error inserting data:", err);
            res.status(500).send("Error inserting data");
        } else {
            res.status(200).send("Success");
        }
    });  

});
app.listen(3202, () => {
    console.log("Server running on http://localhost:3202");
});



