const axios = require('axios');

module.exports.authMiddleware = async (req, res, next) => {
    // calling localhost to trigger the endpoint in same route
    await axios.get('http://localhost:8080/aisearch', {
        headers: {cookie: req.headers.cookie}
    }).then(response => {
        if (response?.data && response?.data?.user) {
            const { userEmail, tenantId } = response?.data?.user;
            const stringMatch = [tenantId, userEmail];

            // Check if the search request is being made for the same tenant and fecht user data for the logged-in user
            if (req.originalUrl.indexOf(tenantId) !== -1 || (stringMatch.every(str => req.originalUrl.includes(str)))) {
                return next ();
            } else {
                return res.status(403).send({message: 'forbidden'})
            }
        } else {
            return res.status(403).send({message: 'forbidden'})
        }
    }).catch(function (error) {
        // handle error
        console.log(error);
        return res.status(403).send({message: 'forbidden'})
    })
}