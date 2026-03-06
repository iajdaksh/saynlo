
import React from "react";

export default function Features(){

const items=[
{title:"Pure Timeline",text:"No algorithm manipulation"},
{title:"Creator Ownership",text:"You own your audience"},
{title:"Minimal Interface",text:"Focus on conversations"},
{title:"Signal Feed",text:"Quality over noise"},
]

return(
<section className="features">
<h2>Platform Principles</h2>

<div className="featureGrid">
{items.map((f,i)=>(
<div key={i} className="card">
<h3>{f.title}</h3>
<p>{f.text}</p>
</div>
))}
</div>

</section>
)
}
