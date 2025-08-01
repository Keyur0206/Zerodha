import { Logo } from "../Picture/data";
import "../../public/style.css";
function Footer() {
  return (
    <>
      <div className="border-top" style={{ backgroundColor: "#FBFBFB" }}>
        <div className="container p-2 " style={{ backgroundColor: "#FBFBFB" }}>
          <div className="row">
            <div className="col-3 p-2 me-2">
              <img
                src={Logo}
                style={{ width: "8rem", marginTop: "5px" }}
                alt=""
              />
              <p className="mt-4 fp">
                © 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
              </p>
              <div className="mt-4">
                <i
                  style={{ fontSize: "1.3rem", opacity: "0.5" }}
                  className="fa-brands fa-x-twitter me-3"
                ></i>
                <i
                  style={{ fontSize: "1.3rem", opacity: "0.5" }}
                  className="fa-brands fa-facebook me-3"
                ></i>
                <i
                  style={{ fontSize: "1.3rem", opacity: "0.5" }}
                  className="fa-brands fa-instagram me-3"
                ></i>
                <i
                  style={{ fontSize: "1.3rem", opacity: "0.5" }}
                  className="fa-brands fa-linkedin me-3"
                ></i>
              </div>
              <hr />
              <div className="mt-4">
                <i
                  style={{ fontSize: "1.3rem", opacity: "0.5" }}
                  className="fa-brands fa-youtube me-3"
                ></i>
                <i
                  style={{ fontSize: "1.3rem", opacity: "0.5" }}
                  className="fa-brands fa-whatsapp me-3"
                ></i>
                <i
                  style={{ fontSize: "1.3rem", opacity: "0.5" }}
                  className="fa-brands fa-telegram me-3"
                ></i>
              </div>
            </div>
            <div className="col-2 p-2 me-2">
              <p className="fs-5">Account</p>
              <p className="fp">Open demat account</p>
              <p className="fp">Minor demat account</p>
              <p className="fp">NRI demat account</p>
              <p className="fp">Commodity</p>
              <p className="fp">Dematerialisation</p>
              <p className="fp">Fund transfer</p>
              <p className="fp">MTF</p>
              <p className="fp">Referral program</p>
            </div>
            <div className="col-2 p-2 me-2">
              <p className="fs-5">Support</p>
              <p className="fp">Contact us</p>
              <p className="fp">Support portal</p>
              <p className="fp">How to file a complaint?</p>
              <p className="fp">Status of your complaints</p>
              <p className="fp">Bulletin</p>
              <p className="fp">Z-Connect blog</p>
              <p className="fp">Downloads</p>
              <p className="fp">Circular</p>
            </div>
            <div className="col-2 p-2 me-2">
              <p className="fs-5">Company</p>
              <p className="fp">About</p>
              <p className="fp">Philosophy</p>
              <p className="fp">Press & media</p>
              <p className="fp">Careers</p>
              <p className="fp">Zerodha Cares (CSR)</p>
              <p className="fp">Zerodha.tech</p>
              <p className="fp">Open source</p>
            </div>
            <div className="col-2 p-2 me-2">
              <p className="fs-5">Quick links</p>
              <p className="fp">Upcoming IPOs</p>
              <p className="fp">Brokerage charges</p>
              <p className="fp">Market holidays</p>
              <p className="fp">Economic calendar</p>
              <p className="fp">Calculators</p>
              <p className="fp">Markets</p>
              <p className="fp">Sectors</p>
            </div>
          </div>
        </div>
      </div>
      <div className="fpp container p-2">
        <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

        <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

        <p><a href="#">Smart Online Dispute Resolution | Grievances Redressal Mechanism</a></p>

        <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

        <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

        <p>India's largest broker based on networth as per NSE. NSE broker factsheet</p>

        <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
      </div>
    </>
  );
}

export { Footer };
