const express = require('express')
const app = express()
const PORT = 3000

const runners = {
    'shalane flanagan':{
        'age': 40,
        'distance': 'Marathon',
        'status': 'Retired'
    },
    'christo landry':{
        'age': 36,
        'distance': 'Half marathon',
        'status': 'Retired'
    },
    'unknown':{
        'age': 'Unkown',
        'distance': 'N/A',
        'status': 'N/A'
    }
}

app.get('/', (reqest, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:runner', (request, response) => {
    const runnerName = request.params.runner.toLowerCase()
    if(runners[runnerName]){
        response.json(runners[runnerName])
    }else{
        response.json(runners['unknown'])
    }

})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})