
import Link from "next/link";
import Image from "next/image";
import girl from "../app/public/girl.png"
import arro1 from "../app/public/arro2.png"
import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects/projects";
import Contact from "./Contact/Contact";

export default function Portfolio() {
  return (<>

<Home/>

 <div>
 
 <About/>
 <Projects/>
 <Contact/>
 
 
 
 </div>
 </>
  );
}
