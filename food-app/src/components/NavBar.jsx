import React from "react";
import { NavLink } from "react-router-dom";
import NavBarData from "../data/NavbarData";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src="../android-icon-72x72.png" alt="not found" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 justify-content-end">
              {NavBarData.map((item, index) => {
                return (
                  <li key={index} className={item.className}>
                    <NavLink to={item.path} className={item.className2}>
                      {item.title}
                    </NavLink>
                  </li>
                );
              })}
              <li className="nav-item justify-content-end">
                <NavLink className="nav-link justify-content-end" to="/">
                  <button className="btn btn-danger rounded-pill justify-end" type="submit">
                    Get App
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
