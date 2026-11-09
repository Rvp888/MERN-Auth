// import express from "express";
// import cors from "cors";
// import "dotenv/config";
// import cookieParser from "cookie-parser";
// import connectDB from "./config/mongodb.js";
// import authRouter from "./routes/authRoutes.js";
// import userRouter from "./routes/userRoutes.js";

// const app = express();
// const port = process.env.port || 4000;
// connectDB();

// const allowedOrigins = ["http://localhost:5173"];

// app.use(express.json());
// app.use(cookieParser());
// app.use(cors({ origin: allowedOrigins, credentials: true }));

// // API Endpoints
// app.get("/", (req, res) => res.send("API Working!"));
// app.use("/api/auth", authRouter);
// app.use("/api/user", userRouter);

// app.listen(port, () => console.log(`Server started on PORT: ${port}`));

import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";

import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";

const app = express();

const PORT = process.env.PORT || 4000;

const allowedOrigins = ["http://localhost:5173", process.env.CLIENT_URL].filter(
  Boolean,
);

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
);

// API Endpoints
app.get("/", (req, res) => {
  res.send("API Working!");
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

// Connect database and start server
const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server started on PORT: ${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error);
    process.exit(1);
  }
};

startServer();
