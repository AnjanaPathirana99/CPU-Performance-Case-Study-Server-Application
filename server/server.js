const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

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
    socket.broadcast.emit("receive message", highCpuUsage, pcName);
  });
});

server.listen(3001, () => {
  console.log("Server is running");
});
