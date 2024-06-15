const express = require('express');
const axios = require('axios');
const ivr = require("./routes/ivr.js")

const app = express();
app.use(express.json);
app.use(express.urlencoded({ extended: true }));

app.use('/ivr', ivr);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});