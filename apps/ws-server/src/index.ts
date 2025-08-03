import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";

function getRandomName() {
  return "User_wp" + Math.floor(Math.random() * 10000);
}

function getRandomEmail() {
  return `user${Math.floor(Math.random() * 10000)}@test.com`;
}

const server = new WebSocketServer({ port: 8001 }, () => {
  console.log(" ws Server is running on port 8001");
});

server.on("connection", async(socket) => {
  console.log("New connection");
  const user = await client.user.create({
    data: {
      username: getRandomName(),
      password: '123456',
    },
  });
  console.log("user created", user);
  socket.send("Welcome to the server!");
});