import React from 'react'
import logo from "../images/logo.svg"
import {FaAlignRight} from "react-icons/fa"
import { Link } from 'react-router-dom'
export default class Navbar extends React.Component {
    state={
        isOpen:false,
    }
    handleToggle=()=>{
    this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (
         <nav className="navbar">
<div className="nav-center">
<div className="nav-header">
<Link to="/">
    <img src={logo} alt="logo" />
</Link>
<button className="nav-btn" type="button" onClick={this.handleToggle}>
    <FaAlignRight className="nav-icon"  />
</button>
<ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
    <Link to="/"  >
        Home
    </Link>
    <Link to="/rooms"  >
        Rooms
    </Link>
</ul>
</div>
</div>
         </nav>
        )
    }
}
