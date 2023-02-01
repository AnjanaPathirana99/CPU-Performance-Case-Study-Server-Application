//Admin Server
const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const socketClient = require("socket.io-client");
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
    app.get("/api/cpuUsages", (req, res) => {
      const cpuUsage = highCpuUsage;
      res.send(cpuUsage);
    });
  });
});

server.listen(3001, () => {
  console.log("Server is running"); //PORT 3001
});
