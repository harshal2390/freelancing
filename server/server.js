const express = require("express");
const app = express();
const port = 5000;

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Backend!" });
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
