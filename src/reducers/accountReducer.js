//import { fetchAccounts } from "../actions/fetchAccounts";

export default function accountReducer(state = {accounts: []}, action) {
    switch (action.type) {
        case 'FETCH_ACCOUNTS':
            return {accounts: action.payload}
        case 'ADD_ACCOUNT':
            return {...state, accounts: [...state.accounts, action.payload]}
        case 'ADD_TRANSACTION':
            let accounts = state.accounts.map(account => {
                if (account.id === action.payload.id) {
                    return action.payload
                } else {
                    return account
                }
            })
            return {...state, accounts: accounts}
        case 'DELETE_TRANSACTION':
            let accountsD = state.accounts.map(account => {
                if (account.id === action.payload.id) {
                    return action.payload
                } else {
                    return account
                }
            })
            return {...state, accounts: accountsD}
        default:
            return state
        }
}

