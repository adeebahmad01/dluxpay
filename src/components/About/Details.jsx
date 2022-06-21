import React from "react";
import image1 from "../../assets/images/service-1.png";
import image2 from "../../assets/images/service-2.png";

const Details = () => {
  return (
    <>
      <section className="py-5" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 py-4 d-flex flex-column justify-content-center">
              <h3>
                DluxPay provides a viable solution for freelance workers in the
                indusrty to have access to their funds on a prepaid, reloadable
                debit card.
              </h3>
              <br />
              <h3>
                We offer freelancers and companies paying them a smooth and
                productive payroll solution with a prepaid Visa and soon
                MasterCard as well.
              </h3>
              <br />
              <h3>
                We understand how time-sensitive certain situations can be, and
                we make sure to deliver these funds where they need to be
                immediately.
              </h3>
            </div>
            <div className="col-lg-6">
              <img src={image1} alt="image1" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row flex-lg-row-reverse">
            <div className="col-lg-6 d-flex py-4 flex-column justify-content-center">
              <h3>
                Your payees receive their funds instantly, and without hassles
                and delays. <br /> We also provide unmatched customer support,
                listening to, understanding and adapting to our clients' needs.
              </h3>
              <br />
              <h3>
                You will definitely enjoy the lowest industry rates when
                converting, withdrawing and transferring funds.
              </h3>
              <br />
              <h3 className="d-lg-block d-none">
                long story short, <span className="text-primary">DluxPay</span>{" "}
                is really worth using.
              </h3>
            </div>
            <div className="col-lg-6">
              <img src={image2} alt="image2" className="img-fluid" />
            </div>
          </div>
          <div className="py-4">
            <h3 className="d-lg-none text-lg-start text-center d-block">
              long story short, <span className="text-primary">DluxPay</span> is
              really worth using.
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
