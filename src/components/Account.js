import React from 'react'
//import { Redirect } from 'react-router-dom'
const Account = (props) => {
 
 let account = props.accounts.find(account => account.id == props.match.params.id)

    return (
        <h3>
            {account ? account.name : null} - {account ? account.balance : null}
        </h3>
    )
}

export default Account