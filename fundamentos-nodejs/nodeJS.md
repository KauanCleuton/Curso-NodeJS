app.use(express.json()) // Middle => Precisa para usar o JSON no insomnia



app.get("/courses", (request, response) => {

    const query = request.query
    console.log(query)
    return response.json([
        "Curso 1",
        "Curso 2",
        "Curson 3"
    ])
})

app.post("/courses", (request, response) => {
    const body = request.body
    console.log(body)
    return response.json([
        "Curso 1",
        "Curso 2",
        "Curson 3",
        "Curso 4"
    ])
})

app.put('/courses/:id', (request, response) => {
    const params = request.params
    console.log(params)
    return response.json([
        "Curso 6",
        "Curso 2",
        "Curson 3",
        "Curso 4"
    ])
})

app.patch("/courses/:id", (request, response) => {
    return response.json([
        "Curso 6",
        "Curso 7",
        "Curson 3",
        "Curso 4"
    ])
})

app.delete("/courses/:id", (request, response) => {
    return response.json([
        "Curso 6",
        "Curso 2",
        "Curso 4"
    ])
})