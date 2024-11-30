import './style.css';
import { useState } from 'react';
const CustomButton = ({text,warnMessage,hint})=>{

  const [showPopup,setShowPopup] = useState(false)

  const handleMouseEnter = () => {
    if (hint){
        setShowPopup(true);
    } 
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };

     
    const buttonClass = warnMessage ? "button warning" : "button";

 

     
    const onClick = ()=>{
        if(warnMessage){
            alert(warnMessage)
        }
       
    } 

   
    
    return(
       
   
        <div className="button-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <button
          className={buttonClass}
          onClick={onClick}
        >
        {hint?<em>{text}</em>:text}
        </button>
  
        {/* Popup-u göstər */}
        {showPopup && (
          <div className="popup">
            {hint}
          </div>
        )}
      </div>
        
          
       
       
    )
}

export default CustomButton