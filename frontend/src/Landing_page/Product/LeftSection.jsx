import { appstoreimg, googleimg } from "../../Picture/data";

function LeftSection({img,title,desc,trydemo,learnmore,google,appstore}) {
    return ( 
        <>
        <div className="container p-4 mt-5">
            <div className="row">
                <div className="col-1"></div>
                <div className="col-5 ">
                    <img src={img} alt="image" />
                </div>
                <div className="col-1"></div>
                <div className="col-5 mt-5 p-5">
                    <h1>{title}</h1>
                    <p>{desc}</p>
                    <div>
                        <a href={trydemo}>Try demo</a>
                        <a className="ms-5" href={learnmore}>Learn more</a>
                    </div>
                    <div className="mt-4">
                        <a href={google}><img src={googleimg} alt="" /></a>
                        <a href={appstore}> <img src={appstoreimg} alt="" /> </a>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}

export {LeftSection}