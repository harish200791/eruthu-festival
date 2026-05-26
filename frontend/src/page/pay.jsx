import { useEffect, useState } from "react"
import axios from "axios"
import { QRCodeCanvas } from "qrcode.react"
import jsPDF from "jspdf"


function Pay(){

const [data,setData] = useState({
owner:"",
bullname:"",
amount:"",
status:"pending",
date:"",
tid:""
})

const [list,setList] = useState([])

const upi = "poobalans756@okhdfcbank"

const change = (e) => {
setData({
...data,
[e.target.name]:e.target.value
})
}

const upiLink =
`upi://pay?pa=${upi}&pn=Eruthu Festival&am=${data.amount}&cu=INR&tn=Bull Registration Fee`

const getPay = async () => {
const res = await axios.get("https://eruthu-backend.onrender.com/pay/all")
setList(res.data)
}

useEffect(()=>{
getPay()
},[])

const savePayment = async () => {
await axios.post("https://eruthu-backend.onrender.com/pay/add",data)
alert("Payment Record Saved")

setData({
owner:"",
bullname:"",
amount:"",
status:"pending",
date:"",
tid:""
})

getPay()
}

const deletePayment = async (id) => {
const ok = window.confirm("Delete this payment record?")
if(!ok) return

await axios.delete(`https://eruthu-backend.onrender.com/pay/delete/${id}`)
alert("Payment Deleted")
getPay()
}

const downloadPDF = () => {
const doc = new jsPDF()

doc.setFontSize(20)
doc.text("Eruthu Festival Payment History",20,20)

let y = 40

list.forEach((item,index)=>{
doc.text(
`${index+1}. ${item.owner} | ${item.bullname} | Rs.${item.amount} | ${item.status}`,
20,
y
)
y += 12
})

doc.save("payment-history.pdf")
}



return(
<div style={{
minHeight:"100vh",
padding:"40px",
background:"linear-gradient(135deg,#0f172a,#7f1d1d,#f59e0b)",
color:"white",
textAlign:"center"
}}>

<h1>💳 UPI Payment & History</h1>

<div style={{
maxWidth:"600px",
margin:"30px auto",
padding:"30px",
background:"rgba(255,255,255,0.15)",
borderRadius:"25px"
}}>

<input
name="owner"
value={data.owner}
onChange={change}
placeholder="Owner Name"
style={input}
/>

<input
name="bullname"
value={data.bullname}
onChange={change}
placeholder="Bull Name"
style={input}
/>

<input
name="amount"
value={data.amount}
onChange={change}
placeholder="Amount"
type="number"
style={input}
/>

<input
name="date"
value={data.date}
onChange={change}
type="date"
style={input}
/>

{data.amount && (
<div style={{
background:"white",
padding:"15px",
borderRadius:"15px",
display:"inline-block",
marginBottom:"20px"
}}>
<QRCodeCanvas value={upiLink} size={220} />
</div>
)}

{data.amount && (
<a href={upiLink}>
<button style={btn}>
Pay with GPay / PhonePe
</button>
</a>
)}

<input
name="tid"
value={data.tid}
onChange={change}
placeholder="Enter Transaction ID"
style={input}
/>

<select
name="status"
value={data.status}
onChange={change}
style={input}
>
<option value="pending">Pending</option>
<option value="paid">Paid</option>
</select>

<button onClick={savePayment} style={btn}>
Save Payment Record
</button>

</div>

<button onClick={downloadPDF} style={pdfBtn}>
📄 Download PDF
</button>



<h1>Payment History</h1>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
gap:"20px"
}}>

{list.map((item)=>(
<div key={item._id} style={{
padding:"22px",
borderRadius:"22px",
background:"rgba(255,255,255,0.15)"
}}>

<h2>💳 {item.bullname}</h2>
<p>👤 {item.owner}</p>
<p>💰 ₹{item.amount}</p>
<p>📌 {item.status}</p>
<p>📅 {item.date}</p>
<p>🧾 {item.tid}</p>

<button onClick={()=>deletePayment(item._id)} style={deleteBtn}>
Delete Payment
</button>

</div>
))}

</div>

</div>
)
}

const input = {
width:"100%",
padding:"15px",
marginBottom:"15px",
borderRadius:"12px",
border:"none"
}

const btn = {
width:"100%",
padding:"15px",
background:"#f59e0b",
border:"none",
borderRadius:"15px",
fontWeight:"bold",
marginBottom:"15px"
}

const pdfBtn = {
padding:"15px",
background:"#22c55e",
border:"none",
borderRadius:"15px",
color:"white",
fontWeight:"bold",
marginBottom:"20px",
marginRight:"10px"
}

const deleteBtn = {
width:"100%",
padding:"12px",
background:"#ef4444",
color:"white",
border:"none",
borderRadius:"12px",
fontWeight:"bold",
marginTop:"15px"
}

export default Pay