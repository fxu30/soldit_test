import React from 'react'
import {Link} from "react-router-dom";

// Reusable components on 3 different senerios.
/* Usage:
   1. props.isSeller = true; Seller profile page visited by other users.
   2. props.isAdmin = ture; Admin dashboard sidebar.
   3. otherwise. User account sidebar.
*/ 
const AccoutSideBar = (props) => {
    const isSeller = props.isSeller
    const isAdmin = props.isAdmin
    if (isAdmin){
        return (
            <div className="sidebar flex-col-hcenter-vstart">
                <p className="sidebar__header">Feiye Chen</p>
                <Link className="sidebar__navlink" to="/">All Ads</Link>
                <Link className="sidebar__navlink" to="/">All users</Link>
                <Link className="sidebar__navlink" to="/">Log out</Link>
            </div>
        )
    }else if (isSeller){
        return (
            <div className="sidebar flex-col-hcenter-vstart">
                <p className="sidebar__header">Feiye Chen</p>
                <Link className="sidebar__navlink" to="/">Ads</Link>
                <Link className="sidebar__navlink" to="/">Reviews</Link>
            </div>
        )
    }else{
        return (
            <div className="sidebar flex-col-hcenter-vstart">
                <p className="sidebar__header">Feiye Chen</p>
                <Link className="sidebar__navlink" to="/">Ads</Link>
                <Link className="sidebar__navlink" to="/">Favourites</Link>
                <Link className="sidebar__navlink" to="/">Pending purchase</Link>
                <Link className="sidebar__navlink" to="/">Reviews</Link>
                <Link className="sidebar__navlink" to="/Pendingreview">Pending reviews</Link>
                <Link className="sidebar__navlink" to="/">Account settings</Link>
                <Link className="sidebar__navlink" to="/">Log out</Link>
            </div>
        )
    }
  
}

export default AccoutSideBar