import React from 'react' 
import { connect } from 'react-redux'
import {deleteTransaction} from '../actions/deleteTransaction'

const depositOrWithdraw = (kind) => {
    if (kind)
      return "deposit"
    else
      return "withdraw"
    }

const Transactions = (props) => {
   
    const handleDelete = (transaction) => {
    
        props.deleteTransaction(transaction.id, transaction.account_id)
    }
    return (
        <div>
            {props.transactions && props.transactions.map(transaction => 
                <li key={transaction.id}>{transaction.amount} - {depositOrWithdraw(transaction.kind)} - {transaction.date} 
                <button onClick={() => handleDelete(transaction)}>Delete</button>
                </li>
                )}
        </div>
    )
}

export default connect(null, {deleteTransaction})(Transactions)