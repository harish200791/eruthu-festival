import {
BrowserRouter,
Routes,
Route
} from "react-router-dom"
import Register from "./pages/Register"
import Login from "./page/login.jsx"
import Reg from "./page/reg.jsx"
import Dash from "./page/dash.jsx"
import Bull from "./page/bull.jsx"
import Admin from "./page/admin.jsx"
import Team from "./page/team.jsx"
import Place from "./page/place.jsx"
import Pay from "./page/pay.jsx"
import About from "./page/about.jsx"
import Gallery from "./page/gallery.jsx"
import Profile from "./page/profile.jsx"
import AddBull from "./page/AddBull"
function App(){
return(
<BrowserRouter>
<Routes>

<Route path="/" element={<Register />} />
<Route path="/login" element={<Login />} />
<Route path="/reg" element={<Reg />} />
<Route path="/dash" element={<Dash />} />
<Route path="/bull" element={<Bull />} />
<Route path="/admin" element={<Admin />} />
<Route path="/team" element={<Team />} />
<Route path="/place" element={<Place />} />
<Route path="/pay" element={<Pay />} />
<Route path="/about" element={<About />} />
<Route path="/gallery" element={<Gallery />} />
<Route path="/profile" element={<Profile />} />
<Route path="/add" element={<AddBull />} />
</Routes>
</BrowserRouter>
)
}

export default App