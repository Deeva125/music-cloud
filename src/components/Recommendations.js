import React, { useState } from "react";
import { useEffect } from "react";

function Recommendations(props) {
  const [songs, setSongs] = useState([]);
  async function getRecommendations() {
    let response = await fetch(
      `https://v1.nocodeapi.com/deeva125/spotify/pokxjuLDgSVFuaDK/browse/new`
    );
    let data = await response.json();
    console.log(data);
    setSongs(data.albums.items);
  }
  useEffect(() => {
    getRecommendations();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {songs.map((element, index) => {
            return (
              <>
                <div className="col-lg-3 col-md-4 col-sm-6 py-3">
                  <div className="card">
                    <img
                      src={element.images[0].url}
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="card-title">{element.name}</h5>
                      <p className="card-text">{element.artists[0].name}</p>
                      <p className="card-text">{element.release_date}</p>
                      <button
                        className="btn btn-primary w-100"
                        onClick={() => {
                          window.scrollTo(0, 0);
                          props.keywordRef.current.value = element.name;
                          props.setKeyword(element.name);
                          props.getSongs();
                        }}
                      >
                        <i className="bi bi-play-fill"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Recommendations;
