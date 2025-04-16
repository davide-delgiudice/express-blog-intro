// importo express
const express = require('express');

// inizializzo express nella variabile app
const app = express();

// definisco il numero di porta
const port = 3000;

// definisco la rotta base dell'app
app.get('/', (req, res) => {
    res.send('Server del mio blog');
})







// impostiamo il server in ascolto sulla porta stabilita
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
