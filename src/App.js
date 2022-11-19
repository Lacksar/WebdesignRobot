import React from 'react';
import './App.css';
import Navbar from "./Navbar";
import Bodymain from "./Bodymain";
import News from './News';
import FutureWork from './FutureWork';
import Robotces from './Robotces';
import LearnMoreButton from './LearnMoreButton';
import RobotWork from './RobotWork';
import Footer from './Footer';


function App() {
  return (

    <>
      <Navbar />



      <Bodymain />

      <News />
      <FutureWork />

      <div>
        <Robotces />
        <center className="mb-10"><LearnMoreButton link="https://www.androidauthority.com/new-robots-942422/" /></center>

      </div>


      <section style={{ minHeight: "500px", }} >
        <div className="grid grid-cols-3 gap-x-3 bg-gray-50 border-box p-3 h-full ml-auto mr-auto" style={{width:"80%"}}>
        <RobotWork
          topic="Robotization"
          about="When the first industrial revolution hit ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices." />


        <RobotWork
          topic="Engineering"
          about="When the first industrial revolution hit ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices." />


        <RobotWork topic="Industry" about="When the first industrial revolution hit ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices." />



          </div>
      </section>

      <Footer facebookLink="https://www.faceboook.com/stup.brook"/>


    </>
  );
}

export default App;
