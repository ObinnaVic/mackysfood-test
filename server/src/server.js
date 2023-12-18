const http = require("http");
const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();

const server = http.createServer(app);


const PORT = process.env.PORT || 8000;


async function startServer()  {
    await mongoose.connect(process.env.MONGODB_URL);

    server.listen(PORT, () => {
        console.log(`listening on Port ${PORT}`);
    })
}

startServer();
