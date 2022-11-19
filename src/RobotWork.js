import React from 'react'
import './App.css';


function RobotWork(props) {
  const logo = props.logo;
  return (

    <>



      <div
        className='flex flex-col justify-center rounded-lg '
        style={{

          // background: "red"

            boxShadow:"2px 2px 5px black"


        }}>

        <div className='text-white h-40 flex justify-center' style={{

          backgroundImage: `url(${logo})`,
          backgroundRepeat:"no-repeat",
          backgroundSize:"contain",
          backgroundPosition:"center"


        }}>


        </div>



        <div className='text-orange-700 font-medium h-20 border-box p-3 text-3xl'><p className='text-center'>{props.topic}</p></div>
        <div className='text-black h-40 border-box p-3 text-xl'><p className='text-center'>{props.about}</p></div>
        












      </div>











    </>
  )
}


RobotWork.defaultProps={

  logo:"https://rbengineering.co.za/wp-content/uploads/2021/07/Hydraulic-Systems-768x768.png",
  topic:"THis is topic",
  about:"this is about"


}

export default RobotWork