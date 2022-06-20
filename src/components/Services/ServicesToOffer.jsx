import React from "react";
import { ReactComponent as Icon1 } from "../../assets/images/service-icon-1.svg";
import { ReactComponent as Icon2 } from "../../assets/images/service-icon-2.svg";
import { ReactComponent as Icon3 } from "../../assets/images/service-icon-3.svg";
import { ReactComponent as Icon4 } from "../../assets/images/service-icon-4.svg";

const ServicesToOffer = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-6">
            <div className="px-lg-4 h-100 d-flex flex-column justify-content-end">
              <div className="px-5 mb-4">
                <Icon1 className="icon" />
              </div>
              <p>
              Start your business
account easily and provide
international payments
for your workforce
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="px-lg-4 h-100 d-flex flex-column justify-content-end">
              <div className="px-5 mb-4 w-100">
                <Icon2 className="icon" />
              </div>
              <p>Make everything happen
by just clicking a button
in your own system
as we offer a full
api integration</p>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="px-lg-4 h-100 d-flex flex-column justify-content-end">
              <div className="px-5 mb-4 w-100">
                <Icon3 className="icon" />
              </div>
              <p>
              The wallet's backend
utilize cutting edge
encryption technology
to ensure security
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="px-lg-4 h-100 d-flex flex-column justify-content-end">
              <div className="px-5 mb-4 w-100">
                <Icon4 className="icon" />
              </div>
              <p>
              We provide fast
customer support
understanding and
adapting to your needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesToOffer;
