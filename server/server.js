//Admin Server
const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const socketClient = require("socket.io-client"); //Day end commit
const cors = require("cors");

app.use(cors());

const socketClient = socketClient.connect("http://localhost:3002"); //Port number of the admin UI //Day end commit

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", //port number of the client
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("çpu_usage", (highCpuUsage, pcName) => {
    console.log(highCpuUsage, pcName);
    socketClient.emit("receive message", highCpuUsage, pcName);
  });
});

server.listen(3001, () => {
  console.log("Server is running"); //PORT 3001
});
