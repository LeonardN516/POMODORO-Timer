const express = require("express"); 
const app = express();
const  cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");
//Routes 
const postRouter = require("./Routes/Posts")
app.use("/posts", postRouter)






db.sequelize.sync().then(()=>{


    app.listen(3001, () => {
        console.log("server working on port 3001");
    });
});