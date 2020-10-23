import dotenv from "dotenv";
dotenv.config();
import passport from "passport";
import gitHubStrategy from "passport-github";
import { githubLoginCallback } from "./controllers/userControllers";
import User from "./models/User";
import routes from "./routes";

passport.use(User.createStrategy());

passport.use(new gitHubStrategy({
    clientID: process.env.GH_ID,
    clientSecret: process.env.GH_SECRET,
    callbackURL: `http://localhost:5000${routes.githubCallback}`
    },
    githubLoginCallback
));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());