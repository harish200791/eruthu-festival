import { useState,useEffect }
from "react"

import axios from "axios"

import "../style/bull.css"

function Bull() {

const [data,setData] =
useState({

bullname:"",
owner:"",
phone:"",
village:"",
district:"",
age:"",
breed:"",
festival:"",
date:""

})

const [image,setImage] =
useState(null)

const [list,setList] =
useState([])

const [preview,setPreview] = useState("")

const change = (e) => {

setData({
...data,
[e.target.name]:
e.target.value
})

}

const getBull =
async () => {

const res =
await axios.get(
"http://localhost:5000/bull/all"
)

setList(res.data)

}

useEffect(() => {
getBull()
}, [])

const submit =
async (e) => {

e.preventDefault()

const form =
new FormData()

form.append(
"bullname",
data.bullname
)

form.append(
"owner",
data.owner
)

form.append(
"phone",
data.phone
)

form.append(
"village",
data.village
)

form.append(
"district",
data.district
)

form.append(
"age",
data.age
)

form.append(
"breed",
data.breed
)

form.append(
"festival",
data.festival
)

form.append(
"date",
data.date
)

if(image){

form.append(
"image",
image
)

}

await axios.post(
"http://localhost:5000/bull/add",
form
)

alert(
"Bull Registered"
)

getBull()

}

return (

<div className="bullpage">

<div className="hero">

<div className="herooverlay">

<h1>
🐂 அகில இந்திய
மாபெரும்
எருது விடும்
திருவிழா
</h1>

<p>
தமிழ்நாட்டின்
பாரம்பரிய
எருது பதிவு மையம்
</p>

</div>

</div>

<div className="formsection">

<form
className="formbox"
onSubmit={submit}
>

<h2>
Bull Registration
</h2>

<div className="formgrid">

<input
name="bullname"
onChange={change}
type="text"
placeholder="🐂 Bull Name"
className="input"
/>

<input
name="owner"
onChange={change}
type="text"
placeholder="👤 Owner Name"
className="input"
/>

<input
name="phone"
onChange={change}
type="text"
placeholder="📞 Mobile Number"
className="input"
/>

<input
name="village"
onChange={change}
type="text"
placeholder="🏡 Village"
className="input"
/>

<input
name="district"
onChange={change}
type="text"
placeholder="📍 District"
className="input"
/>

<input
name="age"
onChange={change}
type="number"
placeholder="🎂 Bull Age"
className="input"
/>

<input
name="breed"
onChange={change}
type="text"
placeholder="🐃 Breed"
className="input"
/>

<input
name="festival"
onChange={change}
type="text"
placeholder="🎉 Festival"
className="input"
/>

<input
name="date"
onChange={change}
type="date"
className="input"
/>

<input
type="file"
className="input"
onChange={(e)=>
setImage(
e.target.files[0]
)
}
/><input
type="file"
className="input"
onChange={(e)=>{
setImage(e.target.files[0])
setPreview(URL.createObjectURL(e.target.files[0]))
}}
/>

{preview && (
<img
src={preview}
className="preview"
/>
)}
</div>

<button className="savebtn">
Save Registration
</button>

</form>

</div>

<div className="listbox">

<h1 className="listtitle">
Registered Bulls
</h1>

<div className="bullgrid">

{list.map((item)=>(

<div
className="bullcard"
key={item._id}
>

<img
src={`http://localhost:5000/upload/${item.image}`}
className="bullimg"
/>

<h2>
{item.bullname}
</h2>

<p>
👤 {item.owner}
</p>

<p>
🏡 {item.village}
</p>

<p>
🐃 {item.breed}
</p>

<p>
🎉 {item.festival}
</p>

</div>

))}

</div>

</div>

</div>

)

}

export default Bull