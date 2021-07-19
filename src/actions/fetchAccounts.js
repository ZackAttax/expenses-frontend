

export function fetchAccounts() {
    return (dispatch) => {
        fetch('http://localhost:3000/sessions')
        .then(resp => resp.json())
        .then(accounts => dispatch({
            type: 'FETCH_ACCOUNTS',
            payload: accounts
        }))
    }
}