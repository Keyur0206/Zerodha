
import { OpenAccount } from "../openAccount";
import { Awards } from "./Awards";
import { Education } from "./Education";
import { Hero } from "./Hero";
import { Pricing } from "./Pricing";

function Home() {
    return (   
        <>
        
        <Hero/>
        <Awards/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        
        </>
     );
}

export  {Home};