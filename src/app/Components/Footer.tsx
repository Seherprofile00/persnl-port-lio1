
"use-client"

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { face} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link"




import { FaFacebook ,FaInstagram,FaLinkedin,FaGithub} from "react-icons/fa";



export default function Footer() {
    return (<>
  
  
  <div className="Footer">
    <h1>Contact</h1>


    <p>I'm currently looking to join a cross-functional team that values improving people's lives<br></br>
through accessible design. or have a project in mind? Let's connect.

</p>
<h2 className="Footer-link-h2">Gmail: <Link className="Footer-link" href="/">fariafati890@gmail.com</Link></h2>


  </div>
  <div className="icons" >
  <FaFacebook /><FaInstagram/><FaLinkedin/><FaGithub/>

  </div>
   
   
   
   
   
  
   </>
    );
  }
  