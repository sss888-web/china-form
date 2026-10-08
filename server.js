import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import signupRouter from "./routes/signup.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* ✅ СНАЧАЛА body parser */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/* ✅ ПОТОМ роуты */
app.use("/api", signupRouter);

/* ✅ И ТОЛЬКО ПОТОМ статика */
app.use(express.static(path.join(__dirname, "docs")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "docs", "index.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, "0.0.0.0", () => {
  console.log("🚀 Server started on port", PORT);
});

