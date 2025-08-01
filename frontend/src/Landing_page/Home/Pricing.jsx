import { PricingImg, TwentyImg } from "../../Picture/data";

function Pricing() {
  return (
    <>
      <div className="container p-5 mt-4 z-n1 ">
        <div className="row">
          <div className="col-6">
            <h1 className="fs-2">Unbeatable pricing</h1>
            <p>
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
            <div>
              <a href="#">
                See pricing <i className="fa-solid fa-arrow-right"></i>{" "}
              </a>
            </div>
          </div>
          <div className="col-2 d-flex position-relative">
            <img style={{width:"8rem"}} className="d-inline-block " src={PricingImg} alt="" />
            <p className="fs-6 position-absolute bottom-0 start-50 fp">
              Free account opening
            </p>
          </div>
          <div className="col-2 d-flex position-relative">
            <img style={{width:"8rem"}} src={PricingImg} alt="" />
            <p className="fs-6 position-absolute bottom-0 start-50 fp">
              Free equity delivery and direct mutual funds
            </p>
          </div>
          <div className="col-2 d-flex position-relative">
            <img style={{width:"8rem"}} src={TwentyImg} alt="" />
            <p className="fs-6 position-absolute bottom-0 start-50 fp">
              Intraday and F&O
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export { Pricing };
