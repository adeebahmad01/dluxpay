import React from "react";
import { ReactComponent as Icon1 } from "../../assets/images/features-icon-2.svg";
import { ReactComponent as Icon2 } from "../../assets/images/features-icon-1.svg";
import { ReactComponent as Icon3 } from "../../assets/images/features-icon-4.svg";
import { ReactComponent as Icon4 } from "../../assets/images/features-icon-3.svg";
const Cards = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 text-md-start text-center col-6 px-3">
            <div className="px-lg-5 h-100 d-flex flex-column justify-content-end">
              <div className="px-4 mb-4">
                <Icon1 className="icon" />
              </div>
              <h3>
                Sign up <br />
                with DluxPay
              </h3>
            </div>
          </div>
          <div className="col-lg-3 text-md-start text-center col-6 px-3">
            <div className="px-lg-5 h-100 d-flex flex-column justify-content-end">
              <div className="px-4 mb-4 w-100">
                <Icon2 className="icon" />
              </div>
              <h3>Get a prepaid debit card</h3>
            </div>
          </div>
          <div className="col-lg-3 text-md-start text-center col-6 px-3">
            <div className="px-lg-4 h-100 d-flex flex-column justify-content-end">
              <div className="px-lg-5 mb-4 w-100">
                <Icon3 className="icon" />
              </div>
              <h3>
                Send and <br />
                receive payments
              </h3>
            </div>
          </div>
          <div className="col-lg-3 text-md-start text-center col-6 px-3">
            <div className="px-lg-5 h-100 d-flex flex-column justify-content-end">
              <div className="px-4 mb-4 w-100">
                <Icon4 className="icon" />
              </div>
              <h3>
              Manage your <br />
costs easily
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
