function setToken(token){
    localStorage.setItem('token', token)
}

function getToken(token){
    localStorage.getItem('token', token)
}

function deleteToken(token){
    localStorage.removeItem('token', token)
}

export { setToken, getToken, deleteToken }