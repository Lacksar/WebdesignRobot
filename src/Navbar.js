import React from 'react'

function Navbar() {
    return (

        <>
            <div


                style={{

                    display: "flex",
                    justifyContent: "space-between",
                    // background:"red"

                }}>



                <input placeholder='Search...'
                    style={{
                        height: "50px",
                        width:"200px",
                        margin:"20px 20px 20px 70px",
                        boxSizing:"border-box",
                        paddingLeft:"10px",
                        border:"1px solid gray",
                        borderRadius:"5px",
                         boxShadow:"2px 2px 5px black",
                        

                    }} />

                <button style={{
                    
                    height:'50px',
                    width:"50px",
                    margin:"20px 70px 20px 0px",
                
                  border:"1px solid gray",
                  borderRadius:"5px",
                  boxShadow:"2px 2px 4px black",
                    
                    }}>=</button>




            </div>


        </>)
}

export default Navbar