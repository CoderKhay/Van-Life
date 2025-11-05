import {Link} from "react-router-dom"
import bgImg from "../Assets/img/about-hero.png"

export default function About(){
  return(
     <div className="about-page-container">
            <img src={bgImg} className="about-hero-image" />
            <div className="about-page-content">
                <h1 className="p-5 font-bold text-3xl">Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p className="p-5">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                <p className="p-5">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>
            <div className="about-page-cta bg-amber-200 p-9 m-5 rounded-md">
                <h2 className="mb-6 font-bold text-2xl">Your destination is waiting.<br />Your van is ready.</h2>
                <Link className="link-button bg-black text-white p-2.5 rounded-md" to="/vans">Explore our vans</Link>
            </div>
        </div>
  )
}