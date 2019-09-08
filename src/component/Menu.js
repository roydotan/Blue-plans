import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Header.js';
import Navigator from './Navigator.js';
import Home from './Home.js';
import Register from './Register.js';
import Lily from './Lily.js';

export default class Menu extends Component {

    constructor(props){
        super(props);
        this.state={
            users:[]
        }
    }
    
    
    componentWillMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data=>{
            this.setState({
                users:data
            })
        })
    }

    addUser = (name,age,address,password,img,postArr)=>{
        this.setState({
            users:[...this.state.users,{name:name,age:age,address:address,password:password,img:img,postArr:postArr }]
        });
    }


    render() {
        return (
            <div>
                <Router>
                    <Header/>
                    <Navigator/>
                    <Switch>
                    <Route exact path='/Register' render={(props) => <Register add={this.addUser}/>}/>  
                    <Route exact path='/Home' render={(props) => <Home {...props} users={this.state.users} />} />
                    <Route exact path='/Lily' render={(props) => <Lily {...props} users={this.state.users} />} />
                        
                       

                    </Switch>
                </Router>
            </div>
        )
    }
}
