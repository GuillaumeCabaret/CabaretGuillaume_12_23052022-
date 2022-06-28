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

/**
 * Gets user average sessions from the API
 *
 * @param {string} id User id
 * @returns {object} Response
 */
 async function getAverageSession(id) {
    let userAverage = await fetch(`http://localhost:3000/user/${id}/average-sessions`)
        .then(response => response.json())
        .then(responseData => { return responseData.data })
    return userAverage;
}

/**
 * Gets user performance from the API
 *
 * @param {string} id User id
 * @returns {object} Response
 */
 async function getPerformance(id) {
    let userPerformance = await fetch(`http://localhost:3000/user/${id}/performance`)
        .then(response => response.json())
        .then(responseData => {
            return responseData.data.data
        })
       
    return userPerformance;
}

export {getActivity, getAverageSession, getData, getPerformance }