
const express = require('express');
const app = express();
const host = "localhost"; 
const port = 3000;
const contador = require("./contador")

app.get("/saludo", (req, res) => {
    const saludos = ['Español: Hola ¿Como estas?', 
                    'Ingles: Hello, ¿How are you?',
                    'Japones: こんにちは、元気ですか']
    const saludarAletorio = Math.floor(Math.random() * saludos.length);
    res.send(saludos[saludarAletorio])
})


app.get('/personas', (req, res) => { 
    const jsonObject = [ { 
        nombre: 'Camilo Monsalve',
        edad: 26,
        Pais: 'Colombia',
    },
    {
        nombre: 'Menfi Garcia',
        edad: 28,
        Pais: 'Honduras',
    },

    {
        nombre: 'Damary Castro',
        edad: 30,
        Pais: 'Honduras',
    },]

    res.json(jsonObject)

}); 

app.route("/contadordenumeros").get((req, res) => {
    const numeroContados = contador.contarNumeros();
    res.json({ numeros: numeroContados });
});

// Iniciar el servidor
app.listen(port, () => {
console.log(`Servidor funcionando en :${port}` + host);
});
