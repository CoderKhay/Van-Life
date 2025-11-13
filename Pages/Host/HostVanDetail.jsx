import {useEffect, useState} from 'react'
import { Link, NavLink, useParams, Outlet } from 'react-router-dom'

const HostVanDetail = () => {
  const params = useParams()
  const [hostVanDetail, setHostVanDetail] = useState([])

  const activeStyles = {
    fontWeight : "bold",
    textDecoration: "underline",
    color:"#161616"
  }

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`).then(res => res.json()).then(data => setHostVanDetail(data.vans)
     )
  },[params.id])

  const hostVanDetailEl = hostVanDetail.map(van =>(
    <div key={van.id} className='flex gap-3 m-7  p-2'>
      <img className='w-28 rounded-sm' src={van.imageUrl} alt={van.name} />
      <div className="detail mt-2 flex flex-col gap-1">
            <i style={{backgroundColor: van.type == "simple" ? "#E17654" : van.type == "rugged" ? "#115E59" : "#161616"}} className='rounded-sm text-white text-center p-1 w-20'>{van.type}</i>
      <h2 className='font-bold text-xl'>{van.name}</h2>
      <p><span className='font-semibold'>${van.price}</span>/day</p>
      </div>
      </div>
      ))


  return (
    <section className='bg-amber-50 m-7 rounded-md'>
    <div>
  <Link to=".." relative="path" className='m-7'>← Back to all vans</Link>
  {hostVanDetail.length > 0 ? hostVanDetailEl : <h2>Loading...</h2>}
</div>

<nav className='m-7 flex gap-2 text-gray-500'>
<NavLink to="."  style={({isActive}) => isActive ? activeStyles : null } end>
  Details
  </NavLink>

<NavLink to="pricing" style={({isActive}) => isActive ? activeStyles : null }>
  Pricing
  </NavLink>

<NavLink to="photos"  style={({isActive}) => isActive ? activeStyles : null }>
  Photos
  </NavLink>
</nav>

<Outlet/>
    </section>
  )
}

export default HostVanDetail