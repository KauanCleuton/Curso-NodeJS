const express = require('express');
const app = express();
const customers = [];

const { v4: uuidv4 } = require('uuid');

app.use(express.json());

function verifyIfExistsAccountName(request, response, next) {
    const { name } = request.body;

    const customer = customers.find((customer) => customer.name === name);

    if (customer) {
        return response.status(400).json({ error: "Customer with the same name already exists" });
    }

    return next();
}

app.post('/inserir', verifyIfExistsAccountName, (request, response) => {
    const { name, email, password } = request.body;

    customers.push({
        name,
        email,
        password,
        id: uuidv4()
    });

    return response.status(201).send();
});

app.patch('/updatepassword', (request, response) => {
    const { name, newPassword } = request.body;

    const customer = customers.find((customer) => customer.name === name);

    if (!customer) {
        return response.status(404).json({ error: "Customer not found" });
    }

    // Atualiza a senha do cliente encontrado
    customer.password = newPassword;

    return response.status(200).json({ message: "Password updated successfully" });
});
app.post('/authentication', (request, response) => {
    const { name, email, password } = request.body

    const customer = customers.find(customer => customer.email === email)

    if(!customer) {
        return response.status(400).json({
            error: "Email Invalid"
        })
    }
    if(customer.password !== password) {
        return response.status(400).json({
            error: "Password invalid"
        })
    }
    return response.status(201).json({
        mensagem: `Welcome back, Mr. ${name}`
    })
    
})

app.get('/list', (request, response) => {
    response.send(customers);
});

app.listen(3333, () => {
    console.log('Server is running!!');
});
