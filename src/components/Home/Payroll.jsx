import React from "react";
import { ReactComponent as Arrow } from "../../assets/images/arrow.svg";
import employee1 from "../../assets/images/employee-1.png";
import employee2 from "../../assets/images/employee-2.png";
const Payroll = () => {
  return (
    <section className="py-4 position-relative overflow-hidden">
      <div
        className="position-absolute top-0 p-4"
        style={{
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Arrow width={100} />
      </div>
      <img
        src={employee1}
        width={350}
        className="position-absolute bottom-0 left-0"
        style={{
          transform: "translateY(20%)",
        }}
        alt="employee1"
      />
      <img
        src={employee2}
        width={350}
        className="position-absolute top-0 end-0"
        style={{
          transform: "translateY(-10%)",
        }}
        alt="employee2"
      />
      <div className="container">
        <div className="row p-5">
          <div className="col-lg-7 p-4 pt-5">
            <h3>
              <span className="text-primary">Dluxpay</span> is a simple and
              efficient payroll solution providing great advantages for
              freelancers and companies paying them.
            </h3>
          </div>
        </div>
        <br />
        <div className="row p-5 mt-5">
          <div className="col-lg-7 offset-5 p-5">
            <h3>
              We offer all your employees the ability to gain instant access to
              their funds with a prepaid debit card.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payroll;
