import React from 'react'
import {connect} from 'react-redux'
import {addAccount} from '../actions/addAccount'

class AccountInput extends React.Component {
state = {name: '', balance: ''}

handleChange = (event) => {
    debugger
    this.setState({
        [event.target.name]: event.target.value,
    });
}
handleSubmit = (event) => {
    event.preventDefault()
    this.props.addAccount(this.state)
}

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Account Name</label>
                    <input type ='text'placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/>
                    <label>Balance</label>
                    <input type ='text' placeholder='Balance' name="balance" value={this.state.balance} onChange={this.handleChange}/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}
export default connect(null, {addAccount})(AccountInput)