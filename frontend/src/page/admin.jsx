import { useEffect, useState } from "react"
import axios from "axios"

function Admin() {

const [list,setList] = useState([])
const [search,setSearch] = useState("")

const getBull = async () => {
const res = await axios.get("http://localhost:5000/bull/all")
setList(res.data)
}

useEffect(()=>{
getBull()
},[])

const deleteBull = async (id) => {
const ok = window.confirm("Delete this bull permanently?")
if(!ok) return

await axios.delete(`http://localhost:5000/bull/delete/${id}`)
alert("Bull Deleted")
getBull()
}

const editBull = async (id) => {
const owner = prompt("Enter new owner name")
if(!owner) return

await axios.put(`http://localhost:5000/bull/update/${id}`,{
owner:owner
})

alert("Bull Updated")
getBull()
}

return (
<div style={{
minHeight:"100vh",
padding:"40px",
background:"linear-gradient(135deg,#0f172a,#7f1d1d,#f59e0b)",
color:"white"
}}>

<h1 style={{
textAlign:"center",
fontSize:"38px",
marginBottom:"30px"
}}>
⚙ Admin Bull Management
</h1>

<input
type="text"
placeholder="🔍 Search Bull Name"
value={search}
onChange={(e)=>setSearch(e.target.value)}
style={{
width:"100%",
padding:"18px",
marginBottom:"30px",
borderRadius:"18px",
border:"none",
fontSize:"18px"
}}
/>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
gap:"25px"
}}>

{list
.filter((item)=>
item.bullname
.toLowerCase()
.includes(search.toLowerCase())
)
.map((item)=>(
<div key={item._id} style={{
background:"rgba(255,255,255,0.15)",
padding:"22px",
borderRadius:"25px",
boxShadow:"0 8px 25px rgba(0,0,0,0.3)"
}}>

<div style={{
height:"180px",
borderRadius:"18px",
background:"#111827",
display:"flex",
alignItems:"center",
justifyContent:"center",
fontSize:"60px",
marginBottom:"15px"
}}>
🐂
</div>

<h2>{item.bullname}</h2>
<p>👤 {item.owner}</p>
<p>📞 {item.phone}</p>
<p>🏡 {item.village}</p>
<p>📍 {item.district}</p>

<button onClick={()=>editBull(item._id)} style={editBtn}>
Edit Owner
</button>

<button onClick={()=>deleteBull(item._id)} style={deleteBtn}>
Delete Bull
</button>

</div>
))}

</div>

</div>
)
}

const editBtn = {
width:"48%",
padding:"12px",
marginRight:"4%",
border:"none",
borderRadius:"12px",
background:"#22c55e",
color:"white",
fontWeight:"bold",
cursor:"pointer"
}

const deleteBtn = {
width:"48%",
padding:"12px",
border:"none",
borderRadius:"12px",
background:"#ef4444",
color:"white",
fontWeight:"bold",
cursor:"pointer"
}

export default Admin