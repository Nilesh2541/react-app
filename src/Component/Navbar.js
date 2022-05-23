import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CgShoppingCart } from "react-icons/cg";

function Navbar() {
  const product = useSelector((state) => state.cart);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/">
              Home
            </Link>
            <Link className="nav-item nav-link" to="/cart">
              Cart
            </Link>
            {/* <a className="nav-item nav-link" href="#">
              Cart
            </a> */}
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <CgShoppingCart
            size={46}
            className="mb-3 me-5"
            style={{ display: "block" }}
          />
          <div style={{ position: "absolute", left: 21, top: 10, right: 0 }}>
            {product.length}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
