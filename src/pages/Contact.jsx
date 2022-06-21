import React from "react";

const Contact = () => {
  return (
    <section className="py-5">
      <div className="container">
        <form action="/" method="post">
          <div className="card border-primary rounded shadow">
            <div className="card-header p-0">
              <div className="bg-primary py-4 text-white text-center py-2">
                <h3 className="text-white">Contact Us</h3>
                <p className="m-0">
                  <span className="text-white">DluxPay</span>
                </p>
              </div>
            </div>
            <div className="card-body p-5">
              {/*Body*/}
              <div className="form-group py-2">
                <div className="d-flex mb-2">
                  <label style={{minWidth: 120}} htmlFor="first_name">
                    First Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="first_name"
                    name="first_name"
                    placeholder="First Name"
                    required=""
                  />
                </div>
              </div>
              <div className="form-group py-2">
                <div className="d-flex mb-2">
                  <label style={{minWidth: 120}} htmlFor="last_name">
                    Last Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="last_name"
                    name="last_name"
                    placeholder="Last Name"
                    required=""
                  />
                </div>
              </div>
              <div className="form-group py-2">
                <div className="d-flex mb-2">
                  <label style={{minWidth: 120}} htmlFor="email">
                    Email:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required=""
                  />
                </div>
              </div>
              <div className="form-group py-2">
                <div className="d-flex mb-2">
                  <label style={{minWidth: 120}} htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    placeholder="Message"
                    id="message"
                    name="message"
                    required=""
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="text-center">
                <button className="btn rounded-0 text-uppercase px-5 py-2 bg-primary text-white btn-primary">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
