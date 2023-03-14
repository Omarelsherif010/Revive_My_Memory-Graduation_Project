import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'

export default class Masterlayout extends Component {
  render() {
    return (
<>
<Navbar/>

<Outlet>

<Home/> {/* content will be changed */}

</Outlet>

<Footer/>
</>
    )
  }
}
