const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage' : {
        'age' : 29,
        'birthName' : 'Shéyaa Bin Abraham-Joseph',
        'birthLocation' : 'Plaistow, London'
    },
    'chance the rapper':{
        'age': 28,
        'birthName': 'Chancelor Jonathan Bennett',
        'birthLocation': 'London, England'
    },
    'unknown' : {
        'age' : 0,
        'birthName' : 'unkown',
        'birthLocation' : 'unknown'
    }   
}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    let rapperName = request.params.name.toLowerCase()
    if (rappers[rapperName]) {
        response.json(rappers[rapperName])
    } else {
        response.json(rappers['unknown'])
    }
    
})

app.listen(PORT, () => {
    console.log(`The server if now running on port ${PORT} you better go catch it`)
})