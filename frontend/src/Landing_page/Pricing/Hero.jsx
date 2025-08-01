import { PricingImg, TwentyImg } from "../../Picture/data";

function Hero() {
    return ( 
        <>
        <div className="container p-4 mt-5 text-center">
            <h1 className="mt-5">charges</h1>
            <p className="mt-4">List of all charges and taxes</p>
        </div>

        <div className="container p-5 mt-5">
            <div className="row p-5 mt-5">
                <div className="col-4  text-center">
                    <img style={{width:"17rem"}} src={PricingImg} alt="image" />
                    <h1 className="fs-4">Free equity delivery</h1>
                    <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                 <div className="col-4 text-center">
                    <img style={{width:"17rem"}} src={TwentyImg} alt="image" />
                    <h1 className="fs-4">Intraday and F&O trades</h1>
                    <p className="text-muted ">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                 <div className="col-4 text-center">
                    <img style={{width:"17rem"}} src={PricingImg} alt="image" />
                    <h1 className="fs-4">Free direct MF</h1>
                    <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>


            <hr />
        </div>
        </>
     );
}

export {Hero};