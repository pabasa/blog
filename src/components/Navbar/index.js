import React, {useState} from 'react'
import './style.css';
import {NavLink} from "react-router-dom";


/**
 * @author
 * @function Navbar
 **/

const Navbar = (props) => {

    const [search, setSearch] = useState(false);

    const openSearch = () => {
        setSearch(true);
    }

    const searchClass = search ?'searchInput active':'searchInput';

    const submitSearch = (e) => {
        e.preventDefault();
        //alert('working');
    }

    return(
        <div className="navbar">
           <ul className="navbarMenu">
               <li><NavLink to="/">Home</NavLink> </li>
               <li><NavLink to="/about-us">About Us</NavLink> </li>
               <li><NavLink to="/post">Posts</NavLink> </li>
               <li><NavLink to="/contact-us">Contact Us</NavLink> </li>
           </ul>
            <div className="search">
                <form onSubmit={submitSearch}>
                    <input type="text" placeholder="Search" className={searchClass}/>
                    <img onClick={openSearch} className="searchIcon" src={require('../../assets/icons/search.png')} alt="Search"/>
                </form>
            </div>
        </div>
    )
}
export default Navbar
