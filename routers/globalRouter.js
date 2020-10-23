import express from "express";
import passport from "passport";
import {
	getJoin,
	postJoin,
	getLogin,
	postLogin,
	logout,
	githubLogin,
	postGithubLogin
} from "../controllers/userControllers";
import { home, search } from "../controllers/videoControllers";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin, postLogin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.github, githubLogin);
globalRouter.get(routes.githubCallback, 
	passport.authenticate('github', { failureRedirect: '/login' }),
	postGithubLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

export default globalRouter;
