import React from 'react'
import {connect} from 'react-redux'

import {fetchAccounts} from '../actions/fetchAccounts'
import Account from '../components/Account'
import Accounts from '../components/Accounts'
import AccountInput from '../components/AccountInput'
import {Route, Switch} from 'react-router-dom'
class AccountsContainer extends React.Component {
    
    
    componentDidMount() {
        this.props.fetchAccounts()
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/accounts/new' component={AccountInput}/>
                    <Route path='/accounts/:id' render={(routerProps) => <Account {...routerProps} accounts={this.props.accounts} />} />
                    <Route path='/accounts' render={(routerProps) => <Accounts {...routerProps} accounts={this.props.accounts} />} />
                </Switch>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        accounts: state.accounts
    }
}

export default connect(mapStateToProps, {fetchAccounts})(AccountsContainer);