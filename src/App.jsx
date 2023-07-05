import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header'
import Blogs from './component/Blogs/Blogs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
    {/* header part */}
    <Header></Header>
    {/* main body part */}
<Blogs></Blogs>
{/* React JS Toast */}
<ToastContainer />
    </>
  )
}

export default App
