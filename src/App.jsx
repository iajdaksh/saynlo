
import React from "react";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Features from "./components/Features";
import Vision from "./components/Vision";
import Waitlist from "./components/Waitlist";
import Footer from "./components/Footer";

export default function App(){
return (
<div className="app">
<Hero/>
<Philosophy/>
<Features/>
<Vision/>
<Waitlist/>
<Footer/>
</div>
)
}
