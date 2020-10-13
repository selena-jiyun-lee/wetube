import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import globalRouter from "./routers/globalRouter";
import helmet from "helmet";
import morgan from "morgan";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import routes from "./routes";
import { localsMiddleWare } from "./middleWares";

const app = express();

app.use(helmet()); // for security
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(cookieParser()); // 쿠키를 전달받아서 사용할 수 있도록 만들어주는 미들웨어. 사용자 인증 같은 곳에서 쿠키를 검사할 때 사용.
app.use(bodyParser.json()); // 사용자가 웹사이트로 전달하는 정보들을 검사하는 미들웨어. request 정보에서 form이나 json형태로 된 바디를 검사.
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);
app.use(morgan("dev")); // record log

app.use(localsMiddleWare);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
// When some file imports this file, it return app object as default.
