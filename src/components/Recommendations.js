import React, { useState } from "react";

function Recommendations() {
  const [songs, setSongs] = useState([]);
  async function getRecommendations() {
    let response = await fetch(
      `https://v1.nocodeapi.com/deeva125/spotify/pokxjuLDgSVFuaDK/browse/new`
    );
    let data = await response.json();
    console.log(data);
    setSongs(data.albums.items);
  }

  return (
    <>
      <h1>Reccomendaation componenet</h1>
      <button onClick={getRecommendations}>Testing Recommendations</button>
      {songs.map((element, index) => {
        return (
          <>
            <div className="card" style={{ width: "18rem" }}>
              <img src="" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">{element.name}</h5>
                <p className="card-text">{element.artists[0].name}</p>
                <p className="card-text">{element.release_date}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Recommendations;
