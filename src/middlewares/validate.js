import { users } from '../routes/userRoutes.js';

// verificar se os campos obrigatórios estão presentes
function validateFields(fields, res) {
    for (const [key, value] of Object.entries(fields)) {
        if (!value) {
            res.status(400).send(`Por favor, verifique se passou o ${key}.`);
            return true;
        }
    }
    return false;
}

export function validateUserRegistration(req, res, next) {
    const { name, email, password } = req.body;
    
    if (validateFields({ nome: name, email: email, senha: password }, res)) return;

    const user = users.find(user => user.email === email);

    if (user) {
        return res.status(400).send('Email já cadastrado, insira outro.');
    }

    next();
}

export function validateUserLogin(req, res, next) {
    const { email, password } = req.body;

    if (validateFields({ email: email, senha: password }, res)) return;

    next();
}

export function validateCreateMessage(req, res, next) {
    const { title, description } = req.body;

    if (validateFields({ título: title, descrição: description }, res)) return;

    next();
}

export function validateUpdateMessage(req, res, next) {
    const { title, description } = req.body;

    if (validateFields({ título: title, descrição: description }, res)) return;

    next();
}
