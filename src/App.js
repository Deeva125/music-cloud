import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { useState } from "react";
import HomePage from "./components/HomePage";
import Recommendations from "./components/Recommendations";

function App() {
  const [songs, setSongs] = useState([]);
  const [keyword, setKeyword] = useState("");
  const getSongs = async () => {
    console.log("inside getSongs");
    let response = await fetch(
      `https://v1.nocodeapi.com/deeva125/spotify/pokxjuLDgSVFuaDK/search?q=${keyword}&type=track`
    );
    let data = await response.json();
    console.log("response");
    console.log(data);
    setSongs(data.tracks.items);
  };

  return (
    <>
      <Navbar getSongs={getSongs} setKeyword={setKeyword} />
      <HomePage songs={songs} />
      <Recommendations />
    </>
  );
}

export default App;
