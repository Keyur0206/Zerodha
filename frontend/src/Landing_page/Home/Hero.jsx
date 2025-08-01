import { HeroImg } from "../../Picture/data.js";

function Hero() {
  return (
    <>
      <div className="container p-5  mt-5">
        <div className="row text-center">
          <img style={{width:"50rem",margin:"0 auto"}} src={HeroImg} alt="Hero Image"  className="mb-5"/>

        <h1 className="fs-2 mt-3">Invest in everything</h1>
        <p className="fs-5">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button className="btn btn-primary p-2 fs-6" style={{width:"15%",margin:"0 auto"}}>Sign Up For Free</button>
        </div>
      </div>
    </>
  );
}

export { Hero };
