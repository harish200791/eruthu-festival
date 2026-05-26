import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "../style/login.css"

function Login() {

const nav = useNavigate()

const [data,setData] = useState({
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
"https://eruthu-backend.onrender.com/auth/login",
data
)

if(res.data.msg === "login ok"){

localStorage.setItem(
"login",
"true"
)

alert("Login Success")

nav("/dash")

}else{

alert(res.data.msg)

}

}

return (

<div className="login">

<form
className="loginbox"
onSubmit={submit}
>

<h1>Login</h1>

<input
type="text"
name="user"
placeholder="Username"
className="input"
onChange={change}
/>

<input
type="password"
name="pass"
placeholder="Password"
className="input"
onChange={change}
/>

<button className="loginbtn">
Login
</button>

</form>

</div>

)

}

export default Login