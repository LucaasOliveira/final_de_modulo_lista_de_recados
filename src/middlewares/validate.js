import { users } from '../routes/userRoutes';

//verifica se os campos obrigatórios estão presentes
function validateFields(fields, res) {
    for (const [key, value] of Object.entries(fields)) {
        if (!value) {
            return res.status(400).send(`Por favor, verifique se passou o ${key}.`);
        };
    };
};

// Valida o registro de usuário
export function validateUserRegistration(req, res, next) {
    const { name, email, password } = req.body;
    const user = users.find(user => user.email === email);

    const error = validateFields({ nome: name, email: email, senha: password }, res);
    if (error) return;

    if (user) {
        return res.status(400).send('Email já cadastrado, insira outro.');
    };

    next();
};

// Valida o login de usuário
export function validateUserLogin(req, res, next) {
    const { email, password } = req.body;

    const error = validateFields({ email: email, senha: password }, res);
    if (error) return;

    next();
};

// Valida a criação de uma nova mensagem
export function validateCreateMessage(req, res, next) {
    const { title, description } = req.body;

    const error = validateFields({ título: title, descrição: description }, res);
    if (error) return;

    next();
};

// Valida a atualização de uma mensagem existente
export function validateUpdateMessage(req, res, next) {
    const { title, description } = req.body;

    const error = validateFields({ título: title, descrição: description }, res);
    if (error) return;

    next();
};
