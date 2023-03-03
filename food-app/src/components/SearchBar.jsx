import React from "react";
import food from "../assets/food.jpg";
function SearchBar() {
  return (
    <div>
      <div id="carouselExampleDark">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img className="w-100" src={food} alt="Not found" height={500} />
            <div
              className="carousel-caption d-flex justify-content-center align-item-center"
              style={{ marginBottom: "200px" }}
            >
              <div className="input-group d-flex justify-content-center align-item-center">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option defaultValue>Ahemdabad</option>
                  <option value="1">Mahesana</option>
                  <option value="2">Patan</option>
                  <option value="3">Kheralu</option>
                  <option value="3">Palanpur</option>
                  <option value="3">Visnagar</option>
                  <option value="3">Kalol</option>
                  <option value="3">Surat</option>
                  <option value="3">Rajkot</option>
                  <option value="3">Bhavnagar</option>
                </select>
                <input
                  className="form-control mx-10"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button type="button" className="btn btn-primary">
                  Search{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
