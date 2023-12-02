
const PORT = 8000

const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const API_KEY = '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'


app.post('/completions', async(req, res) => {

    console.log(req.body.message)
    const options= {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: req.body.message}],
            max_tokens: 350,
        })
    }
    try{
        console.log('im here')
        const response = await fetch('https://api.openai.com/v1/chat/completions', options) 
        const data = await response.json()  
        const data2 = {
            "message":"this is a local response",
            "user": "maham"
        }
        res.send(data)
    } catch(error){
        console.error(error)
    }
})
app.listen(PORT, () => console.log('Your server is running on Port and wowza ' + PORT))

