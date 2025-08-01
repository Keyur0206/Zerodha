function Brokrage() {
    return ( 
        <>
       <div className="container p-5 mt-5">
        <div className="row p-5 mt-5">
            <div className="col-6">
                <h1 className="fs-4">Charges explained</h1>
                <p className="fs-6 mt-5">Securities/Commodities transaction tax</p>
                <p className="text-small text-muted">Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>
                <p className="text-small text-muted">When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>

                <p className="fs-6 mt-5">Transaction/Turnover Charges</p>
                <p className="text-small text-muted">BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
                <p className="text-small text-muted">Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
                <p className="text-small text-muted">BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>

                 <p className="fs-6 mt-5">Call & trade</p>
                <p className="text-small text-muted">Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>
            </div>
            <div className="col-6 p-4">
                {/* <p className="fs-6 mt-5"></p> */}
                <p className="fs-6  mt-5">GST</p>
                <p className="text-small text-muted">Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>

                <p className="fs-6  mt-5">SEBI Charges</p>
                <p className="text-small text-muted">Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>
                
                <p className="fs-6 mt-5">DP (Depository participant) charges</p>
                <p className="text-small text-muted">Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
                <p className="text-small text-muted">Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee</p>
            </div>
        </div>
       </div>
        </>
     );
}

export {Brokrage};