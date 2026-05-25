import { Link }
from "react-router-dom"

function Home() {

return (

<div
style={{
height:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
flexDirection:"column",
background:"#7c2d12",
color:"white"
}}
>

<h1>
அகில இந்திய மாபெரும்
எருது விடும் திருவிழா
</h1>

<Link
to="/login"
style={{
margin:"20px",
fontSize:"25px",
color:"yellow"
}}
>
Login
</Link>

<Link
to="/reg"
style={{
fontSize:"25px",
color:"yellow"
}}
>
Register
</Link>
</div>

)
}

export default Home