import React from "react";
import { useState } from "react";

function HomePage(props) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <img
              className={`${props.loading ? "w-100" : "d-none"}`}
              src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif"
              alt=""
            />
          </div>
        </div>
        <div className="row">
          {props.songs.map((element, index) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6 py-3">
                <div className="card m-auto">
                  <img
                    src={element.album.images[0].url}
                    className="card-img-top"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title">{element.name}</h5>
                    <p className="card-text">{element.artists[0].name}</p>
                    <p className="card-text">{element.album.release_date}</p>
                    <audio
                      className="w-100"
                      controls
                      src={element.preview_url}
                    ></audio>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default HomePage;
