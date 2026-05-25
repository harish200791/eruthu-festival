function Profile(){
return(
<div style={{
minHeight:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
background:"linear-gradient(135deg,#0f172a,#7f1d1d,#f59e0b)",
color:"white"
}}>

<div style={{
width:"400px",
padding:"40px",
borderRadius:"30px",
background:"rgba(255,255,255,0.15)",
textAlign:"center"
}}>

<h1>👤 User Profile</h1>
<div style={{fontSize:"80px"}}>🐂</div>
<h2>Festival Admin</h2>
<p>Role: Website Manager</p>
<p>Project: Eruthu Festival</p>
<p>Location: Tamil Nadu</p>

</div>
</div>
)
}

export default Profile