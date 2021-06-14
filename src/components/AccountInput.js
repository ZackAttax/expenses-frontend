import React from 'react'

class AccountInput extends React.Component {
state = {name: '', balance: ''}

handleChange = (event) => {
    debugger
    this.setState({
        [event.target.name]: event.target.value,
    });
}
handleSubmit = () => {
    debugger
    event.preventDefault
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
export default AccountInput