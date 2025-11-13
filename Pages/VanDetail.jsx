import { useParams } from "react-router-dom"
import {useEffect,useState} from "react"

const VanDetail = () => {
const params = useParams()
const [vanDetail, setVanDetail] = useState(null)

useEffect(()=>{
    fetch(`/api/vans/${params.id}`)
    .then(res => res.json())
    .then(data => setVanDetail(data.vans))
},[params.id])

  return (
    <div className="p-8">
        {vanDetail ? (
            <div className="van-detail flex flex-col gap-4 justify-center">
                <img src={vanDetail.imageUrl} loading="lazy" className="w-[70%] rounded-md"/>
                <i style={{backgroundColor: vanDetail.type == "simple" ? "#E17654" : vanDetail.type == "rugged" ? "#115E59" : "#161616"}} className="text-white text-center w-22 p-1 rounded-sm">{vanDetail.type}</i>
                <h2 className="font-bold text-3xl">{vanDetail.name}</h2>
                <p><span  className="font-bold">${vanDetail.price}</span>/day</p>
                <p>{vanDetail.description}</p>
                <button className="bg-amber-600 p-2 rounded-md font-semibold text-white" >Rent this van</button>
                </div>
        ): <h2>Loading...</h2>}
    </div>
  )
}

export default VanDetail
