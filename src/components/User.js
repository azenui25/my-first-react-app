import React, { Component } from "react"


class User extends Component{
    state = {
        present: false
    }

    handleClick=() =>{
        this.setState({present: !this.state.present})
    }

    render(){
        console.log("State", this.state, "PROPS:", this.props)

    return( <div>
        <h3> User: <b>{this.props.userName} </b> </h3>
        <p>{this.state.present ? 'Excited' : 'Bored'}</p>
        <button onClick={this.handleClick}>Excite me!</button>
        
    </div>
    )
}
}

export default User