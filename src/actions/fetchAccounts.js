

export function fetchAccounts() {
    fetch('http://localhost:3000/api/v1/accounts')
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}
