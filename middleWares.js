import multer from "multer";
import routes from "./routes";

export const localsMiddleWare = (req, res, next) => {
	res.locals.siteName = "WeTube";
	res.locals.routes = routes;
	res.locals.user = {
		isAuthenticated: true,
		id: 1
	};
	next();
};

const multerVideo = multer({ dest: "uploads/videos/" });

export const uploadVideo = multerVideo.single("videoFile");
