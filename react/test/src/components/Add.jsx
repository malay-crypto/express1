import {Button, Card, Form} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setPathNameToGo} from "./slice.jsx";


let Add=()=>{

let [obj,setObj]=useState({name:'',category:'',price:''});
  let navigate= useNavigate()
    let dispatch=useDispatch()
    let state=     useSelector(state=>state)

    let addClick=async ()=>{

       await axios.post('https://express1-web-service.onrender.com/add',obj)
        toast.success('record added successfully')
    }


    useEffect(() => {

            let t=localStorage.getItem('token')
        if(!t)
        {
            dispatch(setPathNameToGo('/add'))
            navigate('/login')
        }
        else
            dispatch(setPathNameToGo(''))

    },[])


    return (

        <>


            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src="holder.js/100px180"/>
                <Card.Body>

                    <Card.Text> Add New Product </Card.Text>

                    <Form.Group className="mb-3" >

                        <Form.Control type="text" value={obj.name} placeholder="enter name" onChange={(e)=>setObj({...obj,name:e.target.value})} />
                    </Form.Group>

                    <Form.Group className="mb-3" >

                        <Form.Control type="text" value={obj.category} placeholder="enter category" onChange={(e)=>setObj({...obj,category:e.target.value})} />
                    </Form.Group>

                    <Form.Group className="mb-3" >

                        <Form.Control type="text" value={obj.price} placeholder="enter price" onChange={(e)=>setObj({...obj,price:e.target.value})} />
                    </Form.Group>

                    <Button variant="primary" onClick={addClick}>Add</Button>


                </Card.Body>
            </Card>




        </>


    )


}

export default Add