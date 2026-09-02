"use client";
import { useMemo, useState } from "react";

const methods = [
  {id:"plus",name:"Instant Send",rate:550,desc:"Direct through Roblox Plus",tag:"FASTEST"},
  {id:"nct",name:"NCT",rate:300,desc:"Roblox tax is not covered",tag:"LOW RATE"},
  {id:"ct",name:"CT",rate:430,desc:"Receive the full ordered amount",tag:"FULL AMOUNT"},
  {id:"gift",name:"Gifting",rate:300,desc:"For eligible Roblox gifts",tag:"FLEXIBLE"},
] as const;

export default function Home(){
 const [method,setMethod]=useState("plus");
 const [robux,setRobux]=useState(1000);
 const [step,setStep]=useState(1);
 const selected=methods.find(x=>x.id===method)!;
 const total=useMemo(()=>Math.ceil(Math.max(100,robux)/1000*selected.rate),[robux,selected]);
 return <main>
  <nav className="nav shell"><a className="brand" href="#"><i>R</i><b>RSR SHOP</b></a><div className="links"><a href="#buy">Buy Robux</a><a href="#how">How it works</a><a href="#support">Support</a></div><a className="navbtn" href="#buy">Order now</a></nav>
  <section className="hero shell"><div><span className="eyebrow">● PH ROBUX SHOP • GCASH & GOTYME</span><h1>Get your Robux.<br/><em>Choose your way.</em></h1><p>Clear rates, simple steps, and four delivery methods for Filipino Roblox players.</p><div className="actions"><a className="primary" href="#buy">Check prices →</a><a className="secondary" href="#how">How it works</a></div><div className="trust">✓ No password required　✓ Exact price shown　✓ PH support</div></div><div className="art"><div className="cube">R$</div><aside><small>STARTING RATE</small><b>₱300</b><span>per 1,000</span></aside></div></section>
  <section id="buy" className="buy shell"><span className="eyebrow">PRICE CALCULATOR</span><h2>Build your order</h2><p className="lead">Choose a method and amount. Your payment is calculated instantly.</p>
   <div className="methodgrid">{methods.map(x=><button key={x.id} className={"method "+(method===x.id?"active":"")} onClick={()=>{setMethod(x.id);setStep(1)}}><header><b>{x.name}</b><small>{x.tag}</small></header><strong>₱{x.rate}<i>/1K</i></strong><span>{x.desc}</span></button>)}</div>
   <div className="checkout"><div className="stepper"><b className={step>=1?"on":""}>1</b><hr/><b className={step>=2?"on":""}>2</b><hr/><b className={step>=3?"on":""}>3</b></div>
    {step===1&&<div className="body"><label>How much Robux?</label><div className="amount"><span>R$</span><input type="number" min="100" step="100" value={robux} onChange={e=>setRobux(Number(e.target.value))}/></div><div className="chips">{[500,1000,2000,5000].map(v=><button key={v} onClick={()=>setRobux(v)}>{v.toLocaleString()}</button>)}</div><div className="summary"><span>You pay</span><b>₱{total.toLocaleString()}</b><small>{selected.name} • ₱{selected.rate}/1,000</small></div><button className="continue" onClick={()=>setStep(2)}>Continue to account →</button></div>}
    {step===2&&<div className="body"><label>Roblox username</label><input className="field" placeholder="Enter exact username"/>{(method==="nct"||method==="ct")&&<><label>Game Pass link</label><input className="field" placeholder="https://www.roblox.com/game-pass/..."/></>}{method==="gift"&&<><label>Item or gift link</label><input className="field" placeholder="Paste the Roblox item link"/></>}<p className="notice">Never enter your Roblox password. Plus eligibility or parent approval may apply.</p><button className="continue" onClick={()=>setStep(3)}>Continue to payment →</button><button className="back" onClick={()=>setStep(1)}>Back</button></div>}
    {step===3&&<div className="body"><label>GCash or GoTyme</label><img className="payment" src="/payment-methods.png" alt="RSR Shop GCash and GoTyme QR codes"/><p className="notice">Pay exactly <b>₱{total.toLocaleString()}</b>, save your receipt, then send it with your order details.</p><a className="continue center" href="https://www.facebook.com/profile.php?id=61592736479803" target="_blank">Send receipt to support →</a><button className="back" onClick={()=>setStep(2)}>Back</button></div>}
   </div>
  </section>
  <section id="how" className="how shell"><span className="eyebrow">HOW IT WORKS</span><h2>Four simple steps</h2><div className="howgrid">{[["01","Choose","Select a method and Robux amount."],["02","Add details","Enter only the information needed."],["03","Pay","Scan GCash or GoTyme and save the receipt."],["04","Receive","Support verifies and processes your order."]].map(x=><article key={x[0]}><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></section>
  <section className="warning shell"><div><small>IMPORTANT</small><h2>We never ask for your Roblox password.</h2></div><p>Double-check your username, links, amount, and payment. Roblox Plus transfers are final.</p></section>
  <footer id="support"><div className="shell foot"><div className="brand"><i>R</i><b>RSR SHOP</b></div><div><b>Need help?</b><a href="mailto:reckshopemergencycontact@gmail.com">reckshopemergencycontact@gmail.com</a><a href="tel:+639121656529">0912 165 6529</a></div><div><b>Support</b><a href="https://www.facebook.com/profile.php?id=61592736479803">Facebook page</a><span>Philippines</span></div></div><p className="legal shell">Independent shop. Not affiliated with Roblox Corporation.</p></footer>
 </main>
}
