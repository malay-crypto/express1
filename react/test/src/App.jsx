import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./components/Home.jsx";
import Add from "./components/Add.jsx";
import {ToastContainer} from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css'
import RegisterForm from "./components/RegisterForm.jsx";
import LoginForm from "./components/LoginForm.jsx";
import Logout from "./components/Logout.jsx";
import {Routes,Route} from "react-router-dom";
import Search from "./components/Search.jsx";
import TopMenuBar from "./components/TopMenuBar.jsx";


function App() {


  return (
    <>
      <ToastContainer/>



    <TopMenuBar/>
      <div style={{display:'flex', justifyContent:'space-between',gap:'40px'}}>

                      <div>
                        <Search/>

                      </div>



                      <div>
                                <Routes>

                                  <Route path={'/'} element={<Home/>}/>
                                  <Route path={'/add'} element={  <Add/>}/>
                                  <Route path={'/login'} element={   <LoginForm/>}/>
                                    <Route path={'/logout'} element={   <Logout/>}/>
                                  <Route path={'/add'} element={  <RegisterForm/>}/>


                                </Routes>
                      </div>

      </div>










    </>
  )
}

export default App
