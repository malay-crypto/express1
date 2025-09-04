import {AppBar, Box, IconButton, Toolbar, Typography} from "@mui/material";
import {Button} from "react-bootstrap";
import MenuIcon from "@mui/icons-material/Menu";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";


let TopMenuBar=()=>{


    let [username,setUsername]=useState(null);
    let dispatch=useDispatch()
    let state=     useSelector(state=>state)




    return(



        <>


            <Box sx={{ flexGrow: 1 ,marginBottom:'20px'}}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                E-Commerce App
                            </Typography>
                           <Box sx={{ display:'flex',gap:'20px' }}>
                               {state.token? 'Hello : '+localStorage.getItem("username"):''}

                               {state.token?
                                   <Link to={ '/logout' } style={{color:'white',textDecoration:'none'}}> Logout</Link> :
                                   <Link to={ '/login' } style={{color:'white',textDecoration:'none'}}> Login</Link>
                               }


                               <Link to={'/'} style={{color:'white',textDecoration:'none'}}>Home</Link>
                               <Link to={'/add'} style={{color:'white',textDecoration:'none'}}>Add Product</Link>

                           </Box>


                        </Toolbar>
                    </AppBar>
        </Box>





</>




    )






}

export default TopMenuBar;