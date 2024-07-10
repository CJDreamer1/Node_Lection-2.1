import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(8080, () => {
  //тут ми вказуємо порт, на якому запуститься наш  веб сервер. Треба вказати цифри 1500+
  console.log("Server started on port 8080");
});
