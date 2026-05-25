function Load(){

return(

<div style={{
height:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
flexDirection:"column",
background:"linear-gradient(135deg,#0f172a,#7f1d1d,#f59e0b)",
color:"white"
}}>

<div style={{
fontSize:"90px",
animation:"spin 2s linear infinite"
}}>
🐂
</div>

<h1>
Eruthu Festival
</h1>

<style>
{`
@keyframes spin{
0%{
transform:rotate(0deg);
}
100%{
transform:rotate(360deg);
}
}
`}
</style>

</div>

)

}

export default Load