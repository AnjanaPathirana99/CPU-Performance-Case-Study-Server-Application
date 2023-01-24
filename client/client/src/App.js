import "./App.css";
import { Route, Routes } from "react-router-dom";
import io from "socket.io-client";
import { useEffect } from "react";
import Login from "./components/login";
import Homepage from "./components/homepage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </div>
  );
};

export default App;

// const socket = io.connect("http://localhost:3001"); //POrt number of the server

// const sendMessage = () => {
//   socket.emit("send message", { message: "Hi" });
// };
// useEffect(() => {
//   socket.on("receive message", (data) => {
//     alert(data.message);
//   });
// });
// return (
//   <div className="App">
//     <form>
//       <label htmlFor="fname">Message</label>
//       <input type="text" id="fname" name="fname"></input>
//       <button onClick={sendMessage}>send</button>
//     </form>
//   </div>
// );
