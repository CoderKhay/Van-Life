import {Link} from "react-router-dom"


export default function Home(){
  return(
  <div className="bg-[url(../Assets/img/home-hero.png)] h-[88vh] w-full bg-center">
            <h1 className="p-8 pt-20 text-white font-bold text-4xl">You got the travel plans, we got the travel vans.</h1>
            <p className="p-8 mt-5 mb-8 text-white">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Link className="m-8 bg-orange-400 text-white flex justify-center p-2 rounded-md font-semibold" to="vans">Find your van</Link>
        </div>
  )
}