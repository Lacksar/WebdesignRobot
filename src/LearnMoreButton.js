import React from 'react'

function LearnMoreButton(props) {

  return (
    <>
    
    <button className="flex-shrink-0 text-black border-0 text-xl py-2 px-8 focus:outline-none hover:rounded text-lg mt-10 sm:mt-0"
     style={{
      boxShadow:"2px 2px 5px black",

        backgroundColor:"#A3E1D3",
        borderRadius:"4px"


    }} onClick={
       () =>   {
        
        window.location= props.link;
        
        

       }
    }>{props.text}</button>

  
  
  
    </>
  )
}




LearnMoreButton.defaultProps = {
    text: "Learn More",
    link:"/"
  };



export default LearnMoreButton