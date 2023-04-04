import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { useState } from "react";
import HomePage from "./components/HomePage";
import Recommendations from "./components/Recommendations";
import { useRef } from "react";

function App() {
  const [songs, setSongs] = useState([]);
  const [keyword, setKeyword] = useState("");
  const keywordRef = useRef();
  const [loading, setLoading] = useState(false);
  const getSongs = async () => {
    setLoading(true);
    console.log("inside getSongs");
    let response = await fetch(
      `https://v1.nocodeapi.com/deeva125/spotify/pokxjuLDgSVFuaDK/search?q=${keywordRef.current.value}&type=track`
    );
    let data = await response.json();
    console.log("response");
    console.log(data);
    setSongs(data.tracks.items);
    setLoading(false);
  };

  return (
    <>
      <Navbar
        getSongs={getSongs}
        setKeyword={setKeyword}
        keywordRef={keywordRef}
      />
      <HomePage songs={songs} loading={loading} />
      <Recommendations
        getSongs={getSongs}
        setKeyword={setKeyword}
        keywordRef={keywordRef}
      />
    </>
  );
}

export default App;
