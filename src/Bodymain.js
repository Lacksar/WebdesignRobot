import React from 'react'

function Bodymain() {
  return (

    <>
      <div
        style={{
          display: "flex",
          background: "black",


          height: "700px",
          width: "100%",

          //flexWrap: "revert",
          justifyContent: "space-between",


        }}

      >
        <div style={{
          
          height: "100%",
          width: "30%",

          background: "url(https://pngimg.com/uploads/robot/robot_PNG92.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "invert",
          backgroundPositionX: "center"




        }}></div>


        <div
          style={{
            // background: "red",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            height: "100%",
            width: "60%",
            flexDirection: 'column',
            color: "white",


            


          }}>
          <h1 style={{

            fontSize: "4em",
          }}>ROBOTS ARE <br />THE FUTURE</h1>
          <p
            style={{
              fontSize: "2.5em",


              

            }}>The technology is tooking human places.</p>
        </div>

      </div>
    </>
  )
}

export default Bodymain