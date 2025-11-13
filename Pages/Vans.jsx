import {useState,useEffect} from 'react';
import {Link} from "react-router-dom"

export default function Vans() {
const [vans, setVans] = useState([])

    useEffect(()=> {
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
    },[])

const vansElement = vans.map((van)=>(
  <div key={van.id}>
  <Link to={`/vans/${van.id}`}>
    <img src={van.imageUrl} alt="van-pic" className='w-52 rounded-md' loading='lazy'/>
    <div className='mt-4'>
      <h3 className='font-bold'>{van.name}</h3>
      <p className='mt-3 mb-2'>${van.price}<span>/day</span></p>
    </div>
    <i style={{backgroundColor: van.type == "simple" ? "#E17654" : van.type == "rugged" ? "#115E59" : "#161616"}} className='pr-5 pl-5 p-1 rounded-sm text-white text-center '>{van.type}</i>
  </Link>
    </div>
))

  return (
    <div>
        <h1 className='font-bold ml-6 text-xl'>Explore our van option</h1>
    <section className='flex flex-wrap gap-5 p-6'>
      {vansElement}
    </section>
    </div>
  )
}