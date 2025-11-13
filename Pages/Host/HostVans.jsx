import {useEffect, useState} from "react"
import { Link } from "react-router-dom"

const HostVans = () => {
  const [vansList,setVansList] = useState([])

  useEffect(()=>{
    fetch("/api/host/vans").then(res=>res.json()).then(data=>{
         setVansList(data.vans)
    })
  },[])

  const hostVansEls = vansList.map(van =>(
  <Link key={van.id} to={`/host/vans/${van.id}`}>
        <div key={van.id} className="m-7 flex items-center gap-2 bg-amber-50 rounded-sm p-2">
          <img src={van.imageUrl} className="w-16 rounded-sm"/>
          <div>
          <h2 className="font-bold">{van.name}</h2>
          <p>$<span>{van.price}</span>/day</p>
          </div>
        </div>
  </Link>
      ))

  return (
    <>
    <h1 className="m-7 font-bold text-2xl">Your listed vans
    </h1>
   {
    vansList.length > 0 ? hostVansEls : <h2 className="m-7">Loading...</h2>
   }
    </>
  )
}

export default HostVans