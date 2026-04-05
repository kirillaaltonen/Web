import express from "express";

const app = express();
const port = 3000;

app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  res.send("Welcome to my REST API!");
});

app.get("/api/v1/cats", (req, res) => {
  const cat = {
    cat_id: 1,
    name: "Whiskers",
    birthdate: "2020-05-10",
    weight: 4.2,
    owner: "Alokas",
    image: "https://loremflickr.com/320/240/cat",
  };

  res.json(cat);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
