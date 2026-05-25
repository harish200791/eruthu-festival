import bull1 from "../img/bull1.jpg"
import bull2 from "../img/bull2.jpg"
import bull3 from "../img/bull3.jpg"
import bull4 from "../img/bull4.jpg"

function Gallery(){

const images = [
bull1,
bull2,
bull3,
bull4
]

return(
<div style={{
minHeight:"100vh",
padding:"40px",
background:"linear-gradient(135deg,#0f172a,#7f1d1d,#f59e0b)",
color:"white"
}}>

<h1 style={{
textAlign:"center",
fontSize:"45px",
marginBottom:"35px"
}}>
🖼 Festival Gallery
</h1>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
gap:"25px"
}}>

{images.map((img,index)=>(
<div key={index} style={{
padding:"12px",
borderRadius:"25px",
background:"rgba(255,255,255,0.15)"
}}>

<img
src={img}
style={{
width:"100%",
height:"300px",
objectFit:"cover",
borderRadius:"20px"
}}
/>

</div>
))}

</div>

</div>
)
}

export default Gallery