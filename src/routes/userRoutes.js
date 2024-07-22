import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { validateUserLogin, validateUserRegistration } from '../middlewares/validate.js';

const router = express.Router();

const users = [];

// Criação de conta
router.post('/signup', validateUserRegistration, (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = {
            idUser: uuidv4(),
            name,
            email,
            password
        };

        users.push(newUser);

        res.status(201).send(`Seja bem-vindo ${name}! Pessoa usuária registrada com sucesso!`);
    } catch {
        res.status(500).json({
            message: 'Erro ao registrar a pessoa usuária.'
        });
    };
});

// Login
router.post('/login', validateUserLogin, (req, res) => {
    try {
        const { email, password } = req.body;

        const user = users.find(user => user.email === email);

        if (!user) {
            return res.status(404).send('Email não encontrado no sistema, verifique ou crie uma conta.');
        };

        if (user.password !== password) {
            return res.status(404).send('Credenciais inválidas.');
        };

        res.status(200).send(`Seja bem-vindo ${user.name}! Pessoa usuária logada com sucesso!`);
    } catch {
        res.status(500).json({
            message: 'Erro ao realizar o login.'
        });
    };
});

export { router as userRoutes, users };
