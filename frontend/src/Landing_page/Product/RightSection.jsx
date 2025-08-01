function RightSection({title,desc,link,img}) {
    return ( 
        <>
        <div className="container mt-5 p-5">
            <div className="row">
                {/* <div className="col-1 "></div> */}
                <div className="col-6 p-5 mt-5">
                    <h1>{title}</h1>
                    <p>{desc}</p>
                    <div>

                    <a href={link}>Learn More</a>
                    </div>
                </div>
                {/* <div className="col-1"></div> */}
                <div className="col-6">
                    <img src={img} alt="image" />
                </div>
            </div>
        </div>
        </>
     );
}

export {RightSection};