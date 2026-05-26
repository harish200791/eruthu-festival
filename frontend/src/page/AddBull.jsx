import { useState } from "react"
import axios from "axios"

function AddBull() {

const [data,setData] = useState({
bullname:"",
owner:"",
age:"",
breed:"",
color:""
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
"https://eruthu-backend.onrender.com/bull/add",
data
)

alert(res.data.msg)

}

return (

<div style={{
padding:"40px"
}}>

<h1>Add Bull</h1>

<form onSubmit={submit}>

<input
type="text"
name="bullname"
placeholder="Bull Name"
onChange={change}
/>

<br /><br />

<input
type="text"
name="owner"
placeholder="Owner"
onChange={change}
/>

<br /><br />

<input
type="text"
name="age"
placeholder="Age"
onChange={change}
/>

<br /><br />

<input
type="text"
name="breed"
placeholder="Breed"
onChange={change}
/>

<br /><br />

<input
type="text"
name="color"
placeholder="Color"
onChange={change}
/>

<br /><br />

<button>
Add Bull
</button>

</form>

</div>

)

}

export default AddBull