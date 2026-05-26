import { useEffect, useState } from "react"
import axios from "axios"

function Place(){

const [data,setData] = useState({
village:"",
district:"",
year:"",
note:""
})

const [list,setList] = useState([])

const change = (e) => {
setData({
...data,
[e.target.name]:e.target.value
})
}

const getPlace = async () => {
const res = await axios.get(
"https://eruthu-backend.onrender.com/place/all"
)
setList(res.data)
}

useEffect(()=>{
getPlace()
},[])

const savePlace = async () => {

await axios.post(
"https://eruthu-backend.onrender.com/place/add",
data
)

alert("Place Added")

setData({
village:"",
district:"",
year:"",
note:""
})

getPlace()

}

const deletePlace = async (id) => {

const ok = window.confirm(
"Are you sure you want to delete this place permanently?"
)

if(!ok) return

await axios.delete(
`https://eruthu-backend.onrender.com/place/delete/${id}`
)

alert("Place Deleted")

getPlace()

}

return(

<div style={{
minHeight:"100vh",
padding:"40px",
background:"linear-gradient(135deg,#0f172a,#7f1d1d,#f59e0b)",
color:"white"
}}>

<h1 style={{
textAlign:"center",
fontSize:"40px"
}}>
📍 Festival Place Registration
</h1>

<div style={{
maxWidth:"800px",
margin:"30px auto",
padding:"30px",
borderRadius:"25px",
background:"rgba(255,255,255,0.15)"
}}>

<input
name="village"
value={data.village}
onChange={change}
placeholder="Village Name"
style={{
padding:"15px",
width:"100%",
marginBottom:"15px"
}}
/>

<input
name="district"
value={data.district}
onChange={change}
placeholder="District"
style={{
padding:"15px",
width:"100%",
marginBottom:"15px"
}}
/>

<input
name="year"
value={data.year}
onChange={change}
placeholder="Festival Year"
style={{
padding:"15px",
width:"100%",
marginBottom:"15px"
}}
/>

<input
name="note"
value={data.note}
onChange={change}
placeholder="Special Note"
style={{
padding:"15px",
width:"100%",
marginBottom:"15px"
}}
/>

<button
onClick={savePlace}
style={{
padding:"15px",
width:"100%",
background:"#f59e0b",
border:"none",
borderRadius:"15px",
fontWeight:"bold"
}}
>
Save Place
</button>

</div>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
gap:"20px"
}}>

{list.map((item)=>(

<div
key={item._id}
style={{
padding:"22px",
borderRadius:"22px",
background:"rgba(255,255,255,0.15)"
}}
>

<h2>📍 {item.village}</h2>
<p>🏙️ District: {item.district}</p>
<p>📅 Year: {item.year}</p>
<p>📝 Note: {item.note}</p>

<button
onClick={()=>deletePlace(item._id)}
style={{
padding:"12px",
width:"100%",
background:"#ef4444",
color:"white",
border:"none",
borderRadius:"12px",
fontWeight:"bold",
marginTop:"15px"
}}
>
Delete Permanently
</button>

</div>

))}

</div>

</div>

)

}

export default Place