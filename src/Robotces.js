import React from 'react'

function Robotces() {
    return (
        <section className='w-full ' style={{

            height: "500px",
            backgroundColor: '',
            boxSizing: 'border-box',
            padding: '40px'


        }}>
            <div className='grid gap-3 ' style={{

                width: "90%",
                marginLeft: "auto",
                marginRight: "auto",
                gridTemplateColumns: "repeat(3,1fr)",
                gridTemplateRows: "repeat(3,200px)",



            }}>
                        
                <div className='grid-item-Robotces flex items-center justify-center' style={{ boxShadow:"2px 2px 5px black", backgroundColor: "#bf9000", color: "white" }}>

                    <h1 className='text-2xl text-center font-semibold '>The robots of CES 2019</h1>

                </div>





                <div className='grid-item-Robotces' style={{
                    //  backgroundColor: "black",
                    color: "white",
                    gridColumnStart: "2",
                    gridColumnEnd: "3",
                    gridRowStart: "1",
                    gridRowEnd: "3",
                    backgroundImage: "url(https://th.bing.com/th/id/OIP.Y24xogjV6ojYObiLWC4qRgHaLH?pid=ImgDet&rs=1)",
                    backgroundSize: "contain",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: "center",
                    // boxShadow:"2px 2px 5px black"

                }}>


                    


                </div>







                <div className='grid-item-Robotces flex items-center justify-center border-box pl-4 pr-4' style={{
                    backgroundColor: "#A3E1D3",
                    backgroundBlendMode:"screen",
                    color: "black",
                    gridColumnStart: "3",
                    gridColumnEnd: "4",
                    gridRowStart: "1",
                    gridRowEnd: "3",
                    boxShadow:"2px 2px 5px black",
                }}>



                    <p className='text-xl text-center'>
                        Hitting the show floor at CES can be
                        something of a challenge. There are so
                        many choices, it is almost impossible to
                        figure out where to even start. So this year, I got
                        to narrow my focus to just one area — robotics —
                        and it made my job a lot easier. Or it should have.
                        Turns out, there are so many choices in the field of robotics,
                        I was back where I started.</p>

                </div>







                <div className='grid-item-Robotces' style={{
                    backgroundColor: "black",
                    color: "white",

                    backgroundImage: "url(https://th.bing.com/th/id/OIP.ehASdtJgBvH6EsVZ1Mz9pwHaFb?pid=ImgDet&rs=1)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    boxShadow:"2px 2px 5px black"
                }}></div>

            </div>


           



        </section>
    )
}

export default Robotces