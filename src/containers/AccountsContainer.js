import React from 'react'
import {connect} from 'react-redux'

import {fetchAccounts} from '../actions/fetchAccounts'
import Accounts from '../components/Accounts'
import AccountInput from '../components/AccountInput'
import {Route} from 'react-router-dom'
class AccountsContainer extends React.Component {
    
    
    componentDidMount() {
        this.props.fetchAccounts()
    }
    render() {
        return (
            <div>
                <Route path='/accounts/new' component={AccountInput}/>
                <Route exact path='/accounts' render={() => <Accounts accounts={this.props.accounts} />} />
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