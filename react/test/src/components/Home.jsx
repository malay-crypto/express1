import {useEffect, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts, setSearchedRecords} from "./slice.jsx";
import {Button, Card} from "react-bootstrap";
import {Form} from "react-bootstrap";

let Home=()=>{




            let dispatch=useDispatch()
               let state=     useSelector(state=>state)



    useEffect(()=>{

            dispatch(fetchProducts())

    },[])




    return (

        <>




            <div className="container" >
                <div className="row">


                    {


                        state.searchedRecords.map(   (record) =>


                                    <div className="col-lg-4" style={{display:'flex', justifyContent:'space-between'}}>
                                        <Card style={{width: '18rem' , marginBottom: '2rem'}}>
                                            <Card.Img variant="top" src="holder.js/100px180"/>
                                            <Card.Body>
                                                <Card.Title>{record.name}</Card.Title>
                                                <Card.Text>{record.category}  </Card.Text>
                                                <Card.Text>  {record.price}  </Card.Text>
                                                <Button variant="primary">Add to Cart</Button>
                                            </Card.Body>
                                        </Card>

                                    </div>


                        )

                    }



                </div>
            </div>





        </>


    )


}
export default Home