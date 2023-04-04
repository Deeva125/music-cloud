import React from "react";

function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Music Cloud
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div
              className="d-flex w-75 m-auto"
              role="search"
              onSubmit={props.getSongs}
            >
              <input
                id="search"
                ref={props.keywordRef}
                value={props.songs}
                onChange={(event) => {
                  props.setKeyword(event.target.value);
                }}
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                type="submit"
                className="btn btn-outline-secondary"
                onClick={() => {
                  props.getSongs();
                  console.log("function");
                }}
              >
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
