import React from "react";
import card from "../../assets/images/card.png";

const Access = () => {
  return (
    <section className="py-5" style={{
      backgroundColor: "#f5f5f5",
    }}>
      
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1>
              INSTANT ACCESS <br />
              TO YOUR FUNDS
            </h1>
            <h3 className="my-3">
              pay employees quickly and easily make instant payments
            </h3>
            <h3 className="my-3">
              We provide all of the tools and resources to help you get started
              quickly and without any hidden fees and unexpected transaction
              costs. It's that simple. There's really no catch.
            </h3>
            <div className="d-flex gap-5">
            <button
            className="btn rounded-0 text-uppercase px-5 py-2 bg-primary text-white btn-primary"
            type="submit"
          >
            sign up
          </button>
            <button
            className="btn btn-light rounded-0 text-uppercase px-5 py-2"
            type="submit"
          >
            learn more
          </button>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={card} alt="card" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Access;
