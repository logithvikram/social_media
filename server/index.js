import express from "express";
import mongoose from "mongoose";

import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import multer from "multer";
import { fileURLToPath } from "url";
import { register } from "./controller/auth.js";
import authRouter from "./routes/auth.js";
import  verifyToken  from "./middleware/auth.js";
import userRoutes from "./routes/users.js"
// import postRoutes from "./routes/posts.js"
// import {createPost } from "./controller/posts.js"


// Middleware
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(express.json({ limit: "30mb" ,extended:true}));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, 'public/assets')));

//storage
const storage = multer.diskStorage(
    {
        destination:function(req,file,cb){
            cb(null,"public/assets");
        },
        filename: function(req,file,cb){
            cb(null,file.originalname);
        }
    });

const upload = multer({storage});
// Routes with files
app.post("/auth/register", upload.single("picture"),register);
// app.post("/posts",verifyToken,upload.single("picture"),createPost)


// Routes
app.use("/auth", authRouter);
app.use("/users",userRoutes);
// app.use("/posts",postRoutes);

// Mongoose
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Server running on Port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });
