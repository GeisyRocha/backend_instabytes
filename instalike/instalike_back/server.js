import express from "express"; // importando o express do pacote express, essa linha esta importando para o node_modules

//usando o express

const app = express();//express é uma função e vc vai usar apartir de app
app.listen(3000, () => {
    console.log("servidor escutando... ");
} );        //funções recebem parametros

//criando um rota
app.get("/api", (req, res) => {
    res.status(200).send("A torre Eifell iluminada à noite, com milhares de luzes cinitilando, criando um espetáculo mágico em Paris."); //
}) //requisição e resposta