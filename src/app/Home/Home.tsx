
import Link from "next/link";
import Image from "next/image";
import girl from "../public/girl.png"
import arro1 from "../public/arro2.png"

export default function Home() {
  return (<>



 <div className="Home0"><Image className="Home-img" src={girl} alt="girl" width={105} height={195}/>
 <div><Image className= "Arrow"src={arro1} alt="arrow" width={124} height={176}/></div>
 <div className="Home-intro">Hello! I Am  <span className="Home-intro-span"> &nbsp;  Sehar Fatima</span></div> </div>
 <div className="Home-main-content">
 <div className="Home-Design"><p>A Designer Who</p></div>
 <div className="Home-book"><h2>Judges a book<br></br>
 <span className="q">by its </span><span className="cover">cover</span><span className="dot">...</span></h2></div>
 
 <div className="Home-last"><p> Because if the cover does not impress you what else can?</p></div>
 
 
</div>
 
 
 
 
 
 

 </>
  );
}
