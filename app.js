// importo express
const express = require('express');

// inizializzo express nella variabile app
const app = express();

// definisco il numero di porta
const port = 3000;

// definisco use per richiamare gli asset statici nella cartella public
app.use(express.static('public'));

// definisco la rotta base dell'app
app.get('/', (req, res) => {
    res.send('Server del mio blog');
})


app.get('/bacheca', (req, res) => {
    const ricette = [
        {
            titolo: "Ciambellone",
            contenuto: "Un dolce profumato e soffice",
            immagine: "public/images/ciambellone.jpeg",
            tags: ["tag1, tag2, tag3, tag4"]
        },
        {
            titolo: "Crackers alla barbabietola",
            contenuto: "Snack stuzzicante e originale",
            immagine: "public/images/cracker_barbabietola.jpeg",
            tags: ["tag1, tag2, tag3, tag4"]
        },
        {
            titolo: "Pane fritto dolce",
            contenuto: "Golosa ricetta antispreco",
            immagine: "public/images/pane_fritto_dolce.jpeg",
            tags: ["tag1, tag2, tag3, tag4"]
        },
        {
            titolo: "Pasta alla barbabietola",
            contenuto: "Primo piatto dai colori vivaci",
            immagine: "public/images/pasta_barbabietola",
            tags: ["tag1, tag2, tag3, tag4"]
        },
        {
            titolo: "Torta Paesana",
            contenuto: "Dolce di origine Lombarda",
            immagine: "public/images/torta_paesana.jpeg",
            tags: ["tag1, tag2, tag3, tag4"]
        },
    ]

    res.json(ricette);
})




// impostiamo il server in ascolto sulla porta stabilita
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
