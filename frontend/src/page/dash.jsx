import { useNavigate } from "react-router-dom"
import "../style/dash.css"
import Foot from "../comp/foot.jsx"
function Dash() {

const nav = useNavigate()



return (

<div className="main">

<div className="sidebar">

<h2 className="sidetitle">🐂 Festival</h2>

<button onClick={()=>nav("/dash")}>🏠 Dashboard</button>
<button onClick={()=>nav("/bull")}>🐂 Bull</button>
<button onClick={()=>nav("/admin")}>⚙ Admin</button>
<button onClick={()=>nav("/team")}>👥 Team</button>
<button onClick={()=>nav("/place")}>📍 Place</button>
<button onClick={()=>nav("/pay")}>💳 Payment</button>
<button onClick={()=>nav("/gallery")}>🖼 Gallery</button>
<button onClick={()=>nav("/about")}>ℹ About</button>
<button onClick={()=>nav("/profile")}>👤 Profile</button>

<button onClick={()=>{
document.body.classList.toggle("light")
}}>
🌙 Theme
</button>

<button onClick={()=>{
localStorage.removeItem("login")
nav("/login")
}}>
🚪 Logout
</button>

</div>

<div className="content">

<div className="hero">
<div className="overlay">
<h1>அகில இந்திய மாபெரும் எருது விடும் திருவிழா</h1>
<p>Tamil Nadu Traditional Bull Festival System</p>
</div>
</div>

<h1 className="title">Festival Dashboard</h1>

<div className="cardbox">

<div className="card" onClick={()=>nav("/bull")}>
<h2>🐂 Bull Registration</h2>
<p>Manage all bulls</p>
</div>

<div className="card" onClick={()=>nav("/admin")}>
<h2>⚙ Admin</h2>
<p>Edit and delete records</p>
</div>

<div className="card" onClick={()=>nav("/team")}>
<h2>👥 Committee</h2>
<p>Festival organizers</p>
</div>

<div className="card" onClick={()=>nav("/place")}>
<h2>📍 Places</h2>
<p>Festival locations</p>
</div>

<div className="card" onClick={()=>nav("/pay")}>
<h2>💳 Payments</h2>
<p>Payment records</p>
</div>

</div>

</div>
<Foot />
</div>

)

}

export default Dash