import app from "./server.js";

const PORT = process.env.PORT || 8000;

app.get("/", (_req, res) => {
  res.json({ server: true });
});

app.listen(PORT, () => console.log("Server running on PORT:", PORT));
