import React from 'react'
import { Redirect } from 'react-router-dom'
const Account = (props) => {
 
 let account = props.accounts.find(account => account.id == props.match.params.id)

    return (
        <li>
            {account ? account.name : null} - {account ? account.balance : null}
        </li>
    )
}

export default Account