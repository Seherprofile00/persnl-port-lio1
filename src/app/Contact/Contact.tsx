
import Image from "next/image";
import figgma from "../public/figma.png"
import react from "../public/react.png"
import node from "../public/node.png"
import java from "../public/java.png"
import css from "../public/css.png"
import html from "../public/html.png"
import solar from"../public/solar.png"






export default function Contact() {
    return (<>
  
  
   <div className="Contact-main">
    <h2>
   I'm currently looking to join a <span>cross-functional team</span></h2>

   <p>that values people lives through accesible design</p>
<div className="Contact-icons">
   <Image src={figgma}alt="figma" width={90} height={100}/>
   <Image src={react}alt="figma" width={90} height={100}/>
   <Image src={node}alt="figma"width={90} height={100}/>
   <Image src={java}alt="figma" width={90} height={100}/>
   <Image src={css}alt="figma" width={90} height={100}/>
   <Image src={html}alt="figma" width={90} height={100}/>
   </div>
  

   </div >
   <div className="Contact-solar">
   
   <Image src={solar}alt="figma" width={390} height={160}/>
   
   </div>
   <div className="Contact-solar-3">
   
   <Image src={solar}alt="figma" width={390} height={160}/>
   
   </div>

   <div className="Contact-solar-2">
   
   <Image src={solar}alt="figma" width={490} height={480}/>
   
   </div>



   </>
    );
  }