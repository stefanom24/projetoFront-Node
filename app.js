const express = require('express');
const app = express();

// Deixando o node/express utilizar e ler arquivos html
app.use(express.urlencoded({extended: true}));

// Definindo pasta de bootstrap para ser utilizado
app.use("/",express.static("./node_modules/bootstrap/dist/"));

app.set('view engine', 'ejs');

// Roteando pagina inicial
app.get('/', (req, res) => {
    res.render('index');
});

// Roteando pagina cadastro de trens
app.get('/trens', (req, res) => {
    res.render('trens');
});

// Roteando pagina cadastro de linhas
app.get('/linhas', (req, res) => {
    res.render('linhas');
});

// Roteando pagina cadastro de estações
app.get('/estacoes', (req, res) => {
    res.render('estacoes');
});

// Roteando pagina ocorrencias de trens
app.get('/ocoTrens', (req, res) => {
    res.render('');
});

// Roteando pagina ocorrencias de linhas
app.get('/ocoLinhas', (req, res) => {
    res.render('');
});

// Roteando pagina ocorrencias de estações
app.get('/ocoEstacoes', (req, res) => {
    res.render('');
});

// Recebendo dados do Login
app.post('/login', (req, res) => {
    let user = req.body.loginEmail;
    let password = req.body.loginPassword;
    console.log(`seu usuario e: ${user} e sua senha e: ${password}`);

})

app.listen(3000, () => {
    console.log('Servidor iniciado.');
});