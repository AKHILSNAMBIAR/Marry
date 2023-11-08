import Login from "./Marriage/Login";
import Register from "./Marriage/Register"
import {BrowserRouter,Routes,Route} from  "react-router-dom"
import Home from "./Marriage/Home"
import Edit from "./Marriage/Edit"
import Main from "./Marriage/Main"
import Profile from "./Marriage/Profile"
import Search from "./Marriage/Search"
import Chat from "./Marriage/Chat"
const App=()=>{
    return(
       <div>
        <BrowserRouter>
        <Routes> 
            <Route element={<Main/>} path="/main"></Route>  
            <Route element={<Login/>} path="/login"></Route>
            <Route element={<Register/>} path="/register"></Route>
            <Route element={<Home/>} path="/home/:_id">
                {/* <Route element={<Contactme/>} path="/home/contactme"></Route>
                <Route element={<Friends/>} path="/home/friends"></Route> */}
                <Route element={<Edit/>} path="/home/:_id/edit"/>
                <Route element={<Profile/>} path="/home/:_id/profile"/>
                <Route element={<Search/>} path="/home/:_id/search"/>
                <Route element={<Chat/>} path="/home/:_id/chat/:_bd"/>
            </Route>
        </Routes>
        </BrowserRouter>
       </div> 
    )
}
export default App