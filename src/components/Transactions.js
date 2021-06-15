import React from 'react' 

const depositOrWithdraw = (kind) => {
    if (kind)
      return "deposit"
    else
      return "withdraw"
    }

const Transactions = (props) => {
    
    return (
        <div>
            {props.transactions && props.transactions.map(transaction => 
                <li key={transaction.id}>{transaction.amount} - {depositOrWithdraw(transaction.kind)} - {transaction.date}</li>
                )}
        </div>
    )
}

export default Transactions