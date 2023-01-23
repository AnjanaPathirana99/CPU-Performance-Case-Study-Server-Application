import "./App.css";
import io from "socket.io-client";
import { useEffect } from "react";

const socket = io.connect("http://localhost:3001"); //POrt number of the server

function App() {
  const sendMessage = () => {
    socket.emit("send message", { message: "Hi" });
  };

  useEffect(() => {
    socket.on("receive message", (data) => {
      alert(data.message);
    });
  });
  return (
    <div className="App">
      <form>
        <label htmlFor="fname">Message</label>
        <input type="text" id="fname" name="fname"></input>
        <button onClick={sendMessage}>send</button>
      </form>
    </div>
  );
}

export default App;
