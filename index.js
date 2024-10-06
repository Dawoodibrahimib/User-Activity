const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3500;
const token = "" // Your Token Here
const username = 'torvalds';

app.listen(PORT,() =>
{
    console.log("Server Running on Port");
})


const getGithubActivity = async () =>
{
    try {
        const response = await axios.get(`https://api.github.com/users/${username}/events`,
            {
                headers:
                {
                      'Authorization': `token ${token}`
                }
            }
        );

        console.log(response.data)
        
    } catch (error) {
        console.error('Error fetching GitHub events:', error);
    }
};

getGithubActivity();