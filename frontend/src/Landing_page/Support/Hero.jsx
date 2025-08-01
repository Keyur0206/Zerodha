function Hero() {
  return (
    <>
      <div className="container-fluid pt-5  mt-5 custom ">
        <div className="row p-5 ">
          <div className="col-1"></div>
          <div className="col-5">
            <p className="text-light fs-5">Suppoer Portal</p>
            <p className="text-light mt-5 fs-4">
              Search for an answer or browser help topics to create a Ticket
            </p>
            <div className="mt-5">
              <input
                style={{
                  width: "28rem",
                  height: "3rem",
                  borderRadius: "5px",
                  border: "none",
                  padding: "15px",
                }}
                type="text"
                placeholder="Eg: how do i activate F&O,why is my order getting reject"
              />
            </div>
            <div className="div mt-3">
              <a className="me-2  text-small" href="#">
                TrackAccountOpening
              </a>
              <a className="me-2  text-small" href="#">
                TrackSegmentActivation
              </a>
              <a className="me-2  text-small" href="#">
                IntradayMargins
              </a>
              <a className="me-2 d-block  text-small" href="#">
                KiteUserManual
              </a>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-4 ">
            <p className="text-light text-end pa fs-5">
              <a href="#">Track Tickets</a>
            </p>
            <p className="text-light mt-5 fs-4">Featured</p>
            <ul className="ul">
                <li><a href="#">current takeovers and Delisting-jan 2024</a></li>
                <li><a href="#">latest intraday lavrages-MIS & CO</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export { Hero };
