import React from 'react'
//import { Redirect } from 'react-router-dom'
import TransactionContainer from '../containers/TransactionContainer'

const Account = (props) => {
 
 let account = props.accounts.find(account => account.id == props.match.params.id)

    return (
        <div>
            <h3>
                {account ? account.name : null} - {account ? account.balance : null}
            </h3>
            <TransactionContainer account={account}/>
        </div>
    )
}

export default Account