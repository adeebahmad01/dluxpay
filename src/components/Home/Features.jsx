import React from "react";
import feature1 from "../../assets/images/features-4.png";
import feature2 from "../../assets/images/features-1.png";
import feature3 from "../../assets/images/features-2.png";
import feature4 from "../../assets/images/features-3.png";
import { ReactComponent as Arrow } from "../../assets/images/arrow.svg";
const Features = () => {
  return (
    <section className="py-lg-5 position-relative" style={{
      backgroundColor: "#f5f5f5",
    }}>
      <div
        className="position-absolute d-none d-md-block top-0 p-4"
        style={{
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Arrow width={100} />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 p-md-4 p-sm-3 p-0">
            <div className="box" style={{ "--image": `url(${feature1})` }}>
              DluxPay has industry vet developers that run, operate and secure
              our proprietary software
            </div>
          </div>
          <div className="col-sm-6 p-md-4 p-sm-3 p-0">
            <div className="box" style={{ "--image": `url(${feature4})` }}>
            The wallet's backend uses cutting-edge encryption technology to ensure security
            </div>
          </div>
          <div className="col-sm-6 p-md-4 p-sm-3 p-0">
            <div className="box" style={{ "--image": `url(${feature2})` }}>
              Dlux рау offers fast, stellar customer support
            </div>
          </div>
          <div className="col-sm-6 p-md-4 p-sm-3 p-0">
            <div className="box" style={{ "--image": `url(${feature3})` }}>
              We make sure to deliver the funds where they need to bе
              immediately
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
