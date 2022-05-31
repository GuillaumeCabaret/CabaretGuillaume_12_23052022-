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

/**
 * Gets user activity from the API
 *
 * @param {string} id User id
 * @returns {object} Response
 */
 async function getActivity(id) {
    let userActivity = await fetch(`http://localhost:3000/user/${id}/activity`)
        .then(response => response.json())
        .then(responseData => { return responseData.data })
    return userActivity;
}

export { getData, getActivity }