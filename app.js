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

// definisco la rotta bacheca che restituisce un array di oggetti
app.get('/bacheca', (req, res) => {
    const ricette = [
        {
            titolo: "Ciambellone",
            contenuto: "Un dolce profumato e soffice",
            immagine: "public/images/ciambellone.jpeg",
            tags: ["uova, zucchero, farina, lievito"]
        },
        {
            titolo: "Crackers alla barbabietola",
            contenuto: "Snack stuzzicante e originale",
            immagine: "public/images/cracker_barbabietola.jpeg",
            tags: ["farina di riso, fiocchi di avena, barbabietole precotte, olio di oliva"]
        },
        {
            titolo: "Pane fritto dolce",
            contenuto: "Golosa ricetta antispreco",
            immagine: "public/images/pane_fritto_dolce.jpeg",
            tags: ["pane raffermo, latte intero, uova, zucchero"]
        },
        {
            titolo: "Pasta alla barbabietola",
            contenuto: "Primo piatto dai colori vivaci",
            immagine: "public/images/pasta_barbabietola",
            tags: ["pennette 5 cereali, barbabietole precotte, scalogno, olio di oliva"]
        },
        {
            titolo: "Torta Paesana",
            contenuto: "Dolce di origine Lombarda",
            immagine: "public/images/torta_paesana.jpeg",
            tags: ["pane raffermo, uova, cacao amaro, uvetta"]
        },
    ]

    res.json(ricette);
})




// impostiamo il server in ascolto sulla porta stabilita
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
