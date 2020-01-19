const express = require('express')
const axios = require('axios');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 3001
const organizationID = 649249007;
const authToken = 'db36e02a50b57e081efe533a8a0f834b';

app.use(cors());
app.get('/', (req, res) => res.send('Hello'));
app.get('/contacts', (req, res) => {
    axios.get('https://books.zoho.com/api/v3/organizations?organization_id=' + organizationID, {
        headers: {
            Authorization: authToken
        }
    }).then(resp => res.json(resp.data));

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))