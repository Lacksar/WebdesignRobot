import React from 'react'

function News() {
    return (
        <>


            <div className="Robothand" style={{

                
                width: "100%",
                height: "600px",
                display: 'flex',
                flexWrap: "wrap",
                background: 'white',


            }}>

                {/* first */}
                <div style={{

                    width: "50%",
                    height: "100%",
                    //backgroundColor: "red",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: "center",

                }}>


                    <div
                        style={{

                            width: "80%",
                            height: "80%",
                           // backgroundColor: "green",
                            display: 'flex',
                            //alignItems: 'center',
                            // justifyContent: "center",
                            flexDirection:"column"
                        }}

                    >

                        <h5 className='pt-10 pl-5 text-xl tracking-wide'  style={{}}>TECHNOLOGY NEWS</h5>
                        <h1 className='pt-5 pl-5 text-4xl font-bold tracking-wide'>Human Robot</h1>
                        <p className='pt-10 pl-5 text-xl float-right'  style={{width:"90%",}}>In human-robot collaboration, 
                        the robot assists the human operator. This means: The machine does
                         not replace the human, but complements his capabilities and 
                         relieves him of arduous tasks. These can include overhead work, 
                         for example, or the lifting of heavy loads. Autonomous, collaborative 
                         robots are also used to supply production workstations</p>

                    </div>




                </div>



                {/* second */}

                <div style={{

                    width: "50%",
                    height: "100%",
                    // backgroundColor: "blue",
                    display: "flex",
                    alignItems: 'center',
                    justifyContent: 'center',

                }}>
                    <div style={{
                        height: "80%",
                        width: "80%",
                        backgroundColor: 'orange',
                        backgroundImage: 'URL(https://www.bing.com/images/blob?bcid=SzSXu5cUPeMEJw)',
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        boxShadow:"2px 2px 10px black",


                    }}>


                    </div>




                </div>







            </div>


















        </>
    )
}

export default News