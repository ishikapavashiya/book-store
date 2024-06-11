require("dotenv").config();
let http = require("http");
let express = require("express");
let dbconnect = require("./DB/DB.connect");
const routes = require("./routes");
let cors = require("cors")
let app = express();

app.use(
    cors({
        origin: "*"
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
dbconnect();

app.use("/v1", routes)

http.createServer(app).listen(process.env.PORT, () => {
    console.log(`server strated ${process.env.PORT}`);
});