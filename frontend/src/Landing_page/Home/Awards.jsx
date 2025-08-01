import { AwardsImg, PressLogoImg } from "../../Picture/data";




function Awards() {
    return ( <>
   <div className="container p-5 mt-5 ">
    <div className="row">
        <div className="col-6">
             <h1 className="fs-2">Trust with confidence</h1>
             <div className="mt-5">
                <h3 className="fs-4">Customer-first always</h3>
                <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
             </div>
             <div className="mt-5">
                <h3 className="fs-4">No spam or gimmicks</h3>
                <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href="#">Our philosophies</a>.</p>
             </div>
             <div className="mt-5">
                <h3 className="fs-4">The Zerodha universe</h3>
                <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
             </div>
             <div className="mt-5">
                <h3 className="fs-4">Do better with money</h3>
                <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
             </div>
        </div>
        <div className="col-6">
            <img src={AwardsImg} style={{width:"40rem"}} alt="" />

            <div>
         <a  className="m-3" href="#">Explore Our Product <i className="fa-solid fa-arrow-right"></i></a>
         <a className="m-3" href="#">Try Kite Demo <i className="fa-solid fa-arrow-right"></i></a>
        </div>
        </div>

        <img src={PressLogoImg}  style={{width:"40rem" ,margin:"5rem auto"}} alt="" />
        
    </div>
   </div>
    </> );
}

export  {Awards};