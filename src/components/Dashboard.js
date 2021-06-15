import React from 'react'
import MenuCompo from './MenuCompo'
import image from '../asserts/banner.jpg'
import logo from '../asserts/logo.png'
import sidebar from '../asserts/sidebar-main.jpg'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import LoginCompo from './LoginCompo'
import ChildGallery from './ChildGallery'
import HomeCompo from './HomeCompo'
import ApproachStratagy from './ApproachStratagy'
import Programs from './Programs'
import FriendsOdf from './FriendsOdf'
import Sponsorship from './Sponsorship'
import PhotoGallery from './PhotoGallery'
import News from './News'
import feedback from './feedback'
import Contact from './Contact'

function Dashboard() {
    return (
        <>
            <div className="container ">
                <div className="header-container">
                    <div className="logo">
                        <img src={logo} />
                    </div>
                    <div className="banner">
                        <img src={image} />
                        <q>Helping people by charity is the most human thing we can do.</q>
                    </div>
                    <div className="img">
                        <p>Donate</p>
                    </div>
                </div>
                <div className="mian-container">
                    <div className="menu">
                        {/* <Router> */}
                        <MenuCompo />
                        {/* </Router> */}

                    </div>
                    <div className="content">
                        {/* <Router> */}
                        <Switch>
                            <Route exact path="/" component={HomeCompo} />
                            <Route path="/home" component={HomeCompo} />
                            <Route path="/child-gallery" component={ChildGallery} />
                            <Route path="/stratagy" component={ApproachStratagy} />
                            <Route path="/programs" component={Programs} />
                            <Route path="/froendsOdf" component={FriendsOdf} />
                            <Route path="/sponsorship" component={Sponsorship} />
                            <Route path="/photo-gallery" component={PhotoGallery} />
                            <Route path="/news" component={News} />
                            <Route path="/feedback" component={feedback} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/login" component={LoginCompo} />
                        </Switch>
                        {/* </Router> */}
                    </div>
                    <div className="sidebar">
                        <img className="sidebar-image" src={sidebar} />
                        <q>
                            <strong>The life of a man consists not in seeing visions and in dreaming dreams, but in active charity and in willing service.</strong>
                        </q>
                        <div className="sidebar-content">
                            <p>Remember your are creating the feature of our nation.</p>
                        </div>
                        <div className="sidebar-items">
                            <ul>
                                <li>Active members</li>
                                <li>Supporting members</li>
                                <li>Volunteers</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
