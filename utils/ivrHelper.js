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
        url: 'https://in-ccaas.ozonetel.com/cloudAgentRestAPI/index.php/CloudAgent/CloudAgentAPI/addCamapaignData',
        data: formDataObject,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    };

    try {
        return await axios(config);
    } catch (error) {
        console.log('Error in POSTIVR function:', error);
    }
};

const getStateByZipcode = async (zipcode) => {
    try {
        const response = await axios.get(`https://api.postalpincode.in/pincode/${zipcode}`);
        return response.data[0].PostOffice[0].State;
    } catch (error) {
        console.log('Error getting state: zipcode ', zipcode);
        return 'Madhya Pradesh'
    }
}

exports.postCall = async (newOrder) => {
    console.log("New order: ", newOrder);
    try {
        const state = await getStateByZipcode(newOrder.shipping_address.zip);
        const campaignName = stateLanguageMap[state];
        if (!campaignName) {
            console.log("Campaign by State not exists");
        }
        console.log(state);
        console.log(campaignName);
        const formData = {
            PhoneNumber: newOrder.shipping_address.name,
            campaign_name: campaignName,
            amount: newOrder.current_total_price,
            api_key: 'KK685ccc9be2075dbf2fcea4ccff857447',
            action: 'START'
        };
        const response = await PostIVR(formData);
        console.log('IVR initiate successfully:', response.data);
    } catch (e) {
        console.log('Error posting IVR:', error.response ? error.response.data : error);
    }
}