import React from "react";
import feature1 from "../../assets/images/features-4.png";
import feature2 from "../../assets/images/features-1.png";
import feature3 from "../../assets/images/features-2.png";
import feature4 from "../../assets/images/features-3.png";
import { ReactComponent as Arrow } from "../../assets/images/arrow.svg";
import { ReactComponent as ArrowRight } from "../../assets/images/arrow-right.svg";
const Features = () => {
  return (
    <section className="py-5 position-relative" style={{
      backgroundColor: "#f5f5f5",
    }}>
      <div
        className="position-absolute top-0 p-4"
        style={{
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Arrow width={100} />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 p-4">
            <div className="box" style={{ "--image": `url(${feature1})` }}>
              DluxPay has industry vet developers that run, operate and secure
              our proprietary software<ArrowRight className="ms-3" width={30} />
            </div>
          </div>
          <div className="col-lg-6 p-4">
            <div className="box" style={{ "--image": `url(${feature4})` }}>
              The wallets backend utilizes cutting edge encryption technology to
              ensure security<ArrowRight className="ms-3" width={30} />
            </div>
          </div>
          <div className="col-lg-6 p-4">
            <div className="box" style={{ "--image": `url(${feature2})` }}>
              Dlux рау offers fast, stellar customer support<ArrowRight className="ms-3" width={30} />
            </div>
          </div>
          <div className="col-lg-6 p-4">
            <div className="box" style={{ "--image": `url(${feature3})` }}>
              We make sure to deliver the funds where they need to bе
              immediately<ArrowRight className="ms-3" width={30} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
