import { useEffect, useState } from "react"
import axios from "axios"
import "../style/team.css"

function Team() {
const [data,setData] = useState({
name:"",
role:"",
phone:"",
village:"",
amount:"",
work:""
})

const [list,setList] = useState([])

const change = (e) => {
setData({...data,[e.target.name]:e.target.value})
}

const getTeam = async () => {
const res = await axios.get("https://eruthu-backend.onrender.com/team/all")
setList(res.data)
}

useEffect(()=>{ getTeam() },[])

const submit = async (e) => {
e.preventDefault()
await axios.post("https://eruthu-backend.onrender.com/team/add",data)
alert("Committee Member Added")
setData({name:"",role:"",phone:"",village:"",amount:"",work:""})
getTeam()
}

return (
<div className="teampage">

<form className="teambox" onSubmit={submit}>
<h1>👥 Committee Registration</h1>

<div className="teamgrid">
<input name="name" value={data.name} onChange={change} className="teaminput" placeholder="Member Name" />
<input name="role" value={data.role} onChange={change} className="teaminput" placeholder="Role" />
<input name="phone" value={data.phone} onChange={change} className="teaminput" placeholder="Phone Number" />
<input name="village" value={data.village} onChange={change} className="teaminput" placeholder="Village" />
<input name="amount" value={data.amount} onChange={change} className="teaminput" placeholder="Donation Amount" type="number" />
<input name="work" value={data.work} onChange={change} className="teaminput" placeholder="Work / Responsibility" />
</div>

<button className="teambtn">Save Member</button>
</form>

<div className="teamlist">
{list.map((item)=>(
<div className="teamcard" key={item._id}>
<h2>👤 {item.name}</h2>
<p>🏷️ Role: {item.role}</p>
<p>📞 Phone: {item.phone}</p>
<p>🏡 Village: {item.village}</p>
<p>💰 Donation: ₹{item.amount}</p>
<p>⚙️ Work: {item.work}</p>
</div>
))}
</div>
</div>
)
}

export default Team