const { postCall } = require('../utils/ivrHelper')
exports.postCallToCustomer = async (req, res) => {
    try {
        const newOrder = req.body;
        await postCall(newOrder);
        return res.status(200).send('Call Posted Successfully');
    } catch (error) {
        console.log('Error processing webhook request:', error);
        return res.status(500).send('Error processing webhook request');
    }
}