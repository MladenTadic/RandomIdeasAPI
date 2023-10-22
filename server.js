const express = require('express');
const port = 5000;

const app = express();
const ideas = [
    {
        id: 1, 
        text: 'neki tekst',
        tag: 'Tech',
        username: 'Djoka',
        date: '2023-10-22'
    },
    {
        id: 2, 
        text: 'neki tekst 2',
        tag: 'Tech',
        username: 'Djoka',
        date: '2023-10-22'
    }];

app.get('/', (request, response) => {
    response.json({ message: 'Welcome to the RandomIdeasAPI'});
});

//Get all ideas
app.get('/api/ideas', (request, response) => {
    response.json({ success: true, data: ideas });
});

//Get an a idea
app.get('/api/ideas/:id', (request, response) => {
    const idea = ideas.find((idea) => idea.id === +request.params.id);

    if (!idea){
       return response.status(404).json({ success: false, error: 'Resource not found'})
    }

    response.json({ success: true, data: request.params.id});
});


app.listen(port, () => {console.log(`Server listening on port ${port}`)});