import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import style from './Navigator.module.css';


export default class Navigator extends Component {
    render() {
        return (
            <div className={style.navigator}>
                <div><Link to="/Home" > home </Link></div>
                <div><Link to="/Myaccount" className={style.navLink}>My account</Link></div>
                <div><Link to="/Update">Update</Link></div>
                <div><Link to="/Log out">Log out</Link></div>
                <div><Link to="/Register">Register</Link></div>
                <div><Link to="/Lily">Lily</Link></div>
            </div>
        )
    }
}
