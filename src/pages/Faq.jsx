import React from "react";

const Faq = () => {
  return (
    <section className="py-5" style={{minHeight: `100vh`}}>
      <div className="container">
        <div className="d-flex flex-column gap-4">
        <details className="bg-light w-100 rounded-3 p-3">
          <summary className="w-100 h5 fw-bold">
            What is the main purpose of DluxPay?
          </summary>
          <p className="mt-3 mb-0">
            DluxPay is a payment platform that allows businesses to send and
            receive payments to freelancers and remote employees.
          </p>
        </details>
        <details className="bg-light w-100 rounded-3 p-3">
          <summary className="w-100 h5 fw-bold">
            What is the main purpose of DluxPay?
          </summary>
          <p className="mt-3 mb-0">
            DluxPay is a payment platform that allows businesses to send and
            receive payments to freelancers and remote employees.
          </p>
        </details>
        <details className="bg-light w-100 rounded-3 p-3">
          <summary className="w-100 h5 fw-bold">
            What is the main purpose of DluxPay?
          </summary>
          <p className="mt-3 mb-0">
            DluxPay is a payment platform that allows businesses to send and
            receive payments to freelancers and remote employees.
          </p>
        </details>
        </div>
      </div>
    </section>
  );
};

export default Faq;
