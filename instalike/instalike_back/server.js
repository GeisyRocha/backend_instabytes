import express from "express"; // importando o express do pacote express, essa linha esta importando para o node_modules

const posts = [
    {id: 1, descricao: "Uma foto teste", imagem: "https://placecats.com/millie/300/500"
    },
    {id: 2, descricao: "Gato fazendo yoga", imagem: "https://placecats.com/millie/300/500"
    },
    {id: 3, descricao: "Gato fazendo Comidinha", imagem: "https://placecats.com/millie/300/500"
    },
    
  ];


//usando o express

const app = express();//express é uma função e vc vai usar apartir de app

app.use = (express.json());

app.listen(3000, () => {
    console.log("servidor escutando... ");
} );        //funções recebem parametros

//criando um rota
app.get("/posts", (req, res) => {  //end point 
    res.status(200).json(posts); //
}) //requisição e resposta

//buscando um dado dentro de uma estrutura
function buscaPostID(id){
    return posts.findIndex((post) =>{
        return post.id === Number(id)

    })
}

app.get("/posts/:id", (req, res) => {  //dado variavel
    const index = buscaPostID(req.params.id)
    res.status(200).json(posts[index]); //posição do post a ser retornado
}) //requisição e resposta