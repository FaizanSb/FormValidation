// This is server.js folder
import express from "express";

const app = express();

// Middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("Backend is running 🚀");
});

// Test API route
app.get("/api/test", (req, res) => {
    res.json({
        message: "API is working ✅"
    });
});

// POST test
app.post("/api/test", (req, res) => {
    console.log(req.body);

    res.json({
        message: "Data received ✅",
        data: req.body
    });
});

// Server start
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});