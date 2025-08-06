import app from "./server.js";

app.get("/", (_req, res) => {
  res.json({ server: true });
});

app.listen(5000, () => console.log("Server running on PORT: 5000"));
