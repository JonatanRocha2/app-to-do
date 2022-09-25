function setToken(token){
    localStorage.setItem('token', token)
}

function getToken(token){
    localStorage.getItem('token')
}

function deleteToken(token){
    localStorage.removeItem('token')
}

export { setToken, getToken, deleteToken }