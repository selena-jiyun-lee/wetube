import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Welcome to home");

const handleProfile = (req, res) => res.send("This is profile");

app.use(cookieParser()); // record user info
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet()); // for security
app.use(morgan("dev")); // record log

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
