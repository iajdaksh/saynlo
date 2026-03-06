
import React from "react";
import { motion } from "framer-motion";

export default function Hero(){

return(
<section className="hero">

<motion.h1
initial={{opacity:0, y:40}}
animate={{opacity:1, y:0}}
transition={{duration:0.8}}
>
India's Own Social Network
</motion.h1>

<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:0.4}}
>
A platform built for real conversations — not algorithm addiction.
</motion.p>

<div className="heroButtons">
<button>Join Early Access</button>
<button className="outline">Read Vision</button>
</div>

</section>
)
}
