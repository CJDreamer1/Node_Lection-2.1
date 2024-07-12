import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/movies", (req, res) => {
  res.send([
    {
      id: 1,
      title: "title1",
    },
    {
      id: 2,
      title: "title2",
    },
  ]);
});

app.listen(8080, () => {
  console.log("server started on port 8080");
});
