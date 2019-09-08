import React, { Component } from 'react'

export default class Lily extends Component {
    constructor(props){
        super(props);
        this.state={
            users:props.users,
            city:''
        }
    }

    changeCity =(e) => {
        this.setState({city: e.target.value} )
    }



    render() {
        return (
            <div>
                <div>city: <input type='text' onChange={this.changeCity}/></div>
                <button onClick={this.addUser}>search</button>
            </div>
        )
    }
}
