import express from "express"; // ... significa que as tipagems existem mas não está dentro delas (há uma biblioteca a parte com as tipagens)

// @types/express -> yarn add @types/express -D
const app = express();


/**
 * GET    => Buscar uma informação (listagens, ...)
 * POST   => Inserir uma informação (criações, ...)
 * PUT    => Alterar uma informação (manipulação de um dado já existente)
 * DELETE => Remover um dado
 * PATCH  => Alterar uma informação específica
 */
app.get("/test", (request, response) => {
    // Request  => Entrada
    // Response => Saída
    return response.send("Olá NLW");
})

app.post("/test-post", (request, response) => {
    return response.send("método POST");
})

// http://localhost:3000
app.listen(3000, () => { console.log("Server is running") });