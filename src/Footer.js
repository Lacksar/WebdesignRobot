import React from 'react'


function Footer(props) {

  

 




    return (
        <>

            <section className=' flex flex-col items-center justify-center' style={{ minHeight: "100px", width:"100%"}}>

                    <p className='text-2xl mb-3'>Contact Us</p>


                <div className='h-full flex gap-3 items-center  justify-center w-full mb-3'>

                    <div className='footer-icons' onClick={()=>window.location=props.facebookLink} id="facebook" style={{
                       
                       backgroundImage:"url(https://www.vippng.com/png/detail/13-132738_round-facebook-logo-black-and-white.png)"


                    }}>

                       

                    </div>





                    <div className='footer-icons' onClick={()=>window.location=props.youtubeLink} id="youtube" style={{
                        backgroundImage:"url(https://th.bing.com/th/id/R.a4aba31db70cfcf93c92a01d769af05a?rik=YEMqiob2owJFNw&riu=http%3a%2f%2fwww.vectorico.com%2fwp-content%2fuploads%2f2018%2f02%2fyoutube-dark-circle.png&ehk=cUQKO1UIYdpXLdzqD%2f4V5sWZW2IFdSP%2bdGMtq7iEn2A%3d&risl=&pid=ImgRaw&r=0)"

                      
                    }}></div>




                    <div className='footer-icons' onClick={()=>window.location=props.githubLink} id="github" style={{
                            backgroundImage:"url(https://mrpaulandrew.files.wordpress.com/2018/11/github-icon.png)"

                    }}></div>





                </div>


            </section>





        </>
    )
}



Footer.defaultProps={

facebookLink:"https://www.facebook.com/stup.brook",
youtubeLink:"https://www.facebook.com/stup.brook",
githubLink:"https://www.github.com/lacksar"


}

export default Footer