import multer from 'multer';
import {Router} from 'express';
import {verifyToken} from '../middlewares/AuthMiddleware.js';
import {getUserInfo, login, setUserImage, setUserInfo, signup} from '../controllers/AuthControllers.js';
const authRoutes = Router();
const upload = multer({dest: "uploads/profiles/"});
authRoutes.post('/signup', signup);
authRoutes.post('/login', login);
authRoutes.post("/get-user-info", verifyToken, getUserInfo);
authRoutes.post("/set-user-info", verifyToken, setUserInfo);
authRoutes.post("/set-user-image", verifyToken, upload.single("image"), setUserImage);
export default authRoutes;