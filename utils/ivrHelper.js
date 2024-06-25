const axios = require('axios');

const PostIVR = async (formData) => {
    const config = {
        method: 'post',
        url: 'https://www.zohoapis.in/crm/v2/Calls',
        headers: {
            'Authorization': `Zoho-oauthtoken ${ZOHO_CRM_ACCESS_TOKEN}`,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(formData)
    };

    try {
        return await axios(config);
    } catch (error) {
        console.log('Error in POSTIVR function:', error);
        throw error;
    }
};

exports.postCall = async (newOrder) => {
    console.log("New order: ", newOrder);
    // try {
    //     const formData = {
    //         campaign_name: 'Hindi',
    //         api_key: 'KK685ccc9be2075dbf2fcea4ccff857447',
    //         PhoneNumber: 9302203071,
    //         action: 'START'
    //     };
    //     const response = await PostIVR(formData);
    //     console.log('IVR initiate successfully:', response.data);
    // } catch (e) {
    //     console.log('Error posting IVR:', error.response ? error.response.data : error);
    // }
}