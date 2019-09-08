import React, { Component } from 'react'

export default class User extends Component {
    name;
    age;
    address;
    password;
    img;
    postArr;
    constructor(props,name, age, address, password, img, postArr){
        super(props)
        this.name = name;
        this.age=age;
        this.address=address;
        this.password=password;
        this.img=img;
        this.postArr=postArr;
    }
    addApost =(post)=>{
        this.setState({
            postArr:[...this.state.postArr,{post}]
        });
    }
   
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
