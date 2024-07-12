import express from "express";
import pino from "pino-http";

const app = express();

app.use(pino());

app.use((req, res, next) => {
  console.log("method:", req.method);
  console.log("URL:", req.url);

  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
//цей міддлвар виконається, якщо в нас немає визначеного роуту (тобто якщо ця сторінка або цей запит не прописаний)
app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

app.use((error, req, res, next) => {
  res.status(500).send("Internal Server Error");
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
