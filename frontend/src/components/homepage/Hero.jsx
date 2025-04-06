import axios from "axios";
import AboutPage from "../aboutpage/AboutPage";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container">
      <div className="hero text-center mt-5 mb-5">
        <h3 className="mt-5 mb-3">Quote of the day</h3>
        <h2 className="mt-3">
          <i>"The only way to do great work is to love what you do."</i>
        </h2>
      </div>
      <div className="row mt-5 mb-5">
        <div className="col-6">
            <img src="./assets/undraw_reading-a-book_4cap.svg" alt="" className="m-5" style={{height:"400px"}}/>
        </div>
        <div className="col-6 p-5">
            <p className="m-5" style={{fontSize : "20px"}}>We propose roadmap, a well-structured guidlines regarding what you want to be in future.</p>
            <Link className="active" to="/about"><button className="btn btn-primary m-5">Learn More</button></Link>
        </div>
      </div>
      <div className="row mt-5 mb-5">
        <div className="col-6 p-5">
            <p className="m-5" style={{fontSize : "20px"}}>We provide you with a well-structured roadmap to help you achieve your goals.</p>
        </div>
        <div className="col-6">
            <img src="./assets/undraw_building-a-website_1wrp.svg" style={{height:"350px"}}/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
