import {Button, Card, Form} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";

let RegisterForm=()=>{


    let [obj,setObj]=useState({username:"", password:""})



    let registerClick=async ()=>{

        await axios.post("/register",obj)
        toast.success("registration successful")

    }

    return (

        <>

            <Card style={{width: '18rem'}}>

                <Card.Body>

                    <Card.Text>Registration </Card.Text>

                    <Form.Group className="mb-3" >

                        <Form.Control type="text" value={obj.username} placeholder="enter user name" onChange={(e)=>setObj({...obj,username:e.target.value})} />
                    </Form.Group>

                    <Form.Group className="mb-3" >

                        <Form.Control type="text" value={obj.password} placeholder="enter password" onChange={(e)=>setObj({...obj,password:e.target.value})} />
                    </Form.Group>



                    <Button variant="primary" onClick={registerClick}>Register</Button>


                </Card.Body>
            </Card>




        </>



    )



}


export default RegisterForm