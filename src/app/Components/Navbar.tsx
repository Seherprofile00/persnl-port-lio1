
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png"

export default function Navbar() {
  return (<>

 <div className="navbar">
  <Image className="logo" src={logo} alt="logo" width={104} height={30}/> 
  <ul>
<Link className="Home"href="/">Home</Link>
<Link className="About"href="/">Home</Link>
<Link className="list" href="/">Home</Link></ul>
 </div>


 
 </>
  );
}
