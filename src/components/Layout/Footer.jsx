import React from "react";
import { Link } from "react-router-dom";

const Footer = ({links}) => {
  return (
    <footer className="py-4 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <h3>About</h3>
            <p>
              Dlux Рау offers аll your employees the ability <br /> to gain
              instant access to their funds with Visa, <br /> and in the near
              future MasterCard as well.
            </p>
            <p>
              The payer is charged only the bank's fees, <br /> so you can use
              DluxPay absolutely free. <br /> Your payees will enjoy the lowest
              industry rates <br />
              when converting withdrawing and transferring funds.
            </p>
          </div>
          <div className="col-lg-4">
            <h3>
              <span>Contact </span>
              <span className="d-inline-block">Info</span>
            </h3>
            <p>
              <a href="mailto:support@dluxpay.com">
                support@dluxpay.com
              </a>
            </p>
          </div>
          <div className="col-lg-3 d-flex justify-content-between align-content-center flex-column">
            <div>
              <h3>Links</h3>
              <ul className="list-unstyled">
                {links.map(
                  (el) => (
                    <li key={el}>
                      <Link to={el.link}>{el.name}</Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>copyright @ 2021-2022 by dluxpay</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
