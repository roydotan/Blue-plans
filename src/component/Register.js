import React, { Component } from 'react';
import img1 from './Images/defphoto.jpeg';


export default class Register extends Component {
    
    constructor(props){
        super(props);
        this.state={
            name:'',
            age:'',
            address:'',
            password:'',
            img: img1,
            postArr: ['This is my first post','This is my second post']
        }
    }

    changeName =(e) => {
        this.setState({name: e.target.value , age: this.state.age, address: this.state.address, password:this.state.password, img:this.state.img,postArr:this.state.postArr} )
    }
    
    changeAge = (e) => {
        this.setState({name: this.state.name, age: e.target.value, address: this.state.address, password:this.state.password, img:this.state.img, postArr:this.state.postArr})
    }

    changeAddress = (e) => {
        this.setState({name: this.state.name, age: this.state.age, address: e.target.value, password:this.state.password, img:this.state.img, postArr:this.state.postArr})
    }

    changePassword = (e) => {
        this.setState({name: this.state.name, age: this.state.age, address: this.state.age, password:e.target.value, img:this.state.img, postArr:this.state.postArr})
    }

    addUser = () => {
        this.props.add(this.state.name, this.state.age, this.state.address, this.state.password, this.state.img, this.state.postArr)
    }


    
    render() {
        return (
            <div>
                <div>Name: <input type='text' onChange={this.changeName}/></div>
                <div>Age: <input type='number' onChange={this.changeAge}/></div>
                <div>Address: <input type='text' onChange={this.changeAddress}/></div>
                <div>Password: <input type='password' onChange={this.changePassword}/></div>
                <button onClick={this.addUser}>Add User</button>
            </div>
        )
    }
}
