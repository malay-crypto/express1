import {Button, Card, Form} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {setToken} from "./slice.jsx";
import {useLocation, useNavigate} from "react-router-dom";

let LoginForm=()=>{


    let [obj,setObj]=useState({username:"", password:""})
     let navigate= useNavigate()
    let location= useLocation()

    let dispatch=useDispatch()
    let state=     useSelector(state=>state)


    useEffect(()=>{
        console.log(location.pathname)
    },[])

    let loginClick=async ()=>{

           let r= await axios.post("/login",obj)
        console.log(r)
        toast.success("Login successful")

        dispatch(setToken(r.data.token))
        localStorage.setItem("token",r.data.token)
        localStorage.setItem("username",r.data.username)

        setObj({username:"", password:""})

       if(!state.pathNameToGo)
           navigate("/")
        else
            navigate(state.pathNameToGo)


    }

    return (

        <>

            <Card style={{width: '18rem'}}>

                <Card.Body>

                    <Card.Text>Login </Card.Text>

                    <Form.Group className="mb-3" >

                        <Form.Control type="text" value={obj.username} placeholder="enter user name" onChange={(e)=>setObj({...obj,username:e.target.value})} />
                    </Form.Group>

                    <Form.Group className="mb-3" >

                        <Form.Control type="text" value={obj.password} placeholder="enter password" onChange={(e)=>setObj({...obj,password:e.target.value})} />
                    </Form.Group>



                    <Button variant="primary" onClick={loginClick}>Login</Button>


                </Card.Body>
            </Card>




        </>



    )



}


export default LoginForm