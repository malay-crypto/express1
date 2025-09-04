import {useDispatch, useSelector} from "react-redux";
import {setPathNameToGo, setToken} from "./slice.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

let Logout=()=>{

    let dispatch=useDispatch()
    let state=     useSelector(state=>state)
     let navigate= useNavigate()

    useEffect(()=>{

        localStorage.removeItem("token")
        localStorage.removeItem("username")
        dispatch(setToken(''))
        dispatch(setPathNameToGo(''))
        navigate("/")



    },[])





}
export default Logout