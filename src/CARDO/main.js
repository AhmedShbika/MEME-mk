
import b from "./images/inst.png"
import c from "./images/twitter.png"
import d from "./images/whats app.png"
export default function Main(){

    return(
    <div className="Main">
        
      <div className="section1">
        
     
        <h5 className="section" >about</h5>      
        <p className="talke0"> my,name is malike altaybe, i am<br/>
        graphic designer this is my <br/> card 
        all my contact  info is here <br/>and you could know
        littel<br/> about me</p>
        </div>
            <div className="section2">
          
            <h5 className="section0">interest</h5>
            <p className="talke">i make visual changing life, <br/> just by my labtop and 
             camera.<br/>with profisional designs and<br/> 
             imaginable logos am your best<br/> choice
                
                </p>    
          
            </div>
            <nav className="socialmedia">
            
            <a href="https://instagram.com/malikaltiab?igshid=NTA5ZTk1NTc="> <img src={b} className="App" alt="logo" />   </a>  
            <a href="https://twitter.com/Malik980804542?t=gWVLOHr-tcYDcQO4L7tx9A&s=09"> <img src={c} className="App" alt="logo" />   </a>  
            <a href="https://wa.me/qr/4LCUSKU2LCSHO1"> <img src={d} className="App" alt="logo"/>    </a>  
                </nav>
    </div>
        )
}