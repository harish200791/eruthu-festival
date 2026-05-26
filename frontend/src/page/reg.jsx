import { useState } from "react"
import axios from "axios"
import "../style/login.css"

function Reg() {

const [data,setData] = useState({
name:"",
user:"",
pass:""
})

const change = (e) => {
setData({
...data,
[e.target.name]:e.target.value
})
}

const submit = async (e) => {
e.preventDefault()

const res = await axios.post(
"https://eruthu-backend.onrender.com/auth/reg",
data
)

alert(res.data.msg)

setData({
name:"",
user:"",
pass:""
})
}

return (
<div className="login">

<form className="loginbox" onSubmit={submit}>

<h1>Register</h1>

<input
type="text"
name="name"
placeholder="Name"
className="input"
value={data.name}
onChange={change}
/>

<input
type="text"
name="user"
placeholder="Username"
className="input"
value={data.user}
onChange={change}
/>

<input
type="password"
name="pass"
placeholder="Password"
className="input"
value={data.pass}
onChange={change}
/>

<button className="loginbtn">
Register
</button>

</form>

</div>
)
}

export default Reg