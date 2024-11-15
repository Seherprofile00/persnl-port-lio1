



import Image from "next/image";
import coffe from "../public/coffe.jpg"


export default function Projects() {
    return (<>
  
 
  
   
   <div className="Projects-main">
    <h2>Work Experience</h2>
    <div className="projects-card-1">
        <Image className="Image" src={coffe} alt= "card1" height={272} width={510} />
        {/* <Image src={coffe} alt= "card1" height={222} width={570} /> */}
        <span className="card-1-span">coffee website</span>
     
    </div>
    <div className="projects-card-2">
        <Image src={coffe} alt= "card1" height={272} width={510}  />
     <span className="card-2-span">dynamic resume builder</span>
     
    </div>
    <div className="projects-card-3">
        <Image src={coffe} alt= "card1"height={272} width={510}  />
        <span className="card-3-span">dynamic builder</span>
     
    </div>
    <div className="projects-card-4">
        <Image src={coffe} alt= "card1"height={272} width={510}  />
        <span className="card-4-span">dynamic resume builder</span>
     
     
    </div>
    
    
    
    
    
    
    
    
    </div>
  
   
   
   
   
 
   </>
    );
  }