import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import { MongoClient } from "mongodb";
import usersRouter from './routes/users.router.js';
import emailRouter from './routes/email.router.js'
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

// const MONGO_URL = 'mongodb://127.0.0.1';
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;

const client = new MongoClient(MONGO_URL); //dial a number.
await client.connect(); //call  //previous handshake is happening
console.log("mongodb is connected ");

app.use('/users',usersRouter) ;

app.use('/email',emailRouter) ;

app.listen(PORT, () => console.log(`The server started in: 4000 ✨✨`));

export { client }