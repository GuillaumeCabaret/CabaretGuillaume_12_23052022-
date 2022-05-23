/**
 * Gets user infos from the API
 *
 * @param {string} id User id
 * @returns {object} Response
 */
 async function getData(id) {
    
    let userData =  await fetch(`http://localhost:3000/user/${id}`)
        .then(response => response.json())
        .then(responseData => { return responseData.data })
    return userData;
}

export { getData }