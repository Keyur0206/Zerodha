import { AccountOpen } from "../../Picture/data";
import { OpenAccount } from "../openAccount";

function Signup() {
  return (
    <>
      <div className="container p-5 mt-5 mb-5 text-center">
        <h1 className="fs-3 mt-5">
          Open a free demat and trading account online
        </h1>
        <p className="fs-4 mt-3">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>

        <div className="row mt-4 mb-5">
          <div className="col-1"></div>
          <div className="col-5 mt-5">
            <img src={AccountOpen} alt="" />
          </div>
          <div className="col-5 mt-5 text-start">
            <h1 className="fs-3 mt-5">SignUp Now</h1>
            <p className="fs-5">Or track your existing application</p>

            <select
              name="country"
              id="country"
              className=""
              style={{ width: "5.5rem", height: "2.5rem" }}
            >
              <option value="india">India +91</option>
              <option value="usa">USA +1</option>
            </select>

            <input
              type="mobile"
              placeholder="Enter Your Mobile Number"
              style={{ width: "15rem", height: "2.5rem" }}
            />

            <div>
              <button
                className="btn btn-primary p-2 mt-3 fs-6"
                style={{ width: "15rem", margin: "0 auto" }}
              >
                Get OTP
              </button>
            </div>
          </div>
        </div>
        <OpenAccount />
      </div>
    </>
  );
}

export { Signup };
