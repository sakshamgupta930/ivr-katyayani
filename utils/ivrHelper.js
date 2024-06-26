const axios = require('axios');

const stateLanguageMap = {
    'Arunachal Pradesh': 'Hindi',
    'Assam': 'Hindi',
    'Bihar': 'Hindi',
    'Chhattisgarh': 'Hindi',
    'Goa': 'Hindi',
    'Gujarat': 'Hindi',
    'Haryana': 'Hindi',
    'Himachal': 'Hindi',
    'Jammu & Kashmir': 'Hindi',
    'Jharkhand': 'Hindi',
    'Karnataka': 'Kannada',
    'Kerala': 'Malayalam',
    'Madhya Pradesh': 'Hindi',
    'Maharashtra': 'Marathi',
    'Manipur': 'Hindi',
    'Meghalaya': 'Hindi',
    'Mizoram': 'Hindi',
    'Nagaland': 'Hindi',
    'Odisha': 'Odia',
    'Punjab': 'Hindi',
    'Rajasthan': 'Hindi',
    'Sikkim': 'Hindi',
    'Tamil Nadu': 'Tamil',
    'Telangana': 'Telugu',
    'Tripura': 'Hindi',
    'Uttar Pradesh': 'Hindi',
    'Uttarakhand': 'Hindi',
    'West Bengal': 'Bengali'
};

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
    //     const state = newOrder.state;
    //     const campaignName = stateLanguageMap[state];
    //     if (!campaignName) {
    //         console.log("");
    //     }
    //     const formData = {
    //         campaign_name: campaignName,
    //         api_key: 'KK685ccc9be2075dbf2fcea4ccff857447',
    //         PhoneNumber: 9302203071,
    //         action: 'START'
    //     };
    //     const response = await PostIVR(formData);
    //     console.log('IVR initiate successfully:', response.data);
    // } catch (e) {
    // console.log('Error posting IVR:', error.response ? error.response.data : error);
    // }
}