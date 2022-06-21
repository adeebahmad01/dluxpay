import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { Collapse } from "bootstrap";
const classes = "nav-link d-inline-block p-1";
const Header = ({ links }) => {
  const [scroll, setScroll] = useState(false);
  const collapseMenu = useRef(null);
  useEffect(()=> {
    const handleScroll = () => {
      setScroll(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  return (
    <nav style={{zIndex: 10}} className={`navbar py-3 navbar-expand-lg position-sticky top-0 bg-white ${scroll ? "shadow" : ""}`}>
      <div className="container">
        <a className="navbar-brand me-5 d-inline-block" href="#">
          <Logo width={150} />
        </a>
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div ref={collapseMenu} className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav gap-4 me-auto mb-2 mb-lg-0">
            {links.map((el) => (
              <li className="nav-item">
                <NavLink onClick={(e)=> {
                  const bsCollapse = new Collapse(collapseMenu.current);
                  bsCollapse.hide();
                }} className={({isActive})=> isActive ? `${classes} active` : classes} to={el.link}>
                  {el.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <button
            className="btn rounded-0 text-uppercase px-5 py-2 bg-primary text-white btn-primary"
          >
            sign in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
