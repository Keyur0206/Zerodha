import { me } from "../../Picture/data";

function Team() {
    return ( 
        <>
       <div className="container p-4 text-center mt-5 mb-5">
        <h1>People</h1>
        <div className="row">
            <div className="col-2"></div>

            <div className="col-4 mt-5">
              
                <img src={me} style={{width:"18rem",borderRadius:"50%",filter: "grayscale(100%)",zIndex:"-99999"}} alt="Keyur" />

                <div className="mt-3">

                <p>Keyur Prajapati</p>
                <p className="fp">Developer</p>

                </div>
            </div>
            <div className="col-4 mt-5 text-start">
                <p>Keyur bootstrapped and founded Zerodha in 2025 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                <p>
                    He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                </p>

                <p>Playing basketball is his zen.</p>
            </div>

            <div className="col-2"></div>
        </div>
       </div>
        </>
     );
}

export {Team};