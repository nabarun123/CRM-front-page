import React from "react";
// import { Nav, NavItem, NavLink, Button } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
function Header() {
  return (
    <nav
      class="navbar navbar-expand-lg"
      style={{
        height: "12vh",
        backgroundColor: "#000030",
      }}
    >
      <div class="container-fluid">
        <a
          class="navbar-brand"
          href="#"
          style={{
            fontWeight: "bolder",
            color: "white",
            fontSize: "55px",
            marginRight: "62vw",
          }}
        >
          CRM
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              class="btn btn-light"
              type="submit"
              style={{
                marginRight: "5px",
                marginLeft: "15px",
              }}
            >
              SIGNUP
            </button>

            <button
              class="btn btn-warning"
              type="submit"
              style={{
                marginLeft: "5px",
              }}
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
