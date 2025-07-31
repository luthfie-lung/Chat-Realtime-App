const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg); // Broadcast
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

http.listen(3000, () => {
  console.log("Server jalan di http://localhost:3000");
});
