import React from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'

function App() {
  const toggle1 = () => {
    const navbar = document.querySelector(".navbar");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    navbar.classList.add("show");
    menuBtn.classList.add("hide");
    cancelBtn.onclick = () => {
      navbar.classList.remove("show");
      menuBtn.classList.remove("hide");
    }

  }
  return (
    <div>
      <Navbar toggle={toggle1} />
    </div>

  )
}

export default App
