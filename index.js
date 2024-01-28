import express from "express"; 
import cors from "cors"; 
import helmet from "helmet"; 
import path from "path"; 

const app = express(); 

app.use(cors());
app.use(helmet()); 
app.use(express.json()); 

function sendHomePage(req, res) {
    res.sendFile(path.resolve() + "/index.html");

}

function sendPage2(req, res) {
    res.sendFile(path.resolve() + "/index2.html")
}

app.route("/").get(sendHomePage); 

app.route("/page2").get(sendPage2);

const HOSTNAME = "localhost"; 
// on windows:     const HOSTNAME = "0.0.0.0"; 

const PORT = 3002; 



function running() { 
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`); 
}


app.listen(PORT, HOSTNAME, running);  