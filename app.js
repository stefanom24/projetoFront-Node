const express = require('express');
const app = express();
const fs = require('fs');

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

// Recebendo dados do cadastro de trens
app.post('/trens', (req, res) => {
    //Fazer toda logica de escrever para json.
})

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
    let email = req.body.loginEmail;
    let password = req.body.loginPassword;
    const loginFile = require('./login.json');
    let user = {
        "email": email,
        "password": password
    }
    loginFile.users.push(user);

    fs.writeFile('login.json', JSON.stringify(loginFile), err => {
        //checando erros
        if (err) return err;

        console.log('Gravado');
    })

    fs.readFileSync('./login.json', 'utf8', (err, data) => {
        if (err) console.error(err);
        const login = JSON.parse(data);
      
        console.log(login[1].value);
    });
    
})

app.listen(3000, () => {
    console.log('Servidor iniciado.');
});