import a from "./images/face.png"
import yt from "./images/tellle.png"
import ty from "./images/email.png"
import im from "./images/malik3.jpg"

export default function Head(){

    return(
        <div className="Head">
            
        
            <img src={im} className="App" alt="logo" height={280}  width={400}/>    
        <div className="content">
            
       
        <h4 className="name">MALIK ALTAYBE </h4>
        <p className="detail">graphic designer</p>
    <h5>colors is my langauge</h5>
    </div>
    <nav>
        
   
    <a href="https:// jkbon12365@gmail.com" className="herf"><img src={ty} className="Apop" alt="logo" height={20} width={20}/>   email</a> <a href=" https://www.facebook.com/profile.php?id=100008137533997&mibextid=ZbWKwL"className="herf2" > <img src={a} className="Appp" alt="logo" height={20}  width={20}/>  facebook</a>
    </nav>
    </div>   
      
        )
}