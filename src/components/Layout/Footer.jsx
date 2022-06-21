import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ links }) => {
  return (
    <footer className="py-4 bg-light">
      <div className="container">
        <div className="row text-md-start text-center">
          <div className="col-lg-5 order-md-1 order-3">
            <h3>About</h3>
            <p>
              Dlux Рау offers аll your employees the ability to gain
              instant access to their funds with Visa, and in the near
              future MasterCard as well.
            </p>
            <p>
              As a payer, you are only charged your bank's sending fees, so you
              can use DluxPay absolutely free. Your payees will enjoy the
              lowest industry rates
              when converting withdrawing and transferring funds.
            </p>
          </div>
          <div className="col-lg-4 order-2 py-md-0 py-4">
            <h3>
              <span>Contact </span>
              <span className="d-inline-block">Info</span>
            </h3>
            <p>
              <a href="mailto:support@dluxpay.com">support@dluxpay.com</a>
            </p>
          </div>
          <div className="col-lg-3 py-md-0 py-4 order-md-3 order-1 d-flex justify-content-between align-content-center flex-column">
            <div className="d-md-block d-none">
              <h3>Links</h3>
              <ul className="list-unstyled">
                {links.map((el) => (
                  <li key={el.name}>
                    <Link to={el.link}>{el.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>copyright © 2022 DluxPay. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
