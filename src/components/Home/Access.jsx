import React from "react";
import card from "../../assets/images/card.png";

const Access = () => {
  return (
    <section
      className="py-5"
      style={{
        backgroundColor: "#f5f5f5",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 text-center text-md-start">
            <h1 className="heading-main">
              INSTANT ACCESS <br />
              TO YOUR FUNDS
            </h1>
            <h3 className="my-3 text-uppercase mb-3">
              pay employees quickly and easily make instant payments
            </h3>
            <h3 className="my-3">
              We provide all of the tools and resources to help you get started
              quickly and without any hidden fees and unexpected transaction
              costs. It's that simple. There's really no catch.
            </h3>
            <div className="d-flex flex-column justify-content-md-start align-items-md-start justify-content-center align-items-center flex-md-row gap-5">
              <a
                href="mailto:signup@dluxpay.com"
                className="btn button rounded-0 text-uppercase px-2 py-md-2 py-3 bg-primary text-white btn-primary"
                type="submit"
              >
                sign up
              </a>
              <a
                href="mailto:support@dluxpay.com"
                className="btn button btn-light rounded-0 text-uppercase px-2 py-md-2 py-3"
                type="submit"
              >
                learn more
              </a>
            </div>
          </div>
          <div className="col-lg-6 py-5">
            <img src={card} alt="card" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Access;
