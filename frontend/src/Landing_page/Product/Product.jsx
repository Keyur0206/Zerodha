import { img1, img2, img3, img4, img5 } from "../../Picture/data";
import { Hero } from "./Hero";
import { LeftSection } from "./LeftSection";
import { RightSection } from "./RightSection";
import { Universe } from "./Universe";

function Product() {
  return (
    <>
      <Hero />
      <LeftSection
        img={img1}
        title="Kite"
        desc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        trydemo="#"
        learnmore="#"
        google="#"
        appstore="#"
      />
      <RightSection
        img={img2} 
        title="Console"
        desc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        link="#"
      />
      <LeftSection
        img={img3}
        title="Coin"
        desc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        trydemo="#"
        learnmore="#"
        google="#"
        appstore="#"
      />
      <RightSection
        img={img4} 
        title="Kite Connect API"
        desc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        link="#"
      />
      <LeftSection 
        img={img5} 
        title="Varsity mobile"
        desc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        trydemo="#"
        learnmore="#"
        google="#"
        appstore="#"
      />
      
      <Universe />
    </>
  );
}

export { Product };
