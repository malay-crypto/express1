import {useEffect, useState} from "react";
import {setSearchedRecords} from "./slice.jsx";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {Form} from "react-bootstrap";

let Search=()=>{

    let [productName,setProductName]=useState("");
    let [mobile,setMobile]=useState(false);
    let[ clothing, setClothing]=useState(false);
    let [electronics, setElectronics]=useState(false);

    let dispatch=useDispatch()
    let state=     useSelector(state=>state)

    useEffect(()=>{

        let getProducts=async ()=>{

            let queryObj={}
            let category=[]

            dispatch(setSearchedRecords(state.allRecords))
            if(productName.trim()){
                queryObj["pname"]=productName

            }

            if(mobile)category.push('mob');
            if(clothing)category.push('clothing');
            if(electronics)category.push('electronics');

            if(category.length > 0){
                queryObj["cat"]=category
            }


            let r=await axios.get("https://express1-web-service.onrender.com/search",{params:queryObj})
            dispatch(setSearchedRecords(r.data))


        }

        getProducts()


    },[productName,mobile,electronics,clothing])


    return (


        <>

                <div style={{display:'flex',flexDirection:'column'}}>

                    <Form.Group className="mb-3" >

                        <Form.Control type="text" placeholder="product name" value={productName} onChange={(e)=>setProductName(e.target.value)} />
                    </Form.Group>

                    <div style={{display:'flex', flexDirection:'column'}}>
                        mobile<Form.Check value={mobile} onChange={(e)=>setMobile(e.target.checked)} />
                        electronics<Form.Check value={electronics} onChange={(e)=>setElectronics(e.target.checked)} />
                        clothing<Form.Check value={clothing} onChange={(e)=>setClothing(e.target.checked)} />
                    </div>




                </div>





        </>





    )



}

export default Search