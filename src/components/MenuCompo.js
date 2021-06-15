import React from 'react'
import {Route,Link,Switch,BrowserRouter as Router, NavLink, withRouter} from 'react-router-dom'

function MenuCompo() {
    return (
        <div className="menu-container">
            <div className="menu-items">
                <span className="item active"><Link to="/home" style={{textDecoration:"none"}}>Home</Link></span>
                <span className="item"><Link to="/child-gallery" style={{textDecoration:"none"}}>Child Gallery</Link></span>
                <span className="item"><Link to="/stratagy" style={{textDecoration:"none"}}>Approach Strategy</Link></span>
                <span className="item"><Link to="/programs" style={{textDecoration:"none"}}>Programs</Link></span>
                <span className="item"><Link to="/froendsOdf" style={{textDecoration:"none"}}>Friends of ODF</Link></span>
                <span className="item"><Link to="/sponsorship" style={{textDecoration:"none"}}>Sponsorship Donation</Link></span>
                <span className="item"><Link to="/photo-gallery" style={{textDecoration:"none"}}>Photo Gallery</Link></span>
                <span className="item"><Link to="/news" style={{textDecoration:"none"}}>News Letter</Link></span>
                <span className="item"><Link to="/feedback" style={{textDecoration:"none"}}>Feedback</Link></span>
                <span className="item"><Link to="/contact" style={{textDecoration:"none"}}>Contact Us</Link></span>
                <span className="item"><Link to="/login" style={{textDecoration:"none"}}>Login</Link></span>   
            </div>
        </div>
    )
}

export default withRouter(MenuCompo)
