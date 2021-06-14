import React from 'react'
import {Route} from 'react-router-dom'
import Account from './Account'

const Accounts = (props) => {
    
    
    return (
        <div>
            {props.accounts.map(account => 
            <div key={account.id}>
                
                </div>
                )
            }
            <Route path='/account/:id' render={() => <Account account={account} />} />
        </div>
    );
}

export default Accounts;
