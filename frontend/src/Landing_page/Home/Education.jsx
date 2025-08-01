import { EducationImg } from "../../Picture/data";

function Education() {
  return (
    <>
      <div className="conntainer p-5 mt-5  ">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-5">
            <img
              style={{ width: "28rem", margin: "0 auto" }}
              src={EducationImg}
              alt=""
            />
          </div>
          <div className="col-5 mt-5">
            <h1 className="fs-2">Free and open market education</h1>
            <p className="mt-3">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading</p>
            <div>
                <a href="#">Varsity  <i className="fa-solid fa-arrow-right"></i></a>
            </div>
            <p className="mt-4">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
            <div>
                <a href="#">TradingQ&A  <i className="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Education };
