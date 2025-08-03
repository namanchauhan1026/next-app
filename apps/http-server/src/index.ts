import  express from "express";
import { client } from "@repo/db/client";
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/signup", async (req, res) => {
  try {
    const { password, username } = req.body;
    const user = await client.user.create({
      data: {
        username,
        password,
      },
    });
    res.json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/users", async (req, res) => {
   try {
    const users = await client.user.findMany();
    res.json(users);
   } catch (error) {
    res.status(500).json({ message: "Internal server error" });
   }
});


app.listen(8002, () => {
  console.log("Server is running on port production 8002");
});